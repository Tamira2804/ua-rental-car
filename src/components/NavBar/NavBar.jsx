import { Nav, Link } from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </Nav>
  );
};

export default NavBar;
