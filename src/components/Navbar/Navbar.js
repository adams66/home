
import * as helper from '../../helper/helper';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
	const [ hamburger, setHamburger ] = useState('');
	function click(event) {
		if (hamburger == '') {
			setHamburger('navbar-key');
		} else {
			setHamburger('');
		}
	}






	return (
		<div id={hamburger} className="navbar">
			<div className="navbar-inner flex flex-j-spacedBetween flex-a-center padding-30-40">
				<div className="nav-logo">
				<NavLink path="/home">
						<svg width="60px" xmlns="http://www.w3.org/2000/svg" viewBox="4 2 468 231">
							<path
								className="svg-logo mainTheme"
								d="M 70 182 C 89.9 76 89.3 57.9 96.2 52.6 L 125 51.5 C 138.8 51 154.8 53.8 165 64 C 186.4 85.5 179 131.3 163.6 154 C 153.1 169.6 135.2 181.9 116 183 L 70 183 C 14.1 223.7 7.3 226.9 4 232 L 84 232 C 121.4 232 160.5 230.9 190.7 205.2 C 223.6 177.4 236 138.6 236 97 C 236 76.6 233.2 54.8 220.4 38 C 205.8 18.7 185 9.4 162 4.5 C 13.9 -1.4 104.7 2 77 2 C 70.2 2 53.1 -1.1 47.6 3 L 17.7 141.8 Z M 341 2 L 274.1 120 L 241 176 L 305.7 177 L 340 117 L 408.4 232 L 472 233 L 454.2 200 Z M 211 233 L 390 233 L 367.5 192 L 235 192 Z"
							/>
						</svg>
						</NavLink>
				</div>

				<div className="nav-item-container flex flex-j-spacedEvenly flex-a-center gap-10 max-width-400">
					<a className="navbar-link" href="#about">
						<span className="number-size margin-right-5 color-text-Theme">01.</span>About
					</a>
					<a className="navbar-link" href="#projects">
						<span className="number-size margin-right-5 color-text-Theme">02.</span>Projects
					</a>
					<a className="navbar-link" href="#contact">
						<span className="number-size margin-right-5 color-text-Theme">03.</span>Contact
					</a>
					<a className="btn padding-15-20 color-text-Theme" href="resumeFinal.pdf" download>
						Resume
					</a>
				</div>

				<div style={{ position: 'relative' }} onClick={click} className="hamburger-container">
					<div onClick={click} className="burger">
						<div id="line1" className="line" />
						<div id="line2" className="line" />
						<div id="line3" className="line" />
					</div>

					<div
						onClick={click}
						style={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
