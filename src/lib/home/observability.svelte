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
</script>

<div class="px-32 mb-24 flex justify-center">
    <Carousel.Root
        opts={{
            align: "start",
        }}
        class="xl:w-[1700px]"
    >
        <div class="mb-12">
            <div class="flex items-end justify-between xl:gap-8">
                <p class={"text-[64px] font-semibold" + gradienttext}>
                    Observability
                </p>
                <div class="flex space-x-5 items-center pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold text-xl">
                Unlock powerful insights with pre-built metrics and full
                transparency across your infrastructure
            </p>
        </div>

        <Carousel.Content class="fade-mask-rights">
            <Carousel.Item class="basis-1 lg:basis-3/5">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12 pb-24">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Central logging
                            </p>
                            <p class="text-sm">
                                Centralized logs capture all automation
                                activity, making it easy to track issues across
                                multiple bots and servers.
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={cenlogDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={cenlogeSvg} alt="performance" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="basis-1 md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Customize Your Performance Data
                            </p>
                            <p class="text-sm">
                                Choose the performance metrics that matter most
                                to you and tailor your insights for a
                                personalized experience
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={customizeDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0  flex items-center justify-center group-hover:inline-flex hidden"
                            >
                                <img src={customizeSvg} alt="performance" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="basis-1 md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12 mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Ready-to-use Telemetery
                            </p>
                            <p class="text-sm">
                                Get instant access to 300 unique performance
                                metrics with our pre-built template—making
                                valuable insights just a click away.
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={readytouseDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={readytouseSvg} alt="performance" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="basis-1 md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12 mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Tracing
                            </p>
                            <p class="text-sm">
                                Trace every request across multiple app domains
                                and servers to easily pinpoint failure points.
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={tracingDarkSvg} alt="tracingDarkSvg" />
                            </div>
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={tracingSvg} alt="tracingSvg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1"></div>
            </Carousel.Item>
        </Carousel.Content>
        <div
            class="pointer-events-none absolute top-0 right-0 h-full w-10
       bg-gradient-to-l from-[#0D0D11] to-transparent z-10"
        ></div>
    </Carousel.Root>
</div>
