import styled from "styled-components";
import Image from "../../images/hero7.jpg";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Title = styled.h1`
  display: flex;
  font-size: var(--fs-xxl);
  font-weight: 600;
  color: var(--white);
  text-align: center;
  width: 460px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
`;

export const Text = styled.p`
  display: flex;
  font-size: var(--fs-xl);
  line-height: 1.8;
  font-weight: var(--fw-bold);
  color: var(--white);
  text-align: center;
  width: 800px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled(Link)`
  display: flex;

  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-sm);
  background-color: var(--accent);
  color: var(--white);
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;

  font-size: var(-fs-sm);
  font-weight: var(fw-bold);
  line-height: 1.5;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background-color: var(--accent-hover);
  }
`;
