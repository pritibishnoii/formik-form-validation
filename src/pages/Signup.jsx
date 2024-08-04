// import { useFormik } from "formik";
// import signUpSchema from '../Schemas';

// const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
// };

// function Signup() {
//     const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
//         initialValues: initialValues,
//         validationSchema: signUpSchema,
//         onSubmit: (values) => {
//             console.log(values);
//         }
//     });

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <h2>SignUp</h2>
//                 <div>
//                     <label htmlFor="username">Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         id="username"
//                         placeholder="Enter Your Name"
//                         value={values.name}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.name && touched.name ? "error_border" : ""}
//                     />
//                     {errors.name && touched.name ? (<p className="error">{errors.name}</p>) : null}
//                 </div>
//                 <div>
//                     <label htmlFor="email-id">Email</label>
//                     <input
//                         type="text"
//                         name="email"
//                         id="email-id"
//                         placeholder="Enter Your Email"
//                         value={values.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.email && touched.email ? "error_border" : ""}
//                     />
//                     {errors.email && touched.email ? (<p className="error">{errors.email}</p>) : null}
//                 </div>
//                 <div>
//                     <label htmlFor="pass">Password</label>
//                     <input
//                         type="text"
//                         name="password"
//                         id="pass"
//                         placeholder="Enter Your Password"
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.password && touched.password ? "error_border" : ""}
//                     />
//                     {errors.password && touched.password ? (<p className="error">{errors.password}</p>) : null}
//                 </div>
//                 <div>
//                     <label htmlFor="conf-pass">Confirm Password</label>
//                     <input
//                         type="text"
//                         name="confirmPassword"
//                         id="conf-pass"
//                         placeholder="Enter Your Confirm Password"
//                         value={values.confirmPassword}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={errors.confirmPassword && touched.confirmPassword ? "error_border" : ""}
//                     />
//                     {errors.confirmPassword && touched.confirmPassword ? (<p className="error">{errors.confirmPassword}</p>) : null}
//                 </div>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </>
//     );
// }

// export default Signup;




import { useFormik } from "formik";
import Input from "../Comopnents/Input"; // Import the reusable input component
import signUpSchema from "../Schemas";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Signup = () => {
    const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your name"
                error={errors.name}
                touched={touched.name}
                className={errors.name && touched.name ? 'error_border' : ''}
            />
            <Input
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email"
                error={errors.email}
                touched={touched.email}
                className={errors.email && touched.email ? 'error_border' : ''}
            />
            <Input
                label="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your password"
                error={errors.password}
                touched={touched.password}
                className={errors.password && touched.password ? 'error_border' : ''}
            />
            <Input
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm your password"
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
                className={errors.confirmPassword && touched.confirmPassword ? 'error_border' : ''}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
