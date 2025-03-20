<script>
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
</script>

<div class="px-32 mb-24 flex justify-center">
    <Carousel.Root
        opts={{
            align: "start",
        }}
        class="xl:w-[1700px]"
    >
        <div class="mb-12">
            <div class="flex items-end justify-between gap-8">
                <p class={"text-[64px] font-semibold" + gradienttext}>
                    Workitem Queues
                </p>
                <div class="flex space-x-5 items-center pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold text-xl">
                Work item queues let your automation handle tasks in a scalable
                way — distributing work, tracking progress, and ensuring no task
                gets lost.
            </p>
        </div>

        <Carousel.Content class="fade-mask-rights">
            <Carousel.Item class="basis-3/5">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12 mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Modulization
                            </p>
                            <p class="text-sm">
                                Divide your processes into smaller parts for
                                easier testing, troubleshooting and reporting
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={modDarkSvg} alt="modDarkSvg" />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:group-hover:inline-flex hidden"
                            >
                                <img src={modSvg} alt="modSvg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12 mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Scalability
                            </p>
                            <p class="text-sm">
                                Easily scale up the code associated with each
                                work item queue to handle any amount of
                                workload.
                            </p>
                        </div>

                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img
                                    src={scaledarkDarkSvg}
                                    alt="scaledarkDarkSvg"
                                />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:group-hover:inline-flex hidden"
                            >
                                <img src={scaledarkSvg} alt="scaledarkSvg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12 mb-6">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Multi-language
                            </p>
                            <p class="text-sm">
                                Each work item queue can orchestrate code in
                                different languages. This allows using the right
                                language for the right task.
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img
                                    src={multilangDarkSvg}
                                    alt="multilangDarkSvg"
                                />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:inline-flex hidden"
                            >
                                <img src={multilangSvg} alt="multilangSvg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12 mb-6">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Quickly Retry Failed Work Items
                            </p>
                            <p class="text-sm">
                                Isolate and handle errors by easily re-trying or
                                re-submitting failed work items
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img
                                    src={quickretryDarkSvg}
                                    alt="quickretryDarkSvg"
                                />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:inline-flex hidden"
                            >
                                <img src={quickretrySvg} alt="quickretrySvg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Gain insights over your process
                            </p>
                            <p class="text-sm">
                                By splitting your process up into multiple units
                                that work across multiple parts of the process,
                                we can now easily gain better insights to how
                                our process is performing and where there are
                                bottle-necks.
                            </p>
                        </div>

                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img
                                    src={insightDarkSvg}
                                    alt="insightDarkSvg"
                                />
                            </div>
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={insightSvg} alt="insightSvg" />
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
