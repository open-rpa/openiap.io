<!-- <script lang="ts" context="module">
    "use client";
    import { Box, Settings } from "lucide-svelte";
    import { GlowingEffect } from "@/components/ui/glowing-effect";
    import { cn } from "@/lib/utils";
    import IconRenderer from "./IconRenderer.svelte";

    const cards = [
        {
            area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
            iconname: "Box",
            title: "Do things the right way",
            description: "Running out of copy so I'll write anything.",
        },
        {
            area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
            iconname: "Settings",
            title: "The best AI code editor ever.",
            description:
                "Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me.",
        },
    ];
</script>

<ul
    class="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2"
>
    {#each cards as card}
        <li class={cn("min-h-[14rem] list-none", card.area)}>
            <div
                class="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3"
            >
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                />
                <div
                    class="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6"
                >
                    <div
                        class="relative flex flex-1 flex-col justify-between gap-3"
                    >
                        <div
                            class="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2"
                        >
                            <IconRenderer title={card.iconname} />
                        </div>
                        <div class="space-y-3">
                            <h3
                                class="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground"
                            >
                                {card.title}
                            </h3>
                            <h2
                                class="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground"
                            >
                                {card.description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    {/each}
</ul> -->
