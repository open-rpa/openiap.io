<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import builtinDarkSvg from "$lib/images/home/reports/builtindark.svg";
    import builtinSvg from "$lib/images/home/reports/builtin.svg";
    import createdashDarkSvg from "$lib/images/home/reports/createdashdark.svg";
    import createdashSvg from "$lib/images/home/reports/createdash.svg";
    import connectdataDarkSvg from "$lib/images/home/reports/connectdatadark.svg";
    import connectdataSvg from "$lib/images/home/reports/connectdata.svg";

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
                    Reports
                </p>
                <div class="flex space-x-5 items-center pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold text-xl">
                Easily create dashboards and reports on user data
            </p>
        </div>

        <Carousel.Content class="fade-mask-rights">
            <Carousel.Item class="basis-3/5">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-12">
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
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={builtinDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={builtinSvg} alt="performance" />
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
                        <div class="p-12 mb-24">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Create your own dashboards
                            </p>
                            <p class="text-sm">
                                If you’re looking for specific
                            </p>
                        </div>

                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={createdashDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={createdashSvg} alt="performance" />
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
                                Connect to other data sources
                            </p>
                            <p class="text-sm">
                                For larger enterprises we give you the option to
                                create reports in other platforms
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={connectdataDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={connectdataSvg} alt="performance" />
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
