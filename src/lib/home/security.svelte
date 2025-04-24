<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index";
    import auditSvg from "$lib/images/home/security/audittrailing.svg";
    import auditDarkSvg from "$lib/images/home/security/audittrailing.svg";
    import datasecSvg from "$lib/images/home/security/datasecurity_color.svg";
    import datasecDarkSvg from "$lib/images/home/security/datasecurity_mono.svg";
    import globeSvg from "$lib/images/home/security/scalability2_color.svg";
    import globeDarkSvg from "$lib/images/home/security/scalability2_mono.svg";
    import leastprivDarkSvg from "$lib/images/home/security/leastpriv_mono.svg";
    import leastprivSvg from "$lib/images/home/security/leastpriv_color.svg";
    import versionhistDarkSvg from "$lib/images/home/security/versionhistory_mono.svg";
    import versionhistSvg from "$lib/images/home/security/versionhistory_mono.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let carouselItem = [
        {
            title: "Data Security",
            description:
                "Access control lists on all data and on the fly encryption for added security on sensitive data.",
            image: datasecSvg,
            imageDark: datasecDarkSvg,
        },
        {
            title: "Scalability",
            description:
                "Every component of the platform is designed to be scalable, and we require developers to build packages that are inherently scalable as well.",
            image: globeSvg,
            imageDark: globeDarkSvg,
        },
        {
            title: "Audit trailing",
            description:
                "The platform generates extensive audit trailing and keeps complete version history of all changes in the database. This allows complying with even the most restrictive regulatory demands.",
            image: auditSvg,
            imageDark: auditDarkSvg,
        },
        {
            title: "Least privileges",
            description:
                "The platform encourages the use of least privileges over service accounts, minimizing the risk of data leaks. By running  within the context of the user who initiated the request, access is tightly controlled and more secure.",
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
    function renderTopSmall(index: number) {
        if (index == 1) {
            return " mt-4 items-start justify-start";
        } else if (index == 2) {
            return " mt-4 items-start justify-start";
        } else if (index == 3) {
            return " mt-4 items-start justify-start";
        } else {
            return " mt-10 items-end justify-end ms-4";
        }
    }
    function renderTopLarge(index: number) {
        if (index == 1) {
            return " items-start justify-start";
        } else {
            return " items-end justify-end ms-4";
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
                <p
                    class={"text-[50px] font-semibold" +
                        gradienttext}
                >
                    Security
                </p>
                <div class="flex space-x-5 items-center lg:pe-10 hidden md:block">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold text-[14px]">
                Enterprise-grade security that meets the most demanding standards
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
                        class="border rounded-[20px] border-bw500/70 h-[380px] xl:h-[450px] overflow-hidden grayscale-0 group"
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
