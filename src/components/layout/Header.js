import { FaFileInvoiceDollar } from "react-icons/fa";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.icon}>
        <FaFileInvoiceDollar />
      </div>
    </header>
  );
};
export default Header;
