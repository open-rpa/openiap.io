<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index";
    import insightDarkSvg from "$lib/images/home/workitemqueues/insightdark.svg";
    import insightSvg from "$lib/images/home/workitemqueues/insights.svg";
    import modSvg from "$lib/images/home/workitemqueues/mod.svg";
    import modDarkSvg from "$lib/images/home/workitemqueues/moddark.svg";
    import multilangSvg from "$lib/images/home/workitemqueues/multilang.svg";
    import multilangDarkSvg from "$lib/images/home/workitemqueues/multilangdark.svg";
    import quickretrySvg from "$lib/images/home/workitemqueues/quickretry.svg";
    import quickretryDarkSvg from "$lib/images/home/workitemqueues/quickretrydark.svg";
    import scaledarkSvg from "$lib/images/home/workitemqueues/scale.svg";
    import scaledarkDarkSvg from "$lib/images/home/workitemqueues/scaledark.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";

    let carouselItem = [
        {
            title: "Modulization",
            description:
                "Divide your processes into smaller parts for easier testing, troubleshooting and reporting",
            image: modSvg,
            imageDark: modDarkSvg,
        },
        {
            title: "Scalability",
            description:
                "Easily scale up the code associated with each work item queue to handle any amount of workload.",
            image: scaledarkSvg,
            imageDark: scaledarkDarkSvg,
        },
        {
            title: "Multi-language",
            description:
                "Each work item queue can orchestrate code in different languages. This allows using the right language for the right task.",
            image: multilangSvg,
            imageDark: multilangDarkSvg,
        },
        {
            title: "Quickly Retry Failed Work Items",
            description:
                "Isolate and handle errors by easily re-trying or re-submitting failed work items",
            image: quickretrySvg,
            imageDark: quickretryDarkSvg,
        },
        {
            title: "Gain insights over your process",
            description:
                "By splitting your process up into multiple units that work across multiple parts of the process, we can now easily gain better insights to how our process is performing and where there are bottle-necks.",
            image: insightSvg,
            imageDark: insightDarkSvg,
        },
    ];
    function renderTopSmall(index: number) {
        let newClass = "";
        if (index == 0) {
            newClass = "md:top-5";
        } else if (index == 1) {
            newClass = "md:top-5 bottom-0";
        } else if (index == 2) {
            newClass = "top-12 md:top-14";
        } else if (index == 3) {
            newClass = "top-12 md:top-14";
        } else if (index == 4) {
            newClass = "top-20 md:top-16";
        }
        return newClass + " left-0 right-0  ";
    }
    function renderTopLarge(index: number) {
        let newClass = "";
        if (index == 0) {
            newClass = "lg:top-10 xl:top-0";
        } else if (index == 1) {
            newClass = "lg:top-10 xl:top-0 bottom-0";
        } else if (index == 2) {
            newClass = "lg:top-10 xl:top-0 xl:bottom-0";
        } else if (index == 3) {
            newClass = "lg:top-10  xl:top-0 xl:bottom-0";
        } else if (index == 4) {
            newClass = "lg:top-14  xl:top-10 xl:bottom-0";
        }
        return newClass + " left-0 right-0  ";
    }
</script>

<div class="mx-6 md:mx-10 lg:mx-20 xl:mx-32 xl:mb-24 xl:flex xl:justify-center">
    <Carousel.Root
        opts={{
            align: "start",
        }}
        class="lg:max-w-[1700px]"
    >
        <div class="mb-12">
            <div class="flex items-end justify-between gap-8">
                <p
                    class={"text-[30px] lg:text-[64px] font-semibold my-6" +
                        gradienttext}
                >
                    Workitem Queues
                </p>
                <div class="block flex space-x-5 items-center lg:pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold lg:text-xl">
                Work item queues let your automation handle tasks in a scalable
                way — distributing work, <br /> tracking progress, and ensuring no
                task gets lost.
            </p>
        </div>
        <Carousel.Content>
            {#each carouselItem as item, index}
                <Carousel.Item
                    class={index == 0
                        ? "lg:basis-3/5"
                        : "md:basis-1/2 lg:basis-1/3"}
                >
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[400px] xl:h-[480px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-8 xl:p-12 pb-0 md:mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                {item.title}
                            </p>
                            <p class="text-sm">
                                {item.description}
                            </p>
                        </div>
                        <div
                            class="lg:ms-12 h-full flex justify-end w-full lg:hidden"
                        >
                            <div
                                class={"w-full h-[300px] overflow-hidden flex items-center justify-center group-hover:hidden inline-flex " +
                                    renderTopSmall(index)}
                                id={`wi-${index}`}
                            >
                                <img
                                    src={item.imageDark}
                                    alt="imagedark"
                                    class="relative -mt-[200px]"
                                />
                            </div>
                            <div
                                class={"w-full h-[300px] overflow-hidden flex items-center justify-center group-hover:group-hover:inline-flex hidden " +
                                    renderTopSmall(index)}
                                id={`wi-${index + 1000}`}
                            >
                                <img
                                    src={item.image}
                                    alt="imagelight"
                                    class="relative -mt-[200px]"
                                />
                            </div>
                        </div>
                        <div
                            class="lg:ms-12 h-full flex justify-end w-full hidden lg:block"
                        >
                            <div
                                class={"absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0 " +
                                    renderTopLarge(index)}
                            >
                                <img src={item.imageDark} alt="imagedark" />
                            </div>
                            <div
                                class={"absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 " +
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
            class="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-10
   bg-gradient-to-l from-[#0D0D11] to-transparent z-10"
        ></div>
    </Carousel.Root>
</div>
