import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
import { FaRegMoon, FaSun } from "react-icons/fa";
import {
  HeaderEl,
  Wrapper,
  Logo,
  LogoIcon,
  ModeSwitcher,
} from "./Header.styled";
import NavBar from "../NavBar";
import Container from "../../components/Container";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Logo>
            Rental C<LogoIcon size="16px" />R
          </Logo>
          <NavBar />
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <FaRegMoon size="20px" />
            ) : (
              <FaSun size="20px" />
            )}
            <span style={{ marginLeft: "0.5rem" }}>Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
