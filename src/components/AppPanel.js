import React, { useContext } from "react";
import "./AppPanel.css";

import { AppContext } from "../context.js";

function AppPanel() {
	const { toggleGallery } = useContext(AppContext);

	return (
		<div className="app-panel">
			<img
				src="https://cdn.iconscout.com/icon/free/png-256/apple-mail-493152.png"
				alt="macos-mail"
			/>
			<img
				src="https://icon-library.com/images/firefox-icon-download/firefox-icon-download-4.jpg"
				alt="macos-firefox"
			/>
			<img
				src="https://cdn.iconscout.com/icon/free/png-256/apple-settings-1-493162.png"
				alt="macos-settings"
				onClick={() => toggleGallery()}
			/>
			<img
				src="https://osx.telegram.org/updates/site/logo.png"
				alt="macos-telegram"
			/>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Terminalicon2.png"
				alt="macos-cmd"
			/>
			<span></span>
			<img
				src="https://www.nicepng.com/png/full/203-2036322_yosemite-trash-can-icon-os-x-mac-os.png"
				alt="macos-basket"
			/>
		</div>
	);
}

export default AppPanel;
