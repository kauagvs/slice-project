import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1rem;
  border: 0;
  padding: 0 2rem;
  border-radius: 0.25rem;
  height: 3rem;
  transition: filter 0.2s;
  color: ${props => (props.color == "primary" ? `#fff` : `#3182CE`)};
  background: ${props =>
    props.color == "primary" ? `#3182CE` : `transparent`};
  border: 1px solid
    ${props => (props.color == "primary" ? `transparent` : `#3182CE`)};

  &:hover {
    filter: brightness(0.9);
  }
`;
