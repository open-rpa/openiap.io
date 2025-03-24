<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import { Toaster } from "$lib/components/ui/sonner/index.js";
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
	import "../app.css";

	let { children } = $props();
</script>

<ModeWatcher track={false} defaultMode={"dark"} />
<div class="min-h-screen bg-background flex flex-col">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
<Toaster />
