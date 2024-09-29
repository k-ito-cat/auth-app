import { Link } from "react-router-dom";

export const AuthNavigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
