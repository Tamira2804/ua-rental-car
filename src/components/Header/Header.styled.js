import styled from 'styled-components';

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    height: 36px;
  }
`;

export const Title = styled.a.attrs({ href: '/' })`
  color: var(--colors-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  text-decoration: none;
`;

export const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;
