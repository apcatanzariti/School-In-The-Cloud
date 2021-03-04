import * as yup from 'yup'

const USERNAME_MIN = 3;
const PASSWORD_MIN = 3;

const signUp = yup.object().shape({
    passwordconf:yup.string()
        .required("Password confirmation is required.")
        .min(PASSWORD_MIN, "Password confirmation too short.")
        //.oneOf([yup.ref('password'), null], "Passwords must match.")
        .test('test-name', 'Passwords must match.', function(value) {
            return this.parent.password == this.parent.passwordconf ? true : false;
        }),
    password:yup.string()
        .required("Password is required.")
        .min(PASSWORD_MIN, "Password too short."),
    username:yup.string()
        .trim()
        .required("Username is required.")
        .min(USERNAME_MIN, "Username too short."),
})

export default signUp;