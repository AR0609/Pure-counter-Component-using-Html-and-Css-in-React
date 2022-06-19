import React from "react";
import "./counter.scss";
import add from "./add.svg";
import minus from "./minus.svg";
import propTypes from "prop-types";

const Counter = ({
  grey = false,
  vertical = false,
  width = "",
  twobutton = false,
  contentgrey = false,
  handleincrement,
  handledecrement,
  content,
}) => {
  return (
    <>
      {!twobutton ? (
        <div className={vertical ? "vertical" : "counter"}>
          <div
            className={`counter-outline ${grey ? "small" : "big"}`}
            style={{ width: width }}
          >
            <div
              className={`minus ${grey ? "grey" : "white"}`}
              onClick={vertical ? handleincrement : handledecrement}
            >
              <img src={vertical ? add : minus} />
            </div>

            <div
              className={`content ${grey ? "smallheight" : "bigheight"} ${
                contentgrey ? "grey" : "white"
              }`}
            >
              {content}
            </div>

            <div
              className={`plus ${grey ? "grey" : "white"}`}
              onClick={vertical ? handledecrement : handleincrement}
            >
              <img src={vertical ? minus : add} />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="twobutton-counter">
            <div className="twobutton-content">{content}</div>
            <div>
              <div className="small-plus" onClick={handleincrement}>
                <img src={add} className="small-image" />
              </div>
              <div className="small-minus" onClick={handledecrement}>
                <img src={minus} className="small-image" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Counter;
Counter.propTypes = {
  grey: propTypes.bool,
  vertical: propTypes.bool,
  width: propTypes.string,
  twobutton: propTypes.bool,
  contentgrey: propTypes.bool,
  handleincrement: propTypes.func,
  handledecrement: propTypes.func,
  content: propTypes.object,
};
