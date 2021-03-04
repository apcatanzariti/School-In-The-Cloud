import * as yup from 'yup'

const USERNAME_MIN = 3;
const PASSWORD_MIN = 3;

const signUp = yup.object().shape({
    role:yup.string()
        .required("Role is required."),
    password:yup.string()
        .required("Password is required.")
        .min(PASSWORD_MIN, "Password too short."),
    username:yup.string()
        .trim()
        .required("Username is required.")
        .min(USERNAME_MIN, "Username too short."),
})

export default signUp;