import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <header>
            <ul>
                <li><Link to="/">App01</Link></li>
                <li><Link to="/app2">App02</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/hello">Hello</Link></li>
                <li><Link to="/inputsample">InputSample</Link></li>
            </ul>
        </header>

        </>
    );
}
export default Header;