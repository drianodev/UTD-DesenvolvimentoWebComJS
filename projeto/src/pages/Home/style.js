import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 22px;
    color:red;
    font-family:Arial, Helvetica, sans-serif;
`;

export const Link = styled.a`

  position: absolute;
  background: #e1eaeb;
  color: #7f7c7c;
  left: 0px;
  height: 20px;
  width: 440px;
  padding: 17px 30px 20px 30px;
  font-size: 16px;
  text-align: right;
  border-top: 1px solid #dbe5e8;

  -webkit-border-radius: 0 0  5px 5px;
  border-radius: 0 0  5px 5px;

  font-weight: bold;
  background: #f7f8f1;
  padding: 6px;
  color: rgb(29, 162, 193);
  margin-left: 10px;
  border: 1px solid #cbd518;

  -webkit-border-radius: 4px;
  border-radius: 4px;  

  -webkit-transition: all 0.4s linear;
  transition: all 0.4s  linear;
`;

export const ButtonEdit = styled.button`

button {
          background: green;
          border: none;
          border-radius: 5px;
          box-shadow: 0 4px 8px transparentize(#222, .8);
          bottom: -30px;
          color: #fff;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          left: 50%;
          padding: 10px 0;
          position: absolute;
          transform: translate(-50%, 50%);
          transition: background .12s ease-out;
          width: 50%;
          margin:3px;

          &:hover,
          &:focus {
            background: lighten(#927cfe, 5%);
            cursor: pointer;
          }
        }

`;