import styled from 'styled-components';

function changeBgColor(props) {
  return props.color || null;
}

const Input = styled.input`
  outline: none;
  border-bottom: 1px dotted #999;
  width: 35%;
  color: ${changeBgColor};
`;

export default Input;
