<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index";
    import insightDarkSvg from "$lib/images/home/workitemqueues/gaininsights_mono.svg";
    import insightSvg from "$lib/images/home/workitemqueues/gaininsights_color.svg";
    import modSvg from "$lib/images/home/workitemqueues/modulization_color.svg";
    import modDarkSvg from "$lib/images/home/workitemqueues/modulization_mono.svg";
    import multilangSvg from "$lib/images/home/workitemqueues/multi-lang_color.svg";
    import multilangDarkSvg from "$lib/images/home/workitemqueues/multi-lang_mono.svg";
    import quickretrySvg from "$lib/images/home/workitemqueues/quicklyretry_color.svg";
    import quickretryDarkSvg from "$lib/images/home/workitemqueues/quicklyretry_mono.svg";
    import scaledarkSvg from "$lib/images/home/workitemqueues/scalability_color.svg";
    import scaledarkDarkSvg from "$lib/images/home/workitemqueues/scalability_mono.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";

    let carouselItem = [
        {
            title: "Modulization",
            description:
                "Divide your processes into smaller parts for easier testing, troubleshooting and reporting.",
            image: modSvg,
            imageDark: modDarkSvg,
        },
        {
            title: "Scalability",
            // description:"Easily scale up code associated with each work item queue to handle any amount of workload.",
            description:
                "Effortlessly scale up code for each workitem queue to manage workloads of any size.",

            image: scaledarkSvg,
            imageDark: scaledarkDarkSvg,
        },
        {
            title: "Multi-language",
            description:
                "Each workitem queue can orchestrate code in different languages, giving you the flexibility to choose the right language for the right task.",
            image: multilangSvg,
            imageDark: multilangDarkSvg,
        },
        {
            title: "Quickly Retry Failed Workitems",
            description:
                "Isolate and handle errors by easily re-trying or re-submitting failed workitems.",
            image: quickretrySvg,
            imageDark: quickretryDarkSvg,
        },
        {
            title: "Gain insights over your process",
            // description: "By splitting your process up into multiple units that work across multiple parts of the process, we can now easily gain better insights to how our process is performing and where there are bottle-necks.",
            description:
                " By dividing your process into multiple units that operate across different stages, we can easily gain deeper insights into its performance and identify bottlenecks more effectively",
            image: insightSvg,
            imageDark: insightDarkSvg,
        },
    ];
    function renderTopSmall(index: number) {
        if (index == 0) {
            return " items-center justify-center";
        } else if (index == 1) {
            return " mt-10 items-center justify-center";
        } else if (index == 3) {
            return " mt-10 items-center justify-center";
        } else {
            return " items-start justify-start";
        }
    }
    function renderTopLarge(index: number) {
        let newClass = "";
        if (index == 0) {
            return (newClass = " items-end justify-end ");
        } else {
            return newClass + " items-center justify-center";
        }
    }
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-32 xl:mb-24 xl:flex xl:justify-center"
>
    <Carousel.Root
        opts={{
            align: "start",
        }}
        class="lg:max-w-[1700px]"
    >
        <div class="mb-10">
            <div class="flex items-end justify-between gap-8">
                <p
                    class={"text-[24px] lg:text-[50px] font-semibold" +
                        gradienttext}
                >
                    Workitem Queues
                </p>
                <div class="block flex space-x-5 items-center lg:pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold lg:text-[14px]">
                Workitem queues let your automation handle tasks in a scalable
                way — distributing work, <br /> tracking progress, and ensuring no
                task gets lost
            </p>
        </div>
        <Carousel.Content class="gap-5">
            {#each carouselItem as item, index}
                <Carousel.Item
                    class={index == 0
                        ? "lg:basis-3/5"
                        : "md:basis-1/2 lg:basis-1/3"}
                >
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[380px] xl:h-[450px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-8 xl:p-12 pb-0">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                {item.title}
                            </p>
                            <p class="text-sm">
                                {item.description}
                            </p>
                        </div>
                        <div
                            class={"h-full flex justify-end w-full lg:hidden" +
                                (index == 0
                                    ? " items-center justify-center"
                                    : " items-start justify-start")}
                        >
                            <div
                                class={"w-full overflow-hidden flex group-hover:hidden inline-flex " +
                                    renderTopSmall(index)}
                            >
                                <img src={item.imageDark} alt="imagedark" />
                            </div>
                            <div
                                class={"w-full overflow-hidden flex group-hover:group-hover:inline-flex hidden " +
                                    renderTopSmall(index)}
                            >
                                <img src={item.image} alt="imagelight" />
                            </div>
                        </div>
                        <div
                            class="h-full flex justify-end w-full hidden lg:block"
                        >
                            <div
                                class={"w-full overflow-hidden flex group-hover:hidden inline-flex " +
                                    renderTopLarge(index)}
                            >
                                <img src={item.imageDark} alt="imagedark" />
                            </div>
                            <div
                                class={"w-full overflow-hidden flex group-hover:group-hover:inline-flex hidden " +
                                    renderTopLarge(index)}
                            >
                                <img src={item.image} alt="imagelight" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            {/each}
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1"></div>
            </Carousel.Item>
        </Carousel.Content>
        <div
            class="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-36
   bg-gradient-to-l from-[rgba(13,13,17,0.5)] to-transparent z-10"
        ></div>
    </Carousel.Root>
</div>
