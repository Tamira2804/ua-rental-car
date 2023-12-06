import { Btn } from "./Button.styled";

const Button = ({ width, text, onClick }) => {
  return (
    <Btn width={width} onClick={onClick}>
      {text}
    </Btn>
  );
};

export default Button;
