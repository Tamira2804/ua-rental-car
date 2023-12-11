import { Btn } from "./Button.styled";

const Button = ({ type, width, text, onClick, background, color, hover }) => {
  return (
    <Btn
      type={type}
      width={width}
      onClick={onClick}
      background={background}
      color={color}
      hover={hover}
    >
      {text}
    </Btn>
  );
};

export default Button;
