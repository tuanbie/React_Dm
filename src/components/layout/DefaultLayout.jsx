
import Navbar from "../Navbar";

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;