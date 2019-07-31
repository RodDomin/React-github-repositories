import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: #7159c1;
    font-size: 16px;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #eee;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 7.5px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Filters = styled.form`
  margin-top: 15px;
  display: flex;
  justify-content: center;

  select {
    margin-right: 10px;
    appearance: none;
    width: 75px;
    height: 35px;

    border-radius: 4px;
    border-width: 0px;
    background-color: #7159c1;
    color: #fff;

    font-size: 14px;
    padding: 10px 5px;
  }

  input {
    border: none;
    width: 75px;
    height: 35px;

    background-color: #7159c1;
    color: #fff;
  }

  input:hover {
  }
`;

export const Pages = styled.div`
  margin-top: 30px;

  display: flex;
  justify-content: space-around;
  color: black;

  button {
    border: 1px solid rgb(228, 228, 228);
    border-radius: 5px;

    width: 65px;
    height: 32.5px;

    background: white;
    transition: 300ms;
  }

  button:hover {
    background-color: #7159c1;
    color: white;
  }

  p {
    padding: 7.5px 15px;

    border: 1px solid rgb(228, 228, 228);
    border-radius: 5px;

    background: white;
  }
`;
