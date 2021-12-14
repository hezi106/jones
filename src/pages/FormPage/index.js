import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Form from "../../components/Form";
import sendMail from "../../services/sendMail";

const onSubmit = async (values) => {
  console.log({values})
  await sendMail(values);
};

const FormPage = () => {
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Jones Form
      </Typography>
      <Form onSubmit={onSubmit} />
    </Box>
  );
};

export default FormPage;
