<script lang="ts">
    import logo2 from "$lib/images/testimonials/nagel.png";
    import logo3 from "$lib/images/testimonials/b2bpresales.png";
    import { onMount } from "svelte";

    let scrollContainer: any;

    const logos = [logo3, logo2];
    const multipliedLogos = [
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
    ];

    onMount(() => {
        const scrollSpeed = 1; // Adjust the speed as needed
        let scrollInterval: any;

        const startScrolling = () => {
            const scroll = () => {
                scrollContainer.scrollLeft += scrollSpeed;
                if (
                    scrollContainer.scrollLeft >=
                    scrollContainer.scrollWidth - scrollContainer.clientWidth
                ) {
                    scrollContainer.scrollLeft = 0;
                }
            };
            scrollInterval = setInterval(() => {
                requestAnimationFrame(scroll);
            }, 20);
        };

        const stopScrolling = () => {
            clearInterval(scrollInterval);
        };

        scrollContainer.addEventListener("mouseenter", stopScrolling);
        scrollContainer.addEventListener("mouseleave", startScrolling);

        startScrolling();

        return () => {
            stopScrolling();
            scrollContainer.removeEventListener("mouseenter", stopScrolling);
            scrollContainer.removeEventListener("mouseleave", startScrolling);
        };
    });
</script>

<div class="h-auto">
    <div class="text-bw500 text-center">Trusted by companies worldwide</div>
    <div class="relative w-full overflow-hidden flex justify-center py-6">
        <!-- The fade wrapper -->
        <div class="fade-mask lg:mx-32">
            <div
                bind:this={scrollContainer}
                class="scroll-container flex items-center gap-8 overflow-x-auto no-scrollbar px-12 py-2 whitespace-nowrap"
            >
                {#each multipliedLogos as logo}
                    <img
                        src={logo}
                        alt="Logo"
                        class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                    />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .fade-mask {
        position: relative;
    }

    .fade-mask::before,
    .fade-mask::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 300px;
        pointer-events: none;
        z-index: 1;
    }

    .fade-mask::before {
        left: 0;
        background: linear-gradient(to right, hsl(240, 13%, 6%), transparent);
    }

    .fade-mask::after {
        right: 0;
        background: linear-gradient(to left, hsl(240, 13%, 6%), transparent);
    }

    .scroll-container {
        position: relative;
        z-index: 0;
    }
</style>
