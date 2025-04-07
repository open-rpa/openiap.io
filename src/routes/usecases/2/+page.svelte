<script>
    import { goto } from "$app/navigation";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import footersvg from "$lib/images/usecases/footer.svg";
    import header from "$lib/images/usecases/header/synergy.svg";
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
        <div class="flex px-4 lg:px-32 items-center space-x-4 mb-6">
            <HotkeyButton
                variant="ghostfull"
                href=""
                onclick={() => {
                    goto("/usecases");
                }}
                class="flex"
            >
                <ChevronLeft />
                Back</HotkeyButton
            >
            <p class="rounded-full border-2 border-bw500 p-1 px-2">Use Case</p>
            <p>March 28, 2025</p>
            <p>5 minute read</p>
        </div>
        <div class="px-4 lg:px-56 text-start">
            <div class="mb-10">
                <p
                    class={"text-[20px] lg:text-[40px] max-w-[1000px] font-bold animate-fade-in leading-none " +
                        gradienttext}
                >
                    SynergyERP reduced errors and manual tasks by using OpenCore
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
                    Some of the largest financial institutions of the country
                    faced challenges with manual and error prone tasks.
                    Specifically, ERP and HCM data entry was manual and
                    different systems could not talk to each other.
                </p>
            </div>

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Solution</p>
                <p>
                    SynergyERP built a highly scalable automation for ERP
                    systems with OpenCore that can stand up to highest security
                    requirements that are enforced in the financial industry.
                </p>
            </div>

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Results</p>
                <p class="mb-4">
                    SynergyERP built a highly scalable automation for ERP
                    systems with OpenCore that can stand up to highest security
                    requirements that are enforced in the financial industry.
                </p>
            </div>

            <Separator class="mb-10 bg-bw700" />

            <div class="flex justify-between items-center mb-10">
                <div
                    class="flex space-x-4 items-center text-start cursor-pointer"
                    onclick={() => {
                        goto("/usecases/1");
                    }}
                >
                    <img src={next} alt="logo1" class="transform rotate-180" />
                    <div class="flex flex-col justify-center text-xs">
                        <p class="text-bw400">Previous</p>
                        <p>Kuehne + Nagel</p>
                    </div>
                </div>
                <div
                    class="flex space-x-4 items-center text-end cursor-pointer"
                    onclick={() => {
                        goto("/usecases/3");
                    }}
                >
                    <div class="flex flex-col justify-center text-xs">
                        <p class="text-bw400">Next</p>
                        <p>Alphatrods</p>
                    </div>
                    <img src={next} alt="logo1" />
                </div>
            </div>

            <div class="mb-10 lg:mb-16 text-center w-fit overflow-hidden">
                <div class="container-rectangle h-14 w-72 md:w-full md:h-full">
                    <img
                        src={footersvg}
                        alt="logo1"
                        class="h-full hidden md:block"
                    />

                    <div class="absolute top-0 left-0 w-full mt-10">
                        <div class="text-center">
                            <h1
                                class={"md:text-[24] lg:text-[50px] text-center font-bold mb-6 animate-fade-in mb-10" +
                                    gradienttext}
                            >
                                Ready to get started?
                            </h1>
                        </div>
                        <p class="mb-10 text-[10px] lg:text-[16px]">
                            Try OpenCore now for free
                        </p>
                        <HotkeyButton
                            onclick={() =>
                                window.open(
                                    "https://app.openiap.io/ui/login",
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
