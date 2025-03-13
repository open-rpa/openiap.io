<script>
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import {
        ArrowDown,
        ArrowRight,
        Github,
        Icon,
        LibraryBig,
        MessageSquareText,
        Youtube,
    } from "lucide-svelte";
    import hero from "$lib/images/hero.png";

    let iconClass =
        "flex flex-col items-center justify-center space-y-2 cursor-pointer animate-fade-in";
    $effect(() => {
        window.scrollTo(0, 0);
    });
</script>

<div>
    <div
        class="pt-14 md:Pt-0 px-4 gradient-bg h-screen flex justify-center items-center"
    >
        <div class="container mx-auto text-center">
            <div
                class="hidden md:block absolute bottom-0 left-0 w-full h-2/6 bg-no-repeat opacity-50 hero-img"
                style="background-image: url({hero}); width: 100%;"
            ></div>
            <div>
                <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    Open Source{" "}
                    <span class="bg-clip-text text-customGreen">
                        Automation
                    </span>{" "}
                    Platform
                </h1>
                <p
                    class="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in"
                >
                    Orchestrate and Scale your Workflows in Seamless
                    Collaboration Between Humans, Robots, Systems and Devices.
                </p>
                <div
                    class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
                >
                    <HotkeyButton
                        class="hover-lift border border-customGreen"
                        size="lg"
                        onclick={() =>
                            window.open(
                                "https://github.com/open-rpa/openrpa/releases/latest/download/OpenRPA.msi",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        Download OpenRPA <ArrowDown class="ml-2 h-5 w-5" />
                    </HotkeyButton>
                    <HotkeyButton
                        class="hover-lift"
                        size="lg"
                        onclick={() =>
                            window.open(
                                "https://docs.openiap.io/docs/Accessing-for-the-First-Time.html",
                                "_blank",
                                "noopener,noreferrer",
                            )}
                    >
                        Get Started <ArrowRight class="ml-2 h-5 w-5" />
                    </HotkeyButton>
                </div>
            </div>
            <div
                class="flex justify-center mt-10 space-x-4 relative items-center"
            >
                <div
                    class={iconClass}
                    onclick={() =>
                        window.open(
                            "https://www.youtube.com/@AllanZimmermann/videos",
                            "_blank",
                            "noopener,noreferrer",
                        )}
                >
                    <Youtube width={30} height={30} />
                    <p>YouTube</p>
                </div>
                <div
                    class={iconClass}
                    onclick={() =>
                        window.open(
                            "https://docs.openiap.io/",
                            "_blank",
                            "noopener,noreferrer",
                        )}
                >
                    <LibraryBig width={30} height={30} />
                    <p>Docs</p>
                </div>
                <div
                    class={iconClass}
                    onclick={() =>
                        window.open(
                            "https://discourse.openiap.io/",
                            "_blank",
                            "noopener,noreferrer",
                        )}
                >
                    <MessageSquareText width={30} height={30} />
                    <p>Forum</p>
                </div>
                <div
                    class={iconClass}
                    onclick={() =>
                        window.open(
                            "https://github.com/open-rpa/",
                            "_blank",
                            "noopener,noreferrer",
                        )}
                >
                    <Github width={30} height={30} />
                    <p>GitHub</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .hero-img {
        filter: sepia(1) saturate(0) brightness(0.1) contrast(1.5)
            hue-rotate(-180deg);
    }
</style>
