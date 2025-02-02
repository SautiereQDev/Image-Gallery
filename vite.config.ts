import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		// Génère automatiquement les fichiers .d.ts
		dts({
			// Insère un fichier index.d.ts à la racine de votre distribution
			insertTypesEntry: true,
			// Optionnel : vous pouvez configurer le dossier de sortie des déclarations
			outDir: 'dist/types',
			tsconfigPath: 'tsconfig.json',
		}),
	],
	build: {
		lib: {
			// Spécifiez le point d'entrée de votre bibliothèque
			entry: 'src/index.ts',
			name: 'ImageGallery',
			// Nom du fichier de sortie selon le format
			fileName: (format) => `image-gallery.${format}.js`,
		},
		rollupOptions: {
			// Exclure les dépendances externes qui ne doivent pas être packagées dans la lib
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
