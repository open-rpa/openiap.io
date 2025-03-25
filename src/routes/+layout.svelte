<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import { Toaster } from "$lib/components/ui/sonner/index.js";
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
	import "../app.css";
    import { browser } from "$app/environment";
	import posthog from "posthog-js";

	if(browser) {
		try {
			localStorage.clear();
		} catch (error) {
			console.error(error);
		}
		try {
			posthog.init("phc_lWJVnE9Db7Ti5AJq9nXp8dumYij44KB3GTNvS4SZUrk", {
			api_host: "https://eu.i.posthog.com",
			person_profiles: "identified_only",
		});
		} catch (error) {
			console.error(error);			
		}
	}

	let { children } = $props();
</script>

<ModeWatcher track={false} defaultMode={"dark"} />
<div class="min-h-screen bg-background flex flex-col font-custom">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
<Toaster />
