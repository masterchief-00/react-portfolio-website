import React, { useCallback } from "react";
import "./notice.css";
import { ImCross } from "react-icons/im";

const Notice = ({ notice, onChangeDisplay }) => {
  const clickHandler = useCallback(
    (event) => {
      onChangeDisplay(false);
    },
    [onChangeDisplay]
  );
  return (
    <div className="container notice__container">
      <div className="close">
        <a href="#" onClick={clickHandler}>
          <ImCross className="close__button" />
        </a>
      </div>
      <p>
        Hi there, this whole website is developed for learning purposes, that
        means that I don't really pocess all the skills mentioned in this
        portfolio. Thanks :)
      </p>
    </div>
  );
};

export default Notice;
