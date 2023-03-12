import React, { useState } from "react";

import "./styles.css";
import NewsDoc from "../../contentNews/news.json";

import dados from "../../assets/Benjamin.jpg";

const News = () => {
  const [news, setNews] = useState(NewsDoc);

  return (
    <div className="wrap">
      <div className="div">
        <img src={dados}></img>
        <span>
          Benjamin Perdido no dia 12/03/2023 Caso Encontre entre em contato{" "}
        </span>
        <span>Whatsapp: 53 992411640 - Rafael</span>
      </div>
    </div>
  );
};

export default News;
