<script lang="ts">
	import { Button, type Props } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import type { WithoutChildren } from "bits-ui";
	import { ChevronLeft } from "lucide-svelte";
	import { getEmblaContext } from "./context.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "outline",
		size = "icon",
		...restProps
	}: WithoutChildren<Props> = $props();

	const emblaCtx = getEmblaContext("<Carousel.Previous/>");
</script>

<Button
	{variant}
	{size}
	class={cn(
		"h-12 w-12 touch-manipulation rounded-full dark:bg-bw900 dark:text-bw500 border-gradient-to-r from-bw500 to-[bw500_70%]",
		emblaCtx.orientation === "horizontal"
			? "-left-12 top-1/2 -translate-y-1/2"
			: "-top-12 left-1/2 -translate-x-1/2 rotate-90",
		className,
	)}
	disabled={!emblaCtx.canScrollPrev}
	onclick={emblaCtx.scrollPrev}
	onkeydown={emblaCtx.handleKeyDown}
	{...restProps}
	bind:ref
>
	<ChevronLeft class="size-4" />
	<span class="sr-only">Previous slide</span>
</Button>
