function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	//let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
	let mainImage = document.querySelector("#gallery-photo > img");


	thumbnails.forEach(function(thumbnail) {
		// Preload large images.
		let newImageSrc = thumbnail.dataset.largeVersion;
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;

		thumbnail.addEventListener("click", function() {
			// set clicked image as main image
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", thumbnail.alt);

			//change which image is current.
			document.querySelector(".current").classList.remove("current");
			thumbnail.parentNode.classList.add("current");

			// Update image info
			let galleryInfo = document.querySelector("#gallery-info");
			let title 			= galleryInfo.querySelector(".title");
			let description = galleryInfo.querySelector(".description");
		
			title.innerHTML			  = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}


