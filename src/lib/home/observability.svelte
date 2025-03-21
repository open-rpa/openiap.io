<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import cenlogeSvg from "$lib/images/home/observability/cenlog.svg";
    import cenlogDarkSvg from "$lib/images/home/observability/cenlogdark.svg";
    import customizeSvg from "$lib/images/home/observability/customize.svg";
    import customizeDarkSvg from "$lib/images/home/observability/customizedark.svg";
    import readytouseSvg from "$lib/images/home/observability/readytouse.svg";
    import readytouseDarkSvg from "$lib/images/home/observability/readytousedark.svg";
    import tracingSvg from "$lib/images/home/observability/tracing.svg";
    import tracingDarkSvg from "$lib/images/home/observability/tracingdark.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let carouselItem = [
        {
            title: "Central logging",
            description:
                "Centralized logs capture all automation activity, making it easy to track issues across multiple bots and servers.",
            imageDark: cenlogDarkSvg,
            image: cenlogeSvg,
        },
        {
            title: "Customize Your Performance Data",
            description:
                "Choose the performance metrics that matter most to you and tailor your insights for a personalized experience",
            imageDark: customizeDarkSvg,
            image: customizeSvg,
        },
        {
            title: "Ready-to-use Telemetery",
            description:
                "Get instant access to 300 unique performance metrics with our pre-built template—making valuable insights just a click away.",
            imageDark: readytouseDarkSvg,
            image: readytouseSvg,
        },
        {
            title: "Tracing",
            description:
                "Trace every request across multiple app domains and servers to easily pinpoint failure points.",
            imageDark: tracingDarkSvg,
            image: tracingSvg,
        },
    ];
</script>

<div class="lg:px-32 lg:mb-24 lg:flex lg:justify-center">
    <Carousel.Root
        opts={{
            align: "start",
        }}
        class="px-6 lg:px-0 lg:max-w-[1700px]"
    >
        <div class="mb-12">
            <div class="flex items-end justify-between gap-8">
                <p
                    class={"text-[30px] lg:text-[64px] font-semibold my-6" +
                        gradienttext}
                >
                    Observability
                </p>
                <div class="flex space-x-5 items-center lg:pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold lg:text-xl">
                Unlock powerful insights with pre-built metrics and full
                transparency across your infrastructure
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
                        class="border-2 rounded-[20px] border-bw500/70 md:h-[514px] overflow-hidden md:grayscale-0 group"
                    >
                        <div class="p-12 pb-0 md:mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                {item.title}
                            </p>
                            <p class="text-sm">
                                {item.description}
                            </p>
                        </div>
                        <div class="lg:ms-12 h-full flex justify-end w-full">
                            <div
                                class="md:absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={item.imageDark} alt="imagedark" />
                            </div>
                            <div
                                class="md:absolute top-10 left-0 right-0 flex items-center justify-center group-hover:group-hover:inline-flex hidden"
                            >
                                <img src={item.image} alt="imagelight" />
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            {/each}
        </Carousel.Content>
        <div
            class="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-10
   bg-gradient-to-l from-[#0D0D11] to-transparent z-10"
        ></div>
    </Carousel.Root>
</div>
