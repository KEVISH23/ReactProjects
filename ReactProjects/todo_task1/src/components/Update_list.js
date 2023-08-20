import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingle, updateTodoById } from "../store/thunk";
import { Alert, Button, Container, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ShowToast } from "./Toast";
import { clearSingleItem } from "../store/todoslice";
const Update_list = () => {
  const [data, setdata] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const lastid = useSelector((state) => state.todo.lastId);
  useEffect(() => {
    console.log(params.id);

    dispatch(getSingle(params.id))
      .unwrap()
      .then((response) => {
        formik.setValues(response);
        setdata(response);
      })
      .catch((err) => navigate("/showerror"));

    return () => {
      dispatch(clearSingleItem());
    };
  }, []);
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
    onSubmit: (values) => {
      console.log(values);
      if (data === formik.values) {
        ShowToast("error", "Please update some fields");
      } else {
        dispatch(updateTodoById(values))
          .unwrap()
          .then((response) => {
            if (response === 200) {
              ShowToast("success", "Updated successfully");
              navigate("/");
            }
            if (response != 200) {
              ShowToast("error", "Please try again");
            }
          });
      }
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
          <h2 style={{ color: "#254061" }}>Update Your Todo</h2>
          <TextField
            type="text"
            label="Title"
            name="title"
            {...formik.getFieldProps("title")}
          />
          {formik.errors.title && formik.touched.title ? (
            <Alert severity="error">{formik.errors.title}</Alert>
          ) : null}
          <TextField
            type="text"
            label="Description"
            name="description"
            {...formik.getFieldProps("description")}
          />
          {formik.errors.description && formik.touched.description ? (
            <Alert severity="error">{formik.errors.description}</Alert>
          ) : null}
          <Button type="submit" variant="outlined">
            Update ToDo list
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Update_list;
