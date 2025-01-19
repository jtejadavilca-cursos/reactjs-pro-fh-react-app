import { ErrorMessage, useField } from "formik";

interface Props {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    [x: string]: any;
}

export const MyTextInput = ({ label, type = "text", ...props }: Props) => {
    //const [field, meta] = useField(props);
    const [field] = useField(props);
    return (
        <>
            <label htmlFor={props.id ?? props.name}>{label}</label>
            <input type={type} {...field} {...props} />
            <ErrorMessage name={props.name} component="span" />
            {/* {meta.touched && meta.error && <span className="error">{meta.error}</span>} */}
        </>
    );
};
