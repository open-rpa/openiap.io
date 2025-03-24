<script lang="ts">
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
                "The platform generates extensive audit trailing and keeps complete version history of all changes in the database. This allows complying with even the most restrictive demands.",
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
    function renderTopSmall(index: number) {
        let newClass = "";
        if (index == 0) {
            newClass = "right-0  md:top-5";
        } else if (index == 1) {
            newClass = "left-0 md:top-0";
        } else if (index == 2) {
            newClass = "left-0 right-0 top-20 md:top-0";
        } else if (index == 3) {
            newClass = "left-0 right-0 top-24 md:top-0";
        } else if (index == 4) {
            newClass = "right-0 top-10 md:top-0";
        }
        return newClass + "  ";
    }
    function renderTopLarge(index: number) {
        let newClass = "";
        if (index == 0) {
            newClass = "right-0  lg:top-10 xl:top-0";
        } else if (index == 1) {
            newClass = "left-0 lg:top-16 xl:top-0 bottom-0";
        } else if (index == 2) {
            newClass = "left-0 right-0 lg:top-24 xl:top-0 xl:bottom-0";
        } else if (index == 3) {
            newClass = "left-0 right-0 lg:top-20 xl:top-10";
        } else if (index == 4) {
            newClass = "right-0 top-10 lg:top-12 xl:top-10";
        }
        return newClass + "  ";
    }
</script>

<div class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:px-12 xl:mb-24 xl:flex xl:justify-center">
    <Carousel.Root
        opts={{
            align: "start",
        }}
        class="lg:max-w-[1700px]"
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
                        class="border-2 rounded-[20px] border-bw500/70 h-[380px] xl:h-[500px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-8 xl:p-12 pb-0 md:mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                {item.title}
                            </p>
                            <p class="text-sm">
                                {item.description}
                            </p>
                        </div>
                        <div
                            class="lg:ms-12 h-full flex justify-end w-full lg:hidden"
                        >
                            <div
                                class={"w-full h-[400px] overflow-hidden flex items-center justify-center group-hover:hidden inline-flex " +
                                    renderTopSmall(index)}
                                id={`wi-${index}`}
                            >
                                <img
                                    src={item.imageDark}
                                    alt="imagedark"
                                    class="relative -mt-[200px]"
                                />
                            </div>
                            <div
                                class={"w-full h-[400px] overflow-hidden flex items-center justify-center group-hover:group-hover:inline-flex hidden " +
                                    renderTopSmall(index)}
                                id={`wi-${index + 1000}`}
                            >
                                <img
                                    src={item.image}
                                    alt="imagelight"
                                    class="relative -mt-[200px]"
                                />
                            </div>
                        </div>
                        <div
                            class="lg:ms-12 h-full flex justify-end w-full hidden lg:block"
                        >
                            <div
                                class={"absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-100 group-hover:opacity-0 " +
                                    renderTopLarge(index)}
                            >
                                <img src={item.imageDark} alt="imagedark" />
                            </div>
                            <div
                                class={"absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100 " +
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
            class="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-10
   bg-gradient-to-l from-[#0D0D11] to-transparent z-10"
        ></div>
    </Carousel.Root>
</div>
