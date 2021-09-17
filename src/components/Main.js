import React, { useState } from "react";
import "./Main.css";
import Header from "./Header.js";
import AppPanel from "./AppPanel.js";
import GalleryWindow from "./GalleryWindow.js";

import { AppContext } from "../context.js";

function Main() {
	const [galleryImages, setGalleryImages] = useState([
		{
			id: 1,
			img: "https://images.unsplash.com/photo-1631664393319-2824b4f7277d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 2,
			img: "https://images.unsplash.com/photo-1631456715790-d4bc4ffe54d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 3,
			img: "https://images.unsplash.com/photo-1631472011823-59d5a2400fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 4,
			img: "https://images.unsplash.com/photo-1554768707-a66bcfe69e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 5,
			img: "https://images.unsplash.com/photo-1581337377333-904020186445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 6,
			img: "https://images.unsplash.com/photo-1631097574841-b20e9b94bff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 7,
			img: "https://images.unsplash.com/photo-1630687576589-43a3bc515e85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 8,
			img: "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 9,
			img: "https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 10,
			img: "https://images.unsplash.com/photo-1573515597927-0066a55fc876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 11,
			img: "https://images.unsplash.com/photo-1621085298593-0aad0e8c2ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 12,
			img: "https://images.unsplash.com/photo-1511314797109-6ba9c4854fd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 13,
			img: "https://images.unsplash.com/photo-1617906024072-b548011be377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 14,
			img: "https://images.unsplash.com/photo-1510561467401-91b9835f745e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 15,
			img: "https://images.unsplash.com/photo-1630700246857-3113649eb3b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
		},
		{
			id: 16,
			img: "https://images.unsplash.com/photo-1533139143976-30918502365b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 17,
			img: "https://images.unsplash.com/photo-1631664393319-2824b4f7277d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 18,
			img: "https://images.unsplash.com/photo-1631456715790-d4bc4ffe54d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 19,
			img: "https://images.unsplash.com/photo-1631472011823-59d5a2400fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 20,
			img: "https://images.unsplash.com/photo-1554768707-a66bcfe69e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 21,
			img: "https://images.unsplash.com/photo-1581337377333-904020186445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 22,
			img: "https://images.unsplash.com/photo-1631097574841-b20e9b94bff9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 23,
			img: "https://images.unsplash.com/photo-1630687576589-43a3bc515e85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 24,
			img: "https://images.unsplash.com/photo-1501696461415-6bd6660c6742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 25,
			img: "https://images.unsplash.com/photo-1588894051921-5e60abf4eab9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 26,
			img: "https://images.unsplash.com/photo-1573515597927-0066a55fc876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 27,
			img: "https://images.unsplash.com/photo-1621085298593-0aad0e8c2ce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 28,
			img: "https://images.unsplash.com/photo-1511314797109-6ba9c4854fd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 29,
			img: "https://images.unsplash.com/photo-1617906024072-b548011be377?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 30,
			img: "https://images.unsplash.com/photo-1510561467401-91b9835f745e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			id: 31,
			img: "https://images.unsplash.com/photo-1630700246857-3113649eb3b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80",
		},
		{
			id: 32,
			img: "https://images.unsplash.com/photo-1533139143976-30918502365b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
	]);
	const [currentBg, setCurrentBg] = useState(galleryImages[0]);
	const [showGallery, setShowGallery] = useState(true);

	const changeBg = (imageItem) => {
		setCurrentBg(imageItem);
	};

	const toggleGallery = () => {
		setShowGallery(!showGallery);
	};

	return (
		<div
			className="main"
			style={{ backgroundImage: `url("${currentBg.img}")` }}
		>
			<AppContext.Provider
				value={{
					galleryImages,
					currentBg,
					changeBg,
					toggleGallery,
					showGallery,
				}}
			>
				<Header />
				<GalleryWindow />
				<AppPanel />
			</AppContext.Provider>
		</div>
	);
}

export default Main;
