<script lang="ts">
	import { Tabs as TabsPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	class={cn(
		"ring-offset-background focus-visible:ring-ring data-[state=active]:bg-bw100 data-[state=active]:dark:bg-bw900 data-[state=active]:text-bw50 inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1 text-sm font-normal transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm rounded-[5px]",
		className
	)}
	{...restProps}
/>
