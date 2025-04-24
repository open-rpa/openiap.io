<script lang="ts">
    import logo1 from "$lib/images/home/companylogos/alphatrods.svg";
    import logo2 from "$lib/images/home/companylogos/kn_logo.svg";
    // import logo3 from "$lib/images/home/companylogos/avag.svg";
    import logo3 from "$lib/images/home/companylogos/aiot.svg";
    import logo4 from "$lib/images/home/companylogos/sloif.svg";
    import logo5 from "$lib/images/home/companylogos/synergy.svg";
    import logo6 from "$lib/images/home/companylogos/bpatech.svg";
    import logo7 from "$lib/images/home/companylogos/arctic.svg";

    import { onMount } from "svelte";

    let scrollContainer: any;

    const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
    const multipliedLogos = [
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
        ...logos,
    ];

    onMount(() => {
        let scrollInterval: any;

        const calculateScrollSpeed = () => {
            // Adjust scroll speed based on screen width
            const screenWidth = window.innerWidth;
            return screenWidth > 1024 ? 1 : 0.5; // Faster speed for larger screens
        };

        const startScrolling = () => {
            const scrollSpeed = calculateScrollSpeed();
            const scroll = () => {
                if (scrollContainer) {
                    scrollContainer.scrollLeft += scrollSpeed;
                    if (
                        scrollContainer.scrollLeft >=
                        scrollContainer.scrollWidth -
                            scrollContainer.clientWidth
                    ) {
                        scrollContainer.scrollLeft = 0; // Reset scroll position
                    }
                }
            };
            scrollInterval = setInterval(() => {
                requestAnimationFrame(scroll);
            }, 20);
        };

        const stopScrolling = () => {
            clearInterval(scrollInterval);
        };

        startScrolling();

        return () => {
            stopScrolling();
        };
    });
</script>

<div class="mt-32 mb-48">
    <div class="text-bw600 text-center text-[14px] tracking-widest">
        Trusted by companies worldwide
    </div>
    <div class="relative w-full overflow-hidden flex justify-center py-6">
        <!-- The fade wrapper -->
        <div class="fade-mask lg:mx-64">
            <div
                bind:this={scrollContainer}
                class="scroll-container flex items-center gap-20 overflow-x-hidden no-scrollbar px-12 py-2 whitespace-nowrap"
            >
                {#each multipliedLogos as logo}
                    <img src={logo} alt="Logo" class="h-8" />
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .fade-mask {
        position: relative;
        width: 80%;
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
