<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import auditSvg from "$lib/images/home/security/audit.svg";
    import auditDarkSvg from "$lib/images/home/security/auditdark.svg";
    import datasecSvg from "$lib/images/home/security/datasec.svg";
    import datasecDarkSvg from "$lib/images/home/security/datasecdark.svg";
    import globeSvg from "$lib/images/home/security/globe.svg";
    import globeDarkSvg from "$lib/images/home/security/globedark.svg";
    import leastprivDarkSvg from "$lib/images/home/security/leastprivdark.svg";
    import leastprivSvg from "$lib/images/home/security/leastpriv.svg";
    import versionhistDarkSvg from "$lib/images/home/security/versionhistdark.svg";
    import versionhistSvg from "$lib/images/home/security/versionhist.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let carouselItem = [
        {
            title: "Data Security",
            description:
                "Access control lists on all data. Option for on the fly encryption for sensitive data",
            image: datasecSvg,
            imageDark: datasecDarkSvg,
        },
        {
            title: "Scalability",
            description:
                "Every component in the platform can be made scalable and we force developers to create packages that in itself are also scalable",
            image: globeSvg,
            imageDark: globeDarkSvg,
        },
        {
            title: "Audit trailing",
            description:
                "The platform generates extensive audit trailing and keeps complete version history of all changes in the database. This allows complying with even the most restrictive demands",
            image: auditSvg,
            imageDark: auditDarkSvg,
        },
        {
            title: "Least privileges",
            description:
                "The platform incentives using least privileges and avoid using service accounts everywhere. This avoids the potential of leaking data to the wrong users by always running in the context of the user that initiated the request.",
            image: leastprivSvg,
            imageDark: leastprivDarkSvg,
        },
        {
            title: "Version History",
            description:
                "Version history on all data in the database so you can keep track of what users did what changes at what points in time.",
            image: versionhistSvg,
            imageDark: versionhistDarkSvg,
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
                    Security
                </p>
                <div class="flex space-x-5 items-center lg:pe-10">
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
