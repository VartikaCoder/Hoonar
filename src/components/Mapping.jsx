import React, { useState } from "react";
import { Button } from "@mui/material";

const testArr = [21, 42, 54, 1, 87, 190, 56, 27, 89];
export default function Mapping() {
  const [threeVal, setThreeVal] = useState(testArr.slice(0, 3));
  const [index, setIndex] = useState(1);
  const prevFun = () => {
    if (index >= 1) {
      setThreeVal(testArr.slice(index - 1, index + 2));
      setIndex(index - 1);
    } else {
      alert("Hey, you can't go into wonderland!!!");
    }
  };
  const nextFun = () => {
    if (index < testArr.length - 2) {
      setThreeVal(testArr.slice(index, 3 + index));
      setIndex(index + 1);
    } else {
      alert("That's it buddy!!!");
    }
  };
  return (
    <div>
      <Button variant="contained" onClick={prevFun}  >
        Prev
      </Button>
      <Button variant="contained" color="success" sx={{ m: 2 }} onClick={nextFun} >
        Next
      </Button>
      <div sx={{ m: 2 }}>
        {threeVal.map((item, i) => (
          <Button variant="outlined" color="error" key={i} sx={{ m: 1 }}>
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
}