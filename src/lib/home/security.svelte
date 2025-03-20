<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import auditSvg from "$lib/images/home/Security/audit.svg";
    import auditDarkSvg from "$lib/images/home/Security/auditdark.svg";
    import datasecSvg from "$lib/images/home/Security/datasec.svg";
    import datasecDarkSvg from "$lib/images/home/Security/datasecdark.svg";
    import globeSvg from "$lib/images/home/Security/globe.svg";
    import globeDarkSvg from "$lib/images/home/Security/globedark.svg";

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
                    Security
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
                                Data Security
                            </p>
                            <p class="text-sm">
                                Access control lists on all data. Option for on
                                the fly encryption for sensitive data
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={datasecDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 right-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={datasecSvg} alt="performance" />
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
                                Scalability
                            </p>
                            <p class="text-sm">
                                Every component in the platform can be made
                                scalable and we force developers to create
                                packages that in itself are also scalable
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={globeDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-10 left-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={globeSvg} alt="performance" />
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
                                Audit trailing
                            </p>
                            <p class="text-sm">
                                The platform generates extensive audit trailing
                                and keeps complete version history of all
                                changes in the database. This allows complying
                                with even the most restrictive demands
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-20 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={auditDarkSvg} alt="timeline" />
                            </div>
                            <div
                                class="absolute top-20 right-0 flex items-center justify-center group-hover:block hidden"
                            >
                                <img src={auditSvg} alt="performance" />
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
