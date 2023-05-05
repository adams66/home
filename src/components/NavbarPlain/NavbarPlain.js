import { Link } from "react-router-dom";

function NavbarPlain() {
    return ( <div style={{position: "static"}} className="navbar">
    <div className="navbar-inner flex flex-j-spacedBetween flex-a-center padding-30-40">
        <div className="nav-logo">
        <Link to="/home">
                <svg width="60px" xmlns="http://www.w3.org/2000/svg" viewBox="4 2 468 231">
                    <path
                        className="svg-logo mainTheme"
                        d="M 70 182 C 89.9 76 89.3 57.9 96.2 52.6 L 125 51.5 C 138.8 51 154.8 53.8 165 64 C 186.4 85.5 179 131.3 163.6 154 C 153.1 169.6 135.2 181.9 116 183 L 70 183 C 14.1 223.7 7.3 226.9 4 232 L 84 232 C 121.4 232 160.5 230.9 190.7 205.2 C 223.6 177.4 236 138.6 236 97 C 236 76.6 233.2 54.8 220.4 38 C 205.8 18.7 185 9.4 162 4.5 C 13.9 -1.4 104.7 2 77 2 C 70.2 2 53.1 -1.1 47.6 3 L 17.7 141.8 Z M 341 2 L 274.1 120 L 241 176 L 305.7 177 L 340 117 L 408.4 232 L 472 233 L 454.2 200 Z M 211 233 L 390 233 L 367.5 192 L 235 192 Z"
                    />
                </svg>
                </Link>
        </div>
    </div>
</div> );
}

export default NavbarPlain;