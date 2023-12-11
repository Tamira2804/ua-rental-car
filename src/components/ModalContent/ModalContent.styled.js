import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 100%;
  height: 268px;
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  object-fit: cover;
  object-position: center;
  border-radius: var(--radius-md);
  background-color: var(--colors-text-inactive);
`;

export const CardBody = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;

  & span {
    color: var(--accent);
  }
`;

export const Title = styled.h3`
  color: var(--colors-text);
  font-size: var(--fs-lg);
  font-weight: var(--fw-normal);
  line-height: 1.5;
  padding-bottom: 4px;
`;

export const CardList = styled.ul`
  width: 255px;

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

export const Description = styled.p`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  line-height: 1.43;
  padding-top: 10px;
`;

export const Subtitle = styled.p`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-normal);
  line-height: 1.43;
  padding-bottom: 4px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: var(--fs-xs);
  letter-spacing: -0.24px;
  padding-bottom: 4px;
`;

export const ConditionsItem = styled.li`
  border-radius: 35px;
  color: var(--colors-text-conditions);
  background-color: var(--colors-bg-conditions);
  padding: 7px 14px;

  & span {
    color: var(--accent);
    font-weight: var(--fw-bold);
    padding-left: 4px;
  }
`;
