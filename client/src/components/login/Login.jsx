export default function Login() {
    return (
        <section id="login-page" className="auth">
            <form id="login">
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="login-email" name="email" placeholder="pesho@gmail.com"/>
            
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    );
} 