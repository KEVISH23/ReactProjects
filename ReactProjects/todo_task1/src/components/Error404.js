import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
const Error404 = () => {
  const navigate = useNavigate()
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <img style={{width:"30%",height:"30%"}} src="./404 error with a tired person-amico.png" alt="404notfound"/>
      <Button onClick={()=>navigate("/")} variant="contained">Go to Home Page</Button>
    </Stack>
  );
};

export default Error404;
