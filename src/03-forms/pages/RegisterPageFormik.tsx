import * as Yup from "yup";
import "../styles/styles.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

export const RegisterPageFormik = () => {
    // const {} = useFormik({
    //     initialValues: initialData,
    //     onSubmit: (values) => {
    //         console.log(values);
    //     },
    //     validationSchema: Yup.object().shape({
    //         name: Yup.string().min(6, "Mínimo 6 caracteres").max(15, "Máximo 15 caracteres").required("Name is required"),
    //         email: Yup.string().email("Invalid email").required("Email is required"),
    //         password: Yup.string().required("Password is required"),
    //         repeatPassword: Yup.string()
    //             .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    //             .required("Repeat password is required"),
    //     }),
    // });

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .min(6, "Mínimo 6 caracteres")
                        .max(15, "Máximo 15 caracteres")
                        .required("Name is required"),
                    email: Yup.string().email("Invalid email").required("Email is required"),
                    password: Yup.string().min(6, "Mínimo 6 caracteres").required("Password is required"),
                    repeatPassword: Yup.string()
                        .oneOf([Yup.ref("password")], "Passwords must match")
                        .required("Repeat password is required"),
                })}
            >
                {({ resetForm }) => (
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <ErrorMessage name="password" component="span" />

                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <Field name="repeatPassword" type="password" />
                        <ErrorMessage name="repeatPassword" component="span" />

                        <button type="submit">Create</button>
                        <button type="button" onClick={() => resetForm()}>
                            Limpiar
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
