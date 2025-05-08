<script>
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import hero1 from "$lib/images/home/hero.svg";
    import hero from "$lib/images/home/horizonpng.png";
    
    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div class="xl:pb-16">
    <div
        class="xl:absolute xl:w-full xl:object-cover mt-32 xl:mt-36 p-4 text-center"
    >
        <h1
            class={"text-[30px] lg:text-hero font-bold mb-6 animate-fade-in tracking-widest" +
                gradienttext}
        >
            A scalable and secure <br />
            automation platform
        </h1>
        <p
            class="xl:text-[16px] text-bw500 mb-[52px] mx-auto animate-fade-in tracking-widest"
        >
            An opinionated platform that gives you the complete infrastructure
            for deploying, monitoring <br /> and troubleshooting automation
        </p>
        <div
            class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
        >
            <HotkeyButton
                class="tracking-wider"
                aria-label="Try OpenCore"
                variant="success"
                onclick={() =>
                    window.open(
                        "https://app.openiap.io/ui",
                        "_blank",
                        "noopener,noreferrer",
                    )}
            >
                Try OpenCore for Free
            </HotkeyButton>
            <HotkeyButton
                aria-label="Get Started"
                class="tracking-wider"
                onclick={() =>
                    window.open(
                        "https://docs.openiap.io/docs/Accessing-for-the-First-Time.html",
                        "_blank",
                        "noopener,noreferrer",
                    )}
            >
                Get Started
            </HotkeyButton>
        </div>
    </div>
    <div class="flex items-end justify-center flex-grow">
        <img src={hero} alt="hero" class="xl:w-full xl:h-auto" />
    </div>
</div>
