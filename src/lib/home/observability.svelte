<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import performanceSvg from "$lib/images/home/observability/performance.svg";
    import timelineSvg from "$lib/images/home/observability/timeline.svg";
    import graphSvg from "$lib/images/home/observability/graph.svg";
    import tetTSvg from "$lib/images/home/observability/telemetry_top.svg";
    import telDSvg from "$lib/images/home/observability/telemetry_down.svg";
    import grafanaSvg from "$lib/images/home/observability/Grafana_icon.svg";
    import tracingSvg from "$lib/images/home/observability/tracing.svg";
    import { Globe } from "lucide-svelte";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div class="px-32 mb-24">
    <Carousel.Root
        opts={{
            align: "start",
        }}
    >
        <div class="mb-12">
            <div class="flex items-end justify-between gap-8">
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
            <Carousel.Item class="basis-3/5">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[514px] overflow-hidden grayscale hover:grayscale-0 transition-all"
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
                        <div
                            class="ms-12 h-[387px] border-2 rounded-[20px] border-bw500/70 w-full"
                        >
                            <div
                                class="py-1 px-2.5 border-b-2 border-bw500/70 w-full"
                            >
                                <Globe class="h-4 w-4" />
                            </div>
                            <div class="m-3 mt-0 pt-3 h-full">
                                <img
                                    src={timelineSvg}
                                    alt="timeline"
                                    class="w-full mb-4"
                                />
                                <img
                                    src={graphSvg}
                                    alt="timeline"
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale hover:grayscale-0 transition-all"
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

                        <img
                            src={performanceSvg}
                            alt="performance"
                            class="w-full"
                        />
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale hover:grayscale-0 transition-all"
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
                        <div
                            class="ms-12 h-[387px] border-2 rounded-[20px] border-bw500/70 w-full"
                        >
                            <div
                                class="py-1 px-2.5 border-b-2 border-bw500/70 w-full"
                            >
                                <img
                                    src={grafanaSvg}
                                    alt="timeline"
                                    class="ms-2 my-1 h-4 w-4"
                                />
                            </div>
                            <div class="m-3 mt-0 pt-3 h-full">
                                <img
                                    src={tetTSvg}
                                    alt="timeline"
                                    class="w-full mb-4"
                                />
                                <img
                                    src={telDSvg}
                                    alt="timeline"
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale hover:grayscale-0 transition-all"
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
                        <div
                            class="ms-12 h-[387px] border-2 rounded-[20px] border-bw500/70 w-full"
                        >
                            <div
                                class="py-1 px-2.5 border-b-2 border-bw500/70 w-full"
                            >
                                <img
                                    src={tracingSvg}
                                    alt="timeline"
                                    class="ms-2 my-1 h-4 w-4"
                                />
                            </div>
                            <div
                                class="py-1 px-2.5 border-b-2 border-bw500/70 w-full flex space-x-5 text-xs"
                            >
                                <div>Trace start</div>
                                <div class="text-bw100">
                                    February 24 2025, 12:12:45.394
                                </div>
                            </div>
                            <div
                                class="py-1 px-2.5 border-b-2 border-bw500/70 w-full"
                            >
                                <!-- <img
                                    src={tetTSvg}
                                    alt="timeline"
                                    class="w-full mb-4"
                                /> -->
                            </div>
                            <div class="m-3 mt-0 pt-3 h-full">
                                <!-- <img
                                    src={telDSvg}
                                    alt="timeline"
                                    class="w-full"
                                /> -->
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
