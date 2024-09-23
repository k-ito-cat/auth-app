import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}
export const Layout: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div>
      <h1>Layout</h1>
      {children}
    </div>
  );
};
