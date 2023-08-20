import React, { useEffect } from "react";
import { deleteTodoById, showTodo } from "../store/thunk";
import { useDispatch } from "react-redux";
import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ShowToast } from "./Toast";
import { useNavigate } from "react-router-dom";
import { clearList } from "../store/todoslice";

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.list);
  const loading = useSelector((state) => state.todo.loading);
  useEffect(() => {
    dispatch(showTodo())
    return ()=>{
      dispatch(clearList())
    }
  }, []);
  const deleteTodo = (id)=>{
    dispatch(deleteTodoById(id))
    .unwrap()
    .then((res)=>{
      if(res===200){
        ShowToast("success","Deleted Successfully")
        dispatch(showTodo())
      }
      if(res && res != 200){
        ShowToast("error","Something went wrong!!")
      }
    })
    // console.log(id)
  }
  return (
    <Container>
      <Grid mt={3} mb={3} container spacing={2}>
        {list && list.length > 0
          ? list.map((values, index) => {
              return (
                <Grid
                  sx={{ textAlign: "center" }}
                  item
                  lg={4}
                  xs={12}
                  md={6}
                  sm={12}
                  key={index}
                >
                  <Card
                    sx={{
                      height: {
                        lg: "15rem",
                        md: "auto",
                        sm: "auto",
                        xs: "auto",
                      },
                      backgroundColor: "#b5d3e6",
                      padding: "13px",
                    }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 16 }}
                        color="text.secondary"
                        gutterBottom
                        mt={3}
                      >
                        {values.date}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{ mb: 1.5, fontWeight: "bold" }}
                        color="black"
                      >
                        Title: {values.title}
                      </Typography>
                      <Typography
                        sx={{ fontWeight: "5px" }}
                        variant="body6"
                        color="black"
                      >
                        Description: {values.description}
                      </Typography>
                    </CardContent>
                  
                      <Stack
                        direction={{
                          lg: "row",
                          md: "row",
                          sm: "row",
                          xs: "column",
                        }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        mt={2}
                      >
                        
                        <Button onClick={()=>navigate(`/updatetodo/${values.id}`)} size="small">
                          <EditIcon sx={{ color: "#254061" }} />
                        </Button>
                        <Button onClick={()=>deleteTodo(values.id)} size="small">
                          <DeleteIcon sx={{ color: "red" }} />
                        </Button>
                      </Stack>
                    
                  </Card>
                </Grid>
              );
            })
          : loading?null: <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <img style={{width:"38%",height:"77%"}} src="./No data-rafiki.png" alt="no data available"/>
          <Button onClick={()=>navigate("/addtodo")} variant="contained">Add Some ToDo</Button>
        </Stack>}
      </Grid>
    </Container>
  );
};

export default Home;
