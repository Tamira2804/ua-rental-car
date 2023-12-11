import styled from "styled-components";

export const CardThumb = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 274px;
  height: 426px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  object-position: center;
  border-radius: 14px;
  background-color: var(--colors-text-inactive);
`;

export const CardBody = styled.div`
  padding: 0 8px;
  margin-bottom: 28px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  & span {
    color: var(--accent);
  }
`;

export const Title = styled.h3`
  color: var(--colors-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  line-height: 1.5;
  height: 24px;
  overflow: hidden;
`;

export const Price = styled.p`
  color: var(--colors-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-normal);
  line-height: 1.5;
`;

export const CardList = styled.ul`
  width: 255px;
  height: 40px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  overflow: hidden;
  gap: 4px;
`;

export const CardItem = styled.li`
  display: block;
  color: var(--colors-text-secondary);
  font-size: var(--fs-xs);
  font-weight: var(--fw-light);
  line-height: 1.5;

  &:not(:last-child) {
    border-right: 1px solid var(--colors-text-secondary);
    margin-right: 6px;
    padding-right: 6px;
  }
`;
