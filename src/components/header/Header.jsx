import { Container, Logout } from "../index";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },

    {
      name: "Register",
      slug: "/register",
      active: !authStatus,
    },
  ];
  return (
    <header>
      <Container>
        <nav>
          <div>{/* For Logo */}</div>

          <ul>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
