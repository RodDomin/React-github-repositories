import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../Components/Container';

import { Loading, Owner, IssueList, Filters, Pages } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`repos/${repoName}`),
      api.get(`repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
    });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const op = document.querySelector('select').value;

    const issues = await api.get(`repos/${repoName}/issues`, {
      params: {
        state: op,
        per_page: 5,
      },
    });

    this.setState({ loading: false, issues: issues.data, page: 1 });
  };

  handlePage = async dec => {
    const { page } = this.state;
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);
    const op = document.querySelector('select').value;

    if (dec === 1) {
      this.setState({ page: page + 1 });
    }

    if (page > 1 && dec === 0) {
      this.setState({ page: page - 1 });
    }

    const issues = await api.get(`repos/${repoName}/issues`, {
      params: {
        state: op,
        per_page: 5,
        page,
      },
    });

    return this.setState({ issues: issues.data });
  };

  render() {
    const { loading, repository, issues, page } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <>
        <Container>
          <Owner>
            <Link to="/">Voltar aos repositórios</Link>
            <img src={repository.owner.avatar_url} alt="user logo" />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </Owner>
          <Filters onSubmit={this.handleSubmit}>
            <select>
              <option value="open">Abertos</option>
              <option value="all">Todos</option>
              <option value="closed">Fechados</option>
            </select>
            <input type="submit" value="Filtrar" />
          </Filters>
          <IssueList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt="icon" />
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                    {issue.labels.map(label => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssueList>
          <Pages>
            <button onClick={() => this.handlePage(0)} type="button">
              Anterior
            </button>
            <p>{page}</p>
            <button onClick={() => this.handlePage(1)} type="button">
              Proxima
            </button>
          </Pages>
        </Container>
      </>
    );
  }
}
