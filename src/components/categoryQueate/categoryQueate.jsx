import React from "react";
import Spinner from "../spinner/Spinner";

import hightChak from "../../assets/hightChack.png";
import "./categoryQuete.scss";

const CategoryQuote = ({ quote }) => {
  if (!quote) {
    return <Spinner />;
  }

  return (
    <div className="queate">
      <div>
        <img src={hightChak} alt="hightChack" />
      </div>

      <div className="queate__window">
        <span className="queate__text">{quote}</span>
      </div>
    </div>
  );
};

export default CategoryQuote;
