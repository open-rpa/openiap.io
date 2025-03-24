import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// allowedHosts: ['d8d3-125-62-88-92.ngrok-free.app']
	  }
});
