import { Btn } from "./Button.styled";

const Button = ({ width, text, onClick, variant }) => {
  return (
    <Btn width={width} onClick={onClick} variant={variant}>
      {text}
    </Btn>
  );
};

export default Button;
