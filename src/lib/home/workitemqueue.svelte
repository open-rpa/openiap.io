<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import modSvg from "$lib/images/home/workitemqueues/mod1.svg";
    import scaleabilitySvg from "$lib/images/home/workitemqueues/scaleability.svg";
    import multilangSvg from "$lib/images/home/workitemqueues/multilang.svg";
    import insightSvg from "$lib/images/home/workitemqueues/insight.svg";
    
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
                        class="border-2 rounded-[20px] border-bw500/70 h-[514px] overflow-hidden grayscale hover:grayscale-0 transition-all"
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
                        <div>
                            <img src={modSvg} alt="modulization" />
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
                                Scalability
                            </p>
                            <p class="text-sm">
                                Easily scale up the code associated with each
                                work item queue to handle any amount of
                                workload.
                            </p>
                        </div>

                        <img
                            src={scaleabilitySvg}
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

                        <img
                            src={multilangSvg}
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
                        <div class="p-12 mb-6">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Quickly Retry Failed Work Items
                            </p>
                            <p class="text-sm">
                                Isolate and handle errors by easily re-trying or
                                re-submitting failed work items
                            </p>
                        </div>

                        <!-- <img
                            src={multilangSvg}
                            alt="performance"
                            class="w-full"
                        /> -->
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

                        <img
                            src={insightSvg}
                            alt="performance"
                            class="w-full"
                        />
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
