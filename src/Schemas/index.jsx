import * as Yup from 'yup'

const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("plase enter your name"),
    email: Yup.string().email().required("plase enter your email"),
    password: Yup.string().min(6).required("plase enter your password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "password must be same..")
})

export default signUpSchema