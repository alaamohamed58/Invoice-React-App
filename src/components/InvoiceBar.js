import { useSelector } from "react-redux";
import { Fragment, memo } from "react";
import InvoiceItem from "./InvoiceItem";
import classes from "./InvoiceBar.module.css";
const InvoiceBar = ({ filtered }) => {
  let { data } = useSelector((state) => state.invoiceReducer);

  return (
    <Fragment>
      <ul className={classes.categories}>
        <li>ORDER ID</li>
        <li>CREATED AT</li>
        <li>CUSTOMER</li>
        <li>TOTAL</li>
        <li>STATUS</li>
      </ul>
      {data &&
        data.data &&
        data.data.invoices.map((item) => (
          <InvoiceItem
            id={item._id.substring(0, 5)}
            key={item._id}
            name={item.client_name}
            items={item.items}
            date={item.created_at}
            status={item.status}
          />
        ))}
    </Fragment>
  );
};
export default memo(InvoiceBar);
