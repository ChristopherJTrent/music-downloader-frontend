import {UserConfig} from "vite"
import {tanstackRouter} from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
export default {
	plugins: [
		tanstackRouter({
			target: 'react',
			autoCodeSplitting: true,
		}),
		react()
	],
	build: {
		outDir: "../src/main/resources/static"
	}
} satisfies UserConfig
