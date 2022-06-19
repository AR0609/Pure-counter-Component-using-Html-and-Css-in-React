import { before } from "lodash";
import React, { useState } from "react";
import Counter from "../index";

const Counter6 = () => {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("");
  const onincrement = () => {
    setCount(count + 1);
  };
  const ondecrement = () => {
    setCount(count - 1);
  };
  console.log(date, "ghost");
  // const style = {
  // 	left: '36px',
  // 	position: 'absolute',
  // 	fontFamily: 'Montserrat-medium',
  // 	fontSize: '12px',
  // 	fontWeight: '500',
  // 	lineHeight: '14px',
  // 	textAlign: 'left',
  // 	letterSpacing: '0em',
  // 	content: attr(placeholder),
  // };
  // const time = {
  // 	left: '36px',
  // 	position: 'absolute',
  // 	fontFamily: 'Montserrat-medium',
  // 	fontSize: '12px',
  // 	fontWeight: '500',
  // 	lineHeight: '14px',
  // 	textAlign: 'left',
  // 	letterSpacing: '0em',
  // 	content: attr(value),
  // };
  return (
    <>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Counter
          grey={true}
          width="146px"
          twobutton={true}
          handleincrement={onincrement}
          handledecrement={ondecrement}
          content={count}
        />
      </div>
      {/* <div className="addc">
				<input
					type="date"
					className="date"
					value={date}
					// style={date ? time : style}
					onChange={(e) => setDate(e.target.value)}
					placeholder="Select Date"
				/>
			</div> */}
    </>
  );
};

export default Counter6;
