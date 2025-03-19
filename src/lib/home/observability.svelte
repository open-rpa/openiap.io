<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import performanceSvg from "$lib/images/home/observability/performance.svg";
    import timelineSvg from "$lib/images/home/observability/timeline.svg";
    import graphSvg from "$lib/images/home/observability/graph.svg";
    import cSvg from "$lib/images/svgs/C_Programming_Language.svg";
    import dotnetSvg from "$lib/images/svgs/dotnet.svg";
    import javaSvg from "$lib/images/svgs/java.svg";
    import jsSvg from "$lib/images/svgs/js.svg";
    import phpSvg from "$lib/images/svgs/php.svg";
    import pythonSvg from "$lib/images/svgs/python.svg";
    import rustSvg from "$lib/images/svgs/rust.svg";
    import browerSvg from "$lib/images/svgs/web.svg";

    import { Globe } from "lucide-svelte";

    const clientlibraries = [
        {
            title: "NodeJS",
            logo: jsSvg,
            buttons: {
                example: "https://github.com/skadefro/nodetest",
                package: {
                    title: "npm",
                    link: "https://www.npmjs.com/package/openiap",
                },
            },
        },

        {
            title: "Php",
            logo: phpSvg,
            buttons: {
                example: "https://github.com/skadefro/phptest",
                package: {
                    title: "packagist",
                    link: "https://packagist.org/packages/openiap/client/",
                },
            },
        },
        {
            title: "Python",
            logo: pythonSvg,
            buttons: {
                example: "https://github.com/skadefro/pythontest",
                package: {
                    title: "pyip",
                    link: "https://pypi.org/project/openiap-edge/",
                },
            },
        },
        {
            title: "Java",
            logo: javaSvg,
            buttons: {
                example: "https://github.com/skadefro/javatest",
                package: {
                    title: "maven",
                    link: "https://central.sonatype.com/artifact/io.openiap/client",
                },
            },
        },
        {
            title: ".net",
            logo: dotnetSvg,
            buttons: {
                example: "https://github.com/skadefro/dotnettest",
                package: {
                    title: "nuget",
                    link: "https://www.nuget.org/packages/openiap/",
                },
            },
        },
        {
            title: "C",
            logo: cSvg,
            buttons: {
                example: "https://github.com/skadefro/ctest",
                package: {
                    title: "conan",
                    link: "https://conan.io/center/recipes/openiap",
                },
            },
        },
        {
            title: "Rust",
            logo: rustSvg,
            buttons: {
                example:
                    "https://github.com/openiap/rustapi/tree/main/crates/cli",
                package: {
                    title: "crates.io",
                    link: "https://crates.io/crates/openiap-client",
                },
            },
        },
        {
            title: "C++",
            logo: cSvg,
            buttons: {
                example: "https://github.com/skadefro/ctest",
                package: {
                    title: "conan",
                    link: "https://conan.io/center/recipes/openiap",
                },
            },
        },
        {
            title: "Powershell",
            logo: browerSvg,
            buttons: {
                example: "https://github.com/openiap/core-web",
                package: {
                    title: "esm",
                    link: "https://www.npmjs.com/package/@openiap/jsapi",
                },
            },
        },
        {
            title: "Bash",
            logo: browerSvg,
            buttons: {
                example: "https://github.com/openiap/core-web",
                package: {
                    title: "esm",
                    link: "https://www.npmjs.com/package/@openiap/jsapi",
                },
            },
        },
    ];
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
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden p-12 grayscale hover:grayscale-0 transition-all"
                    >
                        <div class="mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Ready-to-use Telemetery
                            </p>
                            <p class="text-sm">
                                Get instant access to 300 unique performance
                                metrics with our pre-built template—making
                                valuable insights just a click away.
                            </p>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="grid grid-cols-2 gap-3">
                                {#each clientlibraries as library}
                                    <div
                                        class="border border-bw500 rounded-[10px] text-bw100 flex items-center text-center p-2 w-fit"
                                    >
                                        <div class="me-2">
                                            <img
                                                src={library.logo}
                                                alt="logo"
                                                class="h-4 w-4"
                                            />
                                        </div>
                                        <div>
                                            {library.title}
                                        </div>
                                    </div>
                                {/each}
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
