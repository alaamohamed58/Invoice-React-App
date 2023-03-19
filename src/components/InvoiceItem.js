import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./InvoiceItem.module.css";
import { AiOutlineRight } from "react-icons/ai";
import ShowMoreIcon from "./icons/ShowMoreIcon";
import ShowLessIcon from "./icons/ShowLessIcon";

const InvoiceItem = ({ items, status, name, date, id }) => {
  const [showItems, setShowItems] = useState(false);

  const toggleItemHandeler = () => {
    setShowItems((prevState) => !prevState);
  };

  return (
    <div className={classes.bar}>
      <ul>
        <li> #{id} </li>
        <li> {new Date(date).toLocaleDateString()} </li>
        <li> {name} </li>
        <li>${items.map((el) => el.total)} </li>
        <li>
          <div className={status ? "status" : "status paid"}>
            <span> {status ? "Pending" : "Paid"} </span>
          </div>
        </li>
        <li>
          <button
            className={`${classes.button} ${showItems ? classes.active : ""}`}
            onClick={toggleItemHandeler}
          >
            {showItems ? <ShowLessIcon /> : <ShowMoreIcon />}
          </button>
        </li>
        <li>
          {" "}
          <Link to={`/invoice/${id}`} className={classes.link}>
            <AiOutlineRight />
          </Link>
        </li>
      </ul>

      {showItems && (
        <div className={classes.detail}>
          <ul className={classes.categories}>
            <li>Item Name</li>
            <li>Cost</li>
            <li>Qty</li>
            <li>Total</li>
          </ul>
          <div>
            {items.map((el, i) => {
              return (
                <ul key={i} className={classes.item}>
                  <li> {el.item_name} </li>
                  <li> {el.price} </li>
                  <li> {el.quantity} </li>
                  <li> ${el.qty * el.price} </li>
                </ul>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceItem;
