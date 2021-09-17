import React from "react";
import "./Header.css";
import Clock from "react-live-clock";

function Header() {
	return (
		<div className="header">
			<div className="header-content">
				<i className="fab fa-apple"></i>
				<h6 className="header-time">
					<Clock
						format={`ddd DD MMM HH:mm:ss`}
						ticking={true}
						timezone={"Europe/Kiev"}
					/>
				</h6>
			</div>
		</div>
	);
}

export default Header;
