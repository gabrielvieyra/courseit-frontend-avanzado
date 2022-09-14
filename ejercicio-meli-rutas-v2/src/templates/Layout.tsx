// Styles
import "./_layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // aca es donde voy a permitir que se cargen los distintos componentes
  return <div className="layout">{children}</div>;
};

export default Layout;
