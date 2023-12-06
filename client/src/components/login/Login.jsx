import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";

const LoginFormKeys = {
    Email: "email",
    Passowrd: "password"
}

export default function Login() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Login</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="login-email" name="email" placeholder="pesho@gmail.com" onChange={onChange} value={values["email"]} />
            
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" onChange={onChange} value={values["password"]} />

                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
} 