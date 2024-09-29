import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const AuthNavigation = () => {
  const Navigation = styled.nav`
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: flex-end;
  `;

  return (
    <Navigation>
      <Link href="/login">Sign in</Link>
      <Link href="/register">Sign up</Link>
    </Navigation>
  );
};
