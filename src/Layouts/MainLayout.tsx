import { Header } from "./Header";

export const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
