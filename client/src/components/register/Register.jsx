import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password'
}

export default function Register(){

    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: ''
    })

    return (
        <section id="register-page" className="content auth">
        <form id="register" onSubmit={onSubmit}>
            <div className="container">
                <h1>Register</h1>
        
                <label htmlFor="username">Username:</label>
                <input type="text" id="register-username" name="username" placeholder="pesho" onChange={onChange} values={values[RegisterFormKeys.Username]}/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="register-email" name="email" placeholder="pesho@gmail.com" onChange={onChange} values={values[RegisterFormKeys.Email]} />
        
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="register-password" onChange={onChange} values={values[RegisterFormKeys.Password]} />
        
                <label htmlFor="con-password">Confirm Password:</label>
                <input type="password" name="confirm-password" id="register-confirm-password" onChange={onChange} values={values[RegisterFormKeys.ConfirmPassword]} />
        
                <input className="btn submit" type="submit" value="Register" />
            </div>
        </form>
    </section>
    );
}