export default function Register(){
    return (
        <section id="register-page" className="content auth">
        <form id="register">
            <div className="container">
                <h1>Register</h1>
        
                <label htmlFor="email">Email:</label>
                <input type="email" id="register-email" name="email" placeholder="peshp@gmail.com" />
        
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="register-password" />
        
                <label htmlFor="con-password">Confirm Password:</label>
                <input type="password" name="confirm-password" id="register-confirm-password" />
        
                <input className="btn submit" type="submit" value="Register" />
            </div>
        </form>
    </section>
    );
}