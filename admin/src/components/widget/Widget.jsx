import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
const Widget = ({ type }) => {

  //fetch data

  const useItemCount  = (path) => {
    const { data, loading, error } = useFetch(`/${path}`);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
      if (data) {
        setItemCount(data.length);
      }
    }, [data]);

    return itemCount;
  };
  
  //const { data: res } = useFetch(`/${path}`);

  const userCount=useItemCount("users")
  const hotelCount=useItemCount("hotels")
  const roomCount=useItemCount("rooms")

  let data;
  //temporary
 

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        count:userCount,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "hotel":
      data = {
        title: "Hotels",
        isMoney: false,
        link: "View all hotels",
        count:hotelCount,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "room":
      data = {
        title: "Rooms",
        isMoney: true,
        link: "View all rooms",
        count:roomCount,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.count}
        </span>
        <Link to={`/${data.title}`}>
          <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
