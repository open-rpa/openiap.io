<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index";
    import customizeSvg from "$lib/images/home/observability/customizeyourperformance_color.svg";
    import customizeDarkSvg from "$lib/images/home/observability/customizeyourperformance_mono.svg";
    import cenlogeSvg from "$lib/images/home/observability/centrallogging_color.svg";
    import cenlogDarkSvg from "$lib/images/home/observability/centrallogging_mono.svg";
    import readytouseSvg from "$lib/images/home/observability/readytousetel_color.svg";
    import readytouseDarkSvg from "$lib/images/home/observability/readytousetel_mono.svg";
    import tracingSvg from "$lib/images/home/observability/tracing_color.svg";
    import tracingDarkSvg from "$lib/images/home/observability/tracing_mono.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let carouselItem = [
        {
            title: "Central logging",
            description:
                "Centralized logs capture all automation activity, making it easy to track and troubleshoot across multiple bots and servers.",
            imageDark: cenlogDarkSvg,
            image: cenlogeSvg,
        },
        {
            title: "Customize Your Performance Data",
            description:
                "Choose the performance metrics that matter most to you and tailor your insights for a personalised experience.",
            imageDark: customizeDarkSvg,
            image: customizeSvg,
        },
        {
            title: "Ready-to-use Telemetery",
            description:
                "Get instant access to 300 unique performance metrics with our pre-built template—valuable insights just a click away.",
            imageDark: readytouseDarkSvg,
            image: readytouseSvg,
        },
        {
            title: "Tracing",
            description:
                "Trace every request across multiple app domains and servers to easily pinpoint points of failure.",
            imageDark: tracingDarkSvg,
            image: tracingSvg,
        },
    ];
    function renderTopSmall(index: number) {
        if (index == 0) {
            return " mt-16 md:mt-0 items-end justify-end";
        } else if (index == 1) {
            return " mt-6 items-center justify-center";
        } else {
            return " items-end justify-end";
        }
    }
    function renderTopLarge(index: number) {
        if (index == 0) {
            return " items-end justify-end";
        } else if (index == 1) {
            return " mt-10 items-center justify-center";
        } else if (index == 2) {
            return " items-end justify-end";
        } else if (index == 3) {
            return " items-end justify-end";
        } else {
            return " items-end justify-end";
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
                    class={"text-[50px] font-semibold" +
                        gradienttext}
                >
                    Observability
                </p>
                <div class="flex space-x-5 items-center lg:pe-10 hidden md:block">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold text-[14px]">
                Unlock powerful insights with pre-built metrics and full
                transparency across your infrastructure
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
                        class="border rounded-[20px] border-bw500/70 h-[360px] md:h-[400px] xl:h-[450px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-8 pb-0 xl:p-12 xl:pb-0">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                {item.title}
                            </p>
                            <p class="text-sm">
                                {item.description}
                            </p>
                        </div>
                        <div class="lg:hidden">
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
                        <div class="hidden lg:block">
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
