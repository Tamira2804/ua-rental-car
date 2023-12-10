import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  gap: 100px;
`;

export const Link = styled(NavLink)`
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  color: var(--colors-text);
  text-decoration: none;

  &.active {
    color: var(--accent);
  }
`;
