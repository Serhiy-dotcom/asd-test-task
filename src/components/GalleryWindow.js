import React, { useContext } from "react";
import "./GalleryWindow.css";
import GalleryHeader from "./GalleryHeader.js";
import GalleryWidget from "./GalleryWidget.js";

import { AppContext } from "../context.js";

function GalleryWindow() {
	const { showGallery } = useContext(AppContext);

	return (
		<div
			className="gallery-window"
			style={{
				opacity: showGallery ? 1 : 0,
				top: showGallery ? "15%" : "22%",
			}}
		>
			<GalleryHeader />

			<div className="gallery-inner-container">
				<GalleryWidget />
			</div>
		</div>
	);
}

export default GalleryWindow;
