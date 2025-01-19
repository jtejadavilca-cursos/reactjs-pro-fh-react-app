import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        // validate,
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().max(15, "Máximo 15 caracteres").required("First name is required"),
            lastName: Yup.string().max(15, "Máximo 15 caracteres").required("Last name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
        }),
    });

    return (
        <div>
            <h1>Formik Yup Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps("firstName")} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps("lastName")} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input type="text" {...getFieldProps("email")} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Crear</button>
            </form>
        </div>
    );
};
