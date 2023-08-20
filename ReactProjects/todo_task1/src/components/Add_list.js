import { Alert, Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/thunk";
import { ShowToast } from "./Toast";
const Add_list = () => {
    const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: { title: "", description: "" },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .min(3, "Title is too short")
        .max(25, "Title is too long"),
      description: Yup.string()
        .required("Description is required")
        .min(3, "Description is too short")
        .max(100, "Description is too long"),
    }),
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      dispatch(addTodo(values))
        .unwrap().then((response)=>{
            if(response === 201){
                ShowToast("success","Added successfully")
            }
            if(response != 201){
                ShowToast("error","Please try again")
            }
        })
      resetForm()
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          mt={2}
          justifyContent="center"
          alignItems="center"
          direction="column"
          spacing={2}
        >
            <h2 style={{color:"#254061"}}>Add Your Todo</h2>
          <TextField
            type="text"
            label="Title"
            name="title"
            {...formik.getFieldProps('title')}
          />
          {formik.errors.title && formik.touched.title ? (
            <Alert severity="error">{formik.errors.title}</Alert>
          ) : null}
          <TextField
            type="text"
            label="Description"
            name="description"
            {...formik.getFieldProps('description')}
          />
          {formik.errors.description && formik.touched.description ? (
            <Alert severity="error">{formik.errors.description}</Alert>
          ) : null}
          <Button type="submit" variant="outlined">Add To list</Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Add_list;
