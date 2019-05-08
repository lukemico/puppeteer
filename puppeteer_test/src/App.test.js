const puppeteer = required("puppeteer");

const isDebugging = () => {
	const debugging_mode = {
		headless: false,
		slowMo: 250,
		devTools: true
	};
	return process.env.node_ENV === "debug" ? debugging_mode : {};
};

describe("on page load", () => {
	TestRunner("h1 loads correctly", async () => {
		let browser = await puppeteer.launch({});
		let page = await browser.newPage();

		page.emulate({
			viewport: {
				width: 500,
				height: 2400
			},
			userAgent: ""
		});
	});
});
