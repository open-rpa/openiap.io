<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index";
    import builtinSvg from "$lib/images/home/reports/builtinreports_color.svg";
    import builtinDarkSvg from "$lib/images/home/reports/builtinreports_mono.svg";
    import connectdataSvg from "$lib/images/home/reports/connecttoother_color.svg";
    import connectdataDarkSvg from "$lib/images/home/reports/connecttoother_mono.svg";
    import createdashSvg from "$lib/images/home/reports/createyourowndb_color.svg";
    import createdashDarkSvg from "$lib/images/home/reports/createyourowndb_mono.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let carouselItem = [
        {
            title: "Built-in reports ",
            description:
                "Easy access to reports for deeper insights to your data.",
            image: builtinSvg,
            imageDark: builtinDarkSvg,
        },
        {
            title: "Create your own dashboards",
            description:
                "Create personalised dashboards to display the data that matters most to you.",
            image: createdashSvg,
            imageDark: createdashDarkSvg,
        },
        {
            title: "Connect to other data sources",
            description:
                "We give you the option to create reports in the platforms of your choice.",
            image: connectdataSvg,
            imageDark: connectdataDarkSvg,
        },
    ];
    function renderTopSmall(index: number) {
        if (index == 0) {
            return " p-10 md:p-5 lg:p-0 items-center justify-center";
        } else if (index == 1) {
            return " mt-20 px-10 items-end justify-end";
        } else {
            return " items-center justify-center";
        }
    }
    function renderTopLarge(index: number) {
        if (index == 0) {
            return " items-center justify-center";
        } else {
            return " items-center justify-center";
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
                <p class={"text-[50px] font-semibold" + gradienttext}>
                    Reports
                </p>
                <div
                    class="block flex space-x-5 items-center lg:pe-10 hidden md:block"
                >
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold text-[14px]">
                Easily create dashboards and reports on user data
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
                        class="border rounded-[20px] border-bw700 bg-bw900 h-[380px] xl:h-[450px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-8 xl:p-10 pb-0">
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
                        <div
                            class="h-full flex justify-end w-full hidden lg:block"
                        >
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
