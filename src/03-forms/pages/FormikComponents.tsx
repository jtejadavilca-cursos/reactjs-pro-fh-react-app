import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components Tutorial</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().max(15, "Máximo 15 caracteres").required("First name is required"),
                    lastName: Yup.string().max(15, "Máximo 15 caracteres").required("Last name is required"),
                    email: Yup.string().email("Invalid email").required("Email is required"),
                    terms: Yup.boolean().oneOf([true], "Accept terms is required"),
                    jobType: Yup.string().required("Job type is required"),
                })}
            >
                {(_) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select">
                            <option value="">Select a job type</option>
                            <option value="designer">Designer</option>
                            <option value="developer">Developer</option>
                            <option value="product">Product Manager</option>
                            <option value="other">Other</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field name="terms" type="checkbox" />
                            Términos y condiciones
                        </label>
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">Crear</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
