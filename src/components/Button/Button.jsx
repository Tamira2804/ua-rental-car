import { Btn } from "./Button.styled";

const Button = ({ type, width, text, onClick, variant }) => {
  return (
    <Btn type={type} width={width} onClick={onClick} variant={variant}>
      {text}
    </Btn>
  );
};

export default Button;
