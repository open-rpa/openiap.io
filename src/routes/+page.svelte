<script>
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import hero from "$lib/images/home/hero.svg";
    import logo1 from "$lib/images/testimonials/alphatods.jpeg";
    import logo2 from "$lib/images/testimonials/b2bpresales.png";
    import logo3 from "$lib/images/testimonials/nagel.png";
    import logo4 from "$lib/images/testimonials/synerg.png";

    let iconClass =
        "flex flex-col items-center justify-center space-y-2 cursor-pointer animate-fade-in";
    $effect(() => {
        window.scrollTo(0, 0);
    });
</script>

<div>
    <!-- <div class="h-full bg-white sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500"> -->
    <div class="h-full">
        <div
            class="xl:absolute xl:w-full xl:object-cover mt-32 xl:mt-36 p-4 text-center"
        >
            <h1
                class="md:text-5xl xl:text-hero font-bold mb-6 animate-fade-in gradient-text"
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
    <div class="h-56">
        <div class="text-bw500 text-center">Trusted by companies worldwide</div>
        <div class="relative w-full overflow-hidden flex justify-center py-6">
            <!-- The fade wrapper -->
            <div
                class="fade-mask flex items-center gap-8 overflow-x-auto no-scrollbar px-12 py-2 whitespace-nowrap"
            >
                <img
                    src={logo3}
                    alt="Logo"
                    class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                    src={logo2}
                    alt="Logo"
                    class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                />

                <img
                    src={logo2}
                    alt="Logo"
                    class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                    src={logo2}
                    alt="Logo"
                    class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                    src={logo3}
                    alt="Logo"
                    class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                    src={logo3}
                    alt="Logo"
                    class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
                <img
                    src={logo3}
                    alt="Logo"
                    class="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
                <!-- Add more logos here -->
            </div>
        </div>
    </div>
</div>
