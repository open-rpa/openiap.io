<script>
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import hero from "$lib/images/home/hero.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    $effect(() => {
        window.scrollTo(0, 0);
    });
</script>

<div class="h-full">
    <div
        class="xl:absolute xl:w-full xl:object-cover mt-32 xl:mt-36 p-4 text-center"
    >
        <h1
            class={"md:text-5xl xl:text-hero font-bold mb-6 animate-fade-in" +
                gradienttext}
        >
            A scalable and secure <br />
            automation platform
        </h1>
        <p class="xl:text-xl text-bw500 mb-8 mx-auto animate-fade-in">
            An opinionated platform that gives you the complete
            infrastructure for deploying, monitoring <br /> and troubleshooting
            automation
        </p>
        <div
            class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
        >
            <HotkeyButton
                variant="success"
                onclick={() =>
                    window.open(
                        "https://github.com/open-rpa/openrpa/releases/latest/download/OpenRPA.msi",
                        "_blank",
                        "noopener,noreferrer",
                    )}
            >
                Download OpenRPA
            </HotkeyButton>
            <HotkeyButton
                class="hover-lift"
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
    <div class="flex items-end justify-center">
        <img src={hero} alt="hero" />
    </div>
</div>