import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { FaRegMoon, FaSun } from 'react-icons/fa';
import { HeaderEl, Wrapper, Title, ModeSwitcher } from './Header.styled';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Wrapper>
        <Title>Rental Car</Title>
        <ModeSwitcher onClick={toggleTheme}>
          {theme === 'light' ? (
            <FaSun size="14px" />
          ) : (
            <FaRegMoon size="14px" />
          )}
          <span style={{ marginLeft: '0.5rem' }}> {theme} Theme</span>
        </ModeSwitcher>
      </Wrapper>
    </HeaderEl>
  );
};

export default Header;
