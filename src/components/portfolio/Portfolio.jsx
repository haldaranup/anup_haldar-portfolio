import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  frontEnd,
  backEnd,
  tools
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Front-end",
    },
    {
      id: "web",
      title: "Back-end",
    },
    {
      id: "mobile",
      title: "Tools",
    }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(frontEnd);
        break;
      case "web":
        setData(backEnd);
        break;
      case "mobile":
        setData(tools);
        break;
      default:
        setData(frontEnd);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
