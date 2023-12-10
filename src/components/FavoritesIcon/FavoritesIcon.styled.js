import styled from "styled-components";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

export const IconWrap = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
`;

export const EmptyHeart = styled(IoHeartOutline)`
  stroke: #ffffff;
`;

export const FullHeart = styled(IoHeartSharp)`
  fill: var(--accent);
`;
