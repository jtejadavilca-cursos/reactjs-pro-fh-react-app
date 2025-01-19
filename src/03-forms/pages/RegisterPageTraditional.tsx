import "../styles/styles.css";
import { useForm } from "../hooks";

const initialData = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
};

export const RegisterPageTraditional = () => {
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

    const { formValues, handleInputChange, resetForm } = useForm(initialData);

    const { name, email, password, repeatPassword } = formValues;

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={handleOnSubmit}>
                <input type="text" name="name" placeholder="Name" value={name} onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleInputChange} />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={handleInputChange}
                />

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>
                    Limpiar
                </button>
            </form>
        </div>
    );
};
