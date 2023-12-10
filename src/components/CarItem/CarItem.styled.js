import styled from "styled-components";

export const CardThumb = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 274px;
  height: 426px;
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
`;
export const FavoriteIcon = styled.div``;

export const CardBody = styled.div`
  margin-bottom: 28px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);
  line-height: 1.5;
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
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: var(--fw-light);
  line-height: 1.5;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin-right: 6px;
    padding-right: 6px;
  }
`;
