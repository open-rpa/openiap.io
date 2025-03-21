<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import builtinSvg from "$lib/images/home/reports/builtin.svg";
    import builtinDarkSvg from "$lib/images/home/reports/builtindark.svg";
    import connectdataSvg from "$lib/images/home/reports/connectdata.svg";
    import connectdataDarkSvg from "$lib/images/home/reports/connectdatadark.svg";
    import createdashSvg from "$lib/images/home/reports/createdash.svg";
    import createdashDarkSvg from "$lib/images/home/reports/createdashdark.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let carouselItem = [
        {
            title: "Modulization",
            description:
                "Divide your processes into smaller parts for easier testing, troubleshooting and reporting",
            image: builtinSvg,
            imageDark: builtinDarkSvg,
        },
        {
            title: "Create your own dashboards",
            description: "If you’re looking for specific",
            image: createdashSvg,
            imageDark: createdashDarkSvg,
        },
        {
            title: "Connect to other data sources",
            description:
                "For larger enterprises we give you the option to create reports in other platforms",
            image: connectdataSvg,
            imageDark: connectdataDarkSvg,
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
                    Reports
                </p>
                <div class="block flex space-x-5 items-center lg:pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold lg:text-xl">
                Easily create dashboards and reports on user data
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
