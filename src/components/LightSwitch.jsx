import React, { useState } from "react";
import "../App.css";
import powerButton from "../assets/power-button.png";
import powerButtonOn from "../assets/power-button-on.png";

export default function LightSwitch() {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
		console.log(toggle);
	};

	let style = !toggle
		? "light-switch-box flex-center flex-col"
		: "light-switch-box flex-center flex-col switch-on";

	return (
		<div className={style} onClick={handleToggle}>
			<img
				id="power-button"
				src={toggle ? powerButtonOn : powerButton}
				alt="power-button"
			/>
			<p>on/off</p>
		</div>
	);
}
