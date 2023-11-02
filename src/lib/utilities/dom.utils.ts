import axios from "axios";

// Get and parse blog html
export async function getBlogHtml(sourcePath: string): Promise<HTMLHtmlElement> {
	const blogHtmlContent: string = await axios.get(`${sourcePath}/index.html`).then((res) => res.data);

	// Create html element and load html content
	const htmlElement = document.createElement("html");
	htmlElement.innerHTML = blogHtmlContent;

	// Load and map img files from Zip file
	const imgElements = htmlElement.querySelectorAll("img");
	for (const imgElement of imgElements) {
		const imgFilePath = imgElement.getAttribute("src");
		imgElement.setAttribute("data-src", imgFilePath || "");
		imgElement.src = `${sourcePath}/${imgFilePath}`;

		// Fix image style
		imgElement.style.maxWidth = "100%";
		imgElement.style.objectFit = "contain";
		imgElement.parentElement!.style.maxWidth = "100%";
	}

	// Remove redundant style
	(htmlElement.querySelector("body") as any).style = "";

	return htmlElement;
}
