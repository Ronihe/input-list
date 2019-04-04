import styled from 'styled-components';

function changeBgColor(props) {
  return props.bgColor || '#555';
}
const Button = styled.button`
    border-radius: 255px 25px 225px 25px/25px 225px 25px 255px;
    color: #fff;
    background-color:${changeBgColor};
    border-color: #555;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    border: 2px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    -webkit-appearance: button;
    cursor: pointer;
  }
`;

export default Button;
