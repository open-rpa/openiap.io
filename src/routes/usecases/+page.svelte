<script>
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import kn_increasing from "$lib/images/usecases/kn_increasing.svg";
    import synergy from "$lib/images/usecases/synergy.svg";
    import access from "$lib/images/usecases/access.svg";
    import sloif from "$lib/images/usecases/sloif.svg";
    import alpha from "$lib/images/usecases/alpha.svg";
    import { MoveRight } from "lucide-svelte";

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

    const usecases = [
        {
            title: "Synergy",
            description: "Reduced errors and manual tasks",
            image: synergy,
            link: "/usecases/2",
            industry: "Finance",
            bgcolor: "bg-[#6D589F]",
        },
        {
            title: "Alphatrods ",
            description: "Removed bottlenecks, Improved accuracy",
            image: alpha,
            link: "/usecases/3",
            industry: "Public Sector",
            bgcolor: "bg-[#58899F]",
        },
        {
            title: "Sloif",
            description: "Easy integration and scalability",
            image: sloif,
            link: "/usecases/4",
            industry: "Integration",
            bgcolor: "bg-[#9F7958]",
        },
        {
            title: "Access-IOT",
            description: "IoT-driven alerts for life-saving care",
            image: access,
            link: "/usecases/5",
            industry: "Healthcare",
            bgcolor: "bg-[#9F5858]",
        },
    ];
</script>

<svelte:head>
    <title>Use Cases | OpenIAP</title>
</svelte:head>

<section class="lg:px-4 gradient-bg text-bw50">
    <div class="container mx-auto">
        <div class="mt-32 mb-10 scroll-fade-in opacity-0 transition-opacity">
            <p
                class={"text-[50px] max-w-[1000px] text-start font-bold mb-2" +
                    gradienttext}
            >
                Uncover the details
            </p>

            <div class="xl:max-w-[1700px]">
                <div
                    class="border border-bw500/70 rounded-[20px] flex flex-col justify-between overflow-hidden"
                >
                    <div class="flex flex-col xl:flex-row justify-between">
                        <div
                            class="flex flex-col justify-center px-10 xl:py-10 space-y-10 xl:space-y-0"
                        >
                            <div class="pt-10 xl:pt-0">
                                <p
                                    class={"text-[44px] leading-none  mb-4" +
                                        gradienttext}
                                >
                                    Increased Integration Efficiency by 25x
                                </p>
                            </div>
                            <div class="pb-4 xl:pb-0">
                                <HotkeyButton
                                    aria-label="Learn more"
                                    onclick={() => {
                                        goto(base + "/usecases/1");
                                    }}>Learn more</HotkeyButton
                                >
                            </div>
                        </div>
                        <div>
                            <img src={kn_increasing} alt="coverSvg" />
                            <!-- <img src={coverSvg} alt="coverSvg" /> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="scroll-fade-in opacity-0 transition-opacity mb-10">
            <p class={"text-[50px] font-bold mb-2" + gradienttext}>
                Quick reads
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each usecases as usecase}
                    <div
                        class="  duration-500 rounded-[20px] border border-bw500/70 overflow-hidden"
                    >
                        <img src={usecase.image} alt="coverSvg" />
                        <div
                            class="py-10 px-10 pe-2"
                        >
                            <p
                                class={`mb-5 text-xs rounded-full w-fit p-2 ` +
                                    usecase.bgcolor}
                            >
                                {usecase.industry}
                            </p>
                            <p class="mb-7 text-[32px] leading-none">
                                {usecase.description}
                            </p>
                            <HotkeyButton
                                class="w-fit"
                                aria-label="Learn more"
                                onclick={() => {
                                    goto(base + usecase.link);
                                }}
                                >Learn more
                                <MoveRight />
                            </HotkeyButton>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
