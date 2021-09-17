import React from "react";
import "./GalleryHeader.css";

function GalleryHeader() {
	return (
		<div className="window-header">
			<div className="header-btns">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<h5>Desktop & Screen Saver</h5>
			<div className="header-search">
				<i className="fas fa-search"></i>
				<input type="text" placeholder="Search" />
			</div>
		</div>
	);
}

export default GalleryHeader;
