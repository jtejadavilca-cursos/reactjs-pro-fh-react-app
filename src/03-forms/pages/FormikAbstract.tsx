import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstract = () => {
    return (
        <div>
            <h1>Formik Abstract Tutorial</h1>
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
                        <MyTextInput label="First Name" name="firstName" placeholder="First Name" />
                        <MyTextInput label="Last Name" name="lastName" placeholder="Last Name" />
                        <MyTextInput type="email" label="Email" name="email" placeholder="Email" />

                        <MySelect label="Job Type" name="jobType">
                            <option value="">Select a job type</option>
                            <option value="designer">Designer</option>
                            <option value="developer">Developer</option>
                            <option value="product">Product Manager</option>
                            <option value="other">Other</option>
                        </MySelect>

                        <MyCheckbox label="Términos y condiciones" name="terms" />

                        <button type="submit">Crear</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
