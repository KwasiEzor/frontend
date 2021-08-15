import _Footer from "./_Footer";
import _Nav from "./_Nav";

const Layout = ({ children }) => {
  return (
    <>
      <_Nav />
      {children}
      <_Footer />
    </>
  );
};

export default Layout;
