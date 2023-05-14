import React, { useState, useRef, useEffect } from "react";
import { Box, TextField } from "@mui/material";

export default function Struggling() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  function handleFirst(event) {
    const value = parseInt(event.target.value);

    if (value <= 101) {
      setInput1(value);
      setInput2(100 - value);
    }
  }

  function handleSecond(event) {
    const value = parseInt(event.target.value);

    if (value <= 101) {
      setInput2(value);
      setInput1(100 - value);
    }
  }
  return (
    <div>
      <Box component="form" >
        <TextField
          label="First"
          variant="outlined"
          value={input1}
          onChange={handleFirst}
        />
        <TextField
          label="Second"
          variant="outlined"
          value={input2}
          onChange={handleSecond}
        />
        <TextField
          id="outlined-basic"
          label="Result"
          variant="outlined"
          value="100"
          name="result"
          type="number"
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
    </div>
  );
}
