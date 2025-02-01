import { defineConfig } from "@playwright/test";

export default defineConfig({
	use: {
		headless: true,  // Exécuter les tests en mode headless (sans UI)
		viewport: { width: 1280, height: 720 },
		screenshot: "on",
		video: "retain-on-failure",
	},
});
