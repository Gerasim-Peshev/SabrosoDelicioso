import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <nav>
                <ul className="firstNav">
                    <li><Link to="/">All recepies</Link></li>
                    <li><Link to="/create">Create recepie</Link></li>
                </ul>
                <img id="logo" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/games/switch/s/spongebob-krusty-cook-off-switch/description-image" alt=""  />
                <ul className="secondNav">
                    <li><Link to="/my-recepies">My recepies</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
            </nav>
    </header>
    );
}