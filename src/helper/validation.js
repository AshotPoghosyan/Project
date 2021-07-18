import * as yup from "yup";


export const signIn = yup.object().shape({
  email: yup
        .string()
        .required("Email is a required field")
        .email("Invalid email address format please try again"),
  password: yup
        .string().required("Password is required")
});


export const signUp = yup.object().shape({
  firstName: yup
            .string().required("First Name is Required")
            .min(3, "Min 3 Letters")
            .max(30, "Max 30 Letters"),
  lastName: yup
            .string().required("Last Name is Required")
            .min(3, "Min 3 Letters")
            .max(30, "Max 30 Letters"),
  email: yup
        .string()
        .required("Email is a required field")
        .max(30, "Should be 30 chars maximum")
        .email("Invalid email address format please try again"),
  password: yup
            .string().required("Password is required")
            .min(5, "Invalid password the password must be at least 5 characters long")
            .max(16, "Invalid password the password must be at most 16 characters long")
            .matches(
              /(?=.*\d)/,
              "Invalid password the password must contain at least one digit"
            )
            .matches(
              /(?=.*[A-Z])/,
              "Invalid password the password must contain at least one uppercase"
            )
            .matches(
              /(?=.*[a-z])/,
              "Invalid password the password must contain at least one lowercase"
            ),
    termsAndConditions: yup.string().required("Required").oneOf(["true"], "Accept terms & conditions")
})



