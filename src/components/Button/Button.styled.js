import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 12px 0;
  cursor: pointer;

  border-radius: 12px;
  background-color: var(--accent);
  border: none;

  color: var(--white);
  font-family: var(--family);
  font-size: var(--fs-sm);
  font-style: normal;
  font-weight: var(--fw-bold);
  line-height: 20px;

  &:hover {
    background-color: var(--accent-hover);
  }

  &.linked {
    background-color: transparent;
    color: var(--accent);

    &:hover {
      color: var(--accent-hover);
    }
  }
`;
