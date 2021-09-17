import React, { useContext } from "react";
import "./GalleryWidget.css";

import { AppContext } from "../context.js";

function GalleryWidget() {
	const { galleryImages, currentBg, changeBg } = useContext(AppContext);

	return (
		<div className="gallery-widget">
			<div className="gallery-items">
				{galleryImages.map((galleryImg) => (
					<div
						key={galleryImg.id}
						className={`gallery-item ${
							currentBg.id === galleryImg.id && "active"
						}`}
					>
						<img
							alt={`gallery-item-${galleryImg.id}`}
							src={galleryImg.img}
							onClick={() => changeBg(galleryImg)}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default GalleryWidget;
