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
  border-radius: 14px;

  /* background-position: center;
  background-size: cover;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2; */
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
  font-size: var(--fs-sm);
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

  font-size: 12px;
  letter-spacing: -0.24px;
`;

export const ConditionsItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;

  & span {
    color: var(--accent);
    font-weight: var(--fw-bold);
    padding-left: 4px;
  }
`;
