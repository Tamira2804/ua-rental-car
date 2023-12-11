import styled from "styled-components";
import { FaCarTunnel } from "react-icons/fa6";

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-bg-input);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  margin: 0 auto;
`;

export const Logo = styled.a.attrs({ href: "/" })`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;
export const LogoIcon = styled(FaCarTunnel)`
  fill: var(--accent);
`;

export const ModeSwitcher = styled.div`
  display: flex;
  align-items: center;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;
