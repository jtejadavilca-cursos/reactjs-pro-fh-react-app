import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const resetForm = () => {
        setFormValues(initialState);
    };

    const isValidEmail = (email: string) => {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    return {
        formValues,

        handleInputChange,
        resetForm,
        isValidEmail,
    };
};

// const [registerData, setRegisterData] = useState(initialData);

// const { name, email, password, repeatPassword } = registerData;

// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRegisterData({
//         ...registerData,
//         [e.target.name]: e.target.value,
//     });
// };

// const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(registerData);
// };
