import { Btn } from "./Button.styled";

const Button = ({ type, width, text, onClick, className }) => {
  return (
    <Btn type={type} width={width} onClick={onClick} className={className}>
      {text}
    </Btn>
  );
};

export default Button;
