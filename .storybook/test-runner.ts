import type { TestRunnerConfig } from '@storybook/test-runner';
import { waitForPageReady } from '@storybook/test-runner';

const config: TestRunnerConfig = {
	async postVisit(page, context) {
		// Attendre que la page soit complètement chargée
		await waitForPageReady(page);
		console.log('Page complètement chargée');
	},
};

export default config;