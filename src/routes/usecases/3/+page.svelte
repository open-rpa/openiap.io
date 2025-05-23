<script>
    import { goto } from "$app/navigation";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import footersvg from "$lib/images/usecases/footer.svg";
    import header from "$lib/images/usecases/header/alphatrods.svg";
    import next from "$lib/images/usecases/next.svg";
    import { ChevronLeft } from "lucide-svelte";

    $effect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 },
        );

        const elements = document.querySelectorAll(".scroll-fade-in");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });
    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<svelte:head>
    <title>Use Cases | OpenIAP</title>
</svelte:head>

<section class="lg:px-4 gradient-bg text-bw50">
    <div class="container mt-32 scroll-fade-in">
        <div
            class="grid grid-cols-2 md:flex px-4 lg:px-14 xl:px-32 items-center gap-4 mb-6 text-sm"
        >
            <HotkeyButton
                variant="ghostfull"
                onclick={() => {
                    goto("/usecases");
                }}
                class="flex w-fit"
            >
                <ChevronLeft />
                Back</HotkeyButton
            >
            <p class="rounded-full border border-bw500 p-1 px-2 w-fit">
                Use Cases
            </p>
            <p>March 28, 2025</p>
            <p>2 minute read</p>
        </div>
        <div class="px-4 md:px-20 lg:px-40 xl:px-56 text-start">
            <div class="mb-10">
                <p
                    class={"text-[20px] lg:text-[40px] max-w-[1000px] font-bold animate-fade-in leading-none " +
                        gradienttext}
                >
                    OpenCore enabled the use of AI and Humans in the Loop to
                    automate critical processes in Governmental Institutions
                </p>
            </div>

            <img
                src={header}
                alt="logo1"
                class="h-full hidden md:block mx-auto mb-10"
            />

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Challenges</p>
                <p>
                    Using Generative AI in government projects while ensuring
                    GDPR compliance, automating the entire process, and keeping
                    humans in the loop was a key challenge for our client.
                </p>
            </div>

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Solution</p>
                <p>
                    OpenCore allowed for a single pane view for the entire
                    automation process, including multiple RPA vendors, humans
                    in the loop and the integration with OpenAI. AI is leveraged
                    to predict what actions need to be taken when a work item
                    arrives in the queue, detecting out of the ordinary
                    transactions and document processing.
                </p>
            </div>

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Results</p>
                <p class="mb-4">
                    OpenCore enabled the municipality to streamline a previously
                    fragmented and slow process while ensuring humans remain in
                    the loop for critical decisions and error handling. AI is
                    now leveraged more effectively to determine when human
                    involvement is needed.
                </p>
            </div>

            <Separator class="mb-10 bg-bw700" />

            <div class="flex justify-between items-center mb-10">
                <HotkeyButton
                    class="px-0"
                    variant="ghostfull"
                    onclick={() => {
                        goto("/usecases/2");
                    }}
                >
                    <div
                        class="flex space-x-4 items-center text-start cursor-pointer"
                    >
                        <img
                            src={next}
                            alt="logo1"
                            class="transform rotate-180"
                        />
                        <div class="flex flex-col justify-center text-xs">
                            <p class="text-bw400">Previous</p>
                            <p>SynergyERP</p>
                        </div>
                    </div>
                </HotkeyButton>
                <HotkeyButton
                    class="px-0"
                    variant="ghostfull"
                    onclick={() => {
                        goto("/usecases/4");
                    }}
                >
                    <div
                        class="flex space-x-4 items-center text-end cursor-pointer"
                    >
                        <div class="flex flex-col justify-center text-xs">
                            <p class="text-bw400">Next</p>
                            <p>Sloif</p>
                        </div>
                        <img src={next} alt="logo1" />
                    </div>
                </HotkeyButton>
            </div>

            <div
                class="mb-20 md:mb-10 lg:mb-16 text-center w-fit h-40 md:h-full flex justify-center items-center mx-auto"
            >
                <div class="container-rectangle md:w-full md:h-full">
                    <img src={footersvg} alt="logo1" class="hidden lg:block" />

                    <div
                        class="lg:absolute lg:top-0 lg:left-0 w-full mt-0 mt-2 md:mt-4 xl:mt-10"
                    >
                        <div class="text-center">
                            <h1
                                class={"md:text-[24px] xl:text-[50px] text-center font-bold animate-fade-in mb-2 xl:mb-10" +
                                    gradienttext}
                            >
                                Ready to get started?
                            </h1>
                        </div>
                        <p class="mb-4 xl:mb-10 text-[10px] lg:text-[16px]">
                            Try OpenCore now for free
                        </p>
                        <HotkeyButton
                            aria-label="Try OpenCore"
                            onclick={() =>
                                window.open(
                                    "https://app.openiap.io/ui/loginverify",
                                    "_blank",
                                )}
                        >
                            Try OpenCore
                        </HotkeyButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .container-rectangle {
        position: relative;
        color: white;
    }

    /* Top left text */
    .container {
        position: relative;
        color: white;
    }
</style>
