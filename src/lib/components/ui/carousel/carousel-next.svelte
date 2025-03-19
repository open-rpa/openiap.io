<script lang="ts">
	import { Button, type Props } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import type { WithoutChildren } from "bits-ui";
	import { ChevronRight } from "lucide-svelte";
	import { getEmblaContext } from "./context.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "outline",
		size = "icon",
		...restProps
	}: WithoutChildren<Props> = $props();

	const emblaCtx = getEmblaContext("<Carousel.Next/>");
</script>

<Button
	{variant}
	{size}
	class={cn(
		"h-12 w-12 touch-manipulation rounded-full dark:bg-bw900 dark:text-bw500 border-gradient-to-r from-bw500 to-[bw500_70%]",
		emblaCtx.orientation === "horizontal"
			? "-right-12 top-1/2 -translate-y-1/2"
			: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
		className
	)}
	disabled={!emblaCtx.canScrollNext}
	onclick={emblaCtx.scrollNext}
	onkeydown={emblaCtx.handleKeyDown}
	bind:ref
	{...restProps}
>
	<ChevronRight class="size-4" />
	<span class="sr-only">Next slide</span>
</Button>
