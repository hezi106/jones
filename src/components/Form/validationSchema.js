import * as yup from "yup";

const PHONE_NUMBER_REG_EXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ALPHABET_REG_EXP = /[a-zA-Z]+/g;

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your firstName")
    .min(2, "First name must be at least 2 characters")
    .matches(ALPHABET_REG_EXP, "First name must have alphabetic characters")
    .required("First name is required"),
  lastName: yup
    .string("Enter your Last name")
    .min(2, "Last name must be at least 2 characters")
    .matches(ALPHABET_REG_EXP, "First name must have alphabetic characters")
    .required("Last name is required"),
  email: yup
    .string("Enter your Email address")
    .email("Enter a valid Email address")
    .required("Email address is required"),
  phoneNumber: yup
    .string("Enter your Phone number")
    .required("Phone number is required")
    .matches(PHONE_NUMBER_REG_EXP, "Phone number is not valid")
    .min(10, "Phone number must be exactly 10 digits")
    .max(10, "Phone number must be exactly 10 digits"),
});

export default validationSchema;