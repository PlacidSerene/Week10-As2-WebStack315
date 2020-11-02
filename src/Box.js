import React from "react";

const Box = (props) => {
  //   const [box, setBox] = useState(<div>This is me</div>);
  const { boxs } = props;
  return (
    <div>
      {boxs.map((box, i) => {
        return (
          <div
            className="box"
            key={i}
            style={{
              backgroundColor: box,
              width: "150px",
              height: "150px",
              display: "inline-block",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Box;
