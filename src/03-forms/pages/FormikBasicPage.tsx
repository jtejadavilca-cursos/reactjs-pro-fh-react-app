import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormInputs {
    firstName: string;
    lastName: string;
    email: string;
}

const initialValues: FormInputs = {
    firstName: "",
    lastName: "",
    email: "",
};

const validate = (values: FormInputs) => {
    const errors: FormikErrors<FormInputs> = {};

    if (!values.firstName) {
        errors.firstName = "First name is required";
    }

    if (!values.lastName) {
        errors.lastName = "Last name is required";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email";
    }

    return errors;
};

export const FormikBasicPage = () => {
    const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Crear</button>
            </form>
        </div>
    );
};
