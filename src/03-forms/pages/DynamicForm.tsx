import { Formik, Form } from "formik";
import * as Yup from "yup";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";

const initialValues: { [key: string]: any } = {};

const requiredFields: { [key: string]: any } = {};

formJson.forEach((field) => {
    initialValues[field.name] = field.value || "";
    if (!field.validations) return;

    let schema = Yup.string();

    field.validations.forEach((validation: any) => {
        if (validation.type === "required") {
            schema = schema.required(validation.message);
        }
        if (validation.type === "email") {
            schema = schema.email(validation.message);
        }
        if (validation.type === "minLength") {
            schema = schema.min(validation.value, validation.message);
        }
        if (validation.type === "maxLength") {
            schema = schema.max(validation.value, validation.message);
        }

        requiredFields[field.name] = schema;
    });
});

const validationSchema = Yup.object().shape(requiredFields);

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(_) => (
                    <Form>
                        {formJson.map(({ type, placeholder, name, label, ...otherFields }) => {
                            if (["input", "email", "password"].includes(type)) {
                                return (
                                    <MyTextInput
                                        key={name}
                                        type={type as any}
                                        label={label}
                                        name={name}
                                        placeholder={placeholder}
                                    />
                                );
                            }

                            if (type === "select") {
                                const options = otherFields.options || [];
                                return (
                                    <MySelect key={name} label={label} name={name}>
                                        {options.map((option: any) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </MySelect>
                                );
                            }
                        })}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
