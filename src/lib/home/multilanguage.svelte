<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import cSvg from "$lib/images/svgs/C_Programming_Language.svg";
    import dotnetSvg from "$lib/images/svgs/dotnet.svg";
    import javaSvg from "$lib/images/svgs/java.svg";
    import jsSvg from "$lib/images/svgs/js.svg";
    import phpSvg from "$lib/images/svgs/php.svg";
    import pythonSvg from "$lib/images/svgs/python.svg";
    import rustSvg from "$lib/images/svgs/rust.svg";
    import browerSvg from "$lib/images/svgs/web.svg";
    import { Code, Copy, Globe, IdCard } from "lucide-svelte";
    import { toast } from "svelte-sonner";
    import * as Tabs from "$lib/components/ui/tabs/index";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";

    let languages = [
        {
            name: "Rust",
            code: `client = Client ()
client.connect()
query_result = client.query(collectionname='entities', query={})
print('result', query_result)
client.free()
print('result', query_result)
client.free()`,
        },
        {
            name: "NodeJS",
            code: `node`,
        },
        {
            name: "Python",
            code: `python`,
        },
        {
            name: "Dotnet",
            code: `dotnet`,
        },
    ];
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
                    Multi-language support
                </p>
                <div class="flex space-x-5 items-center pe-10">
                    <!-- <HotkeyButton variant="carousel" size="carousel"
                        ><ChevronLeft /></HotkeyButton
                    >
                    <HotkeyButton variant="carousel" size="carousel"
                        ><ChevronRight /></HotkeyButton
                    > -->
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold text-xl">
                OpenCore allows different types of developers to work together
                via one common framework
            </p>
        </div>

        <Carousel.Content class="fade-mask-rights">
            <Carousel.Item class="basis-3/5">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[514px] overflow-hidden grayscale hover:grayscale-0 transition-all"
                    >
                        <div class="p-12">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Choose your favourite coding language
                            </p>
                            <p class="text-sm">
                                Leverage OpenRPA and Node-RED to build
                                efficient, low-code automation solutions for RPA
                                and API integrations—streamlining workflows with
                                minimal coding effort.
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
                            <div class="m-3 pt-3 dark:bg-[#1D1F22] h-full">
                                <Tabs.Root value="1" class="w-[400px] ms-5">
                                    <div></div>
                                    <Tabs.List
                                        class="h-fit grid grid-cols-1 md:block w-full md:w-fit bg-bw200 dark:bg-darkagenttab rounded-[5px] p-1 mb-2 lg:mb-0 text-bw50 font-normal"
                                    >
                                        {#each languages as language, index}
                                            <Tabs.Trigger value={`${index + 1}`}
                                                >{language.name}</Tabs.Trigger
                                            >
                                        {/each}
                                    </Tabs.List>
                                    <div class="mt-5">
                                        {#each languages as language, index}
                                            <Tabs.Content
                                                value={`${index + 1}`}
                                            >
                                                <div
                                                    class="text-bw300 flex justify-between"
                                                >
                                                    <div>
                                                        <pre>
<code>{language.code}</code>
                                            </pre>
                                                    </div>
                                                    <HotkeyButton
                                                        onclick={() => {
                                                            navigator.clipboard.writeText(
                                                                language.code,
                                                            );
                                                            toast.success(
                                                                "Code copied to clipboard",
                                                            );
                                                        }}
                                                        aria-label="Copy code"
                                                        variant="icon"
                                                        size="icon"
                                                    >
                                                        <Copy />
                                                    </HotkeyButton>
                                                </div>
                                            </Tabs.Content>
                                        {/each}
                                    </div>
                                </Tabs.Root>
                            </div>
                        </div>
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
                                Modular Code, Maximum Flexibility
                            </p>
                            <p class="text-sm">
                                Break code into small, independent modules for
                                easier maintenance, better testability, and
                                seamless scalability.
                            </p>
                        </div>

                        <div
                            class="border border-bw500 rounded-[10px] text-bw100"
                        >
                            <div
                                class="flex items-center justify-between p-2.5 border-b border-bw500"
                            >
                                <div class="flex items-center">
                                    <IdCard class="h-4 w-4" />
                                    <p class="text-sm">Name</p>
                                </div>
                                <div class="flex items-center">
                                    <Code class="h-4 w-4" />
                                    <p class="justify-center">Language</p>
                                </div>
                            </div>
                            <div
                                class="flex items-center justify-between p-2.5 border-b border-bw500 dark:bg-[#1D1F22]"
                            >
                                <p>process_edi</p>
                                <p class="text-bw300 me-4">Python</p>
                            </div>
                            <div
                                class="flex items-center justify-between p-2.5 border-b border-bw500 dark:bg-[#1D1F22]"
                            >
                                <p>run_inventory</p>
                                <p class="text-bw300 me-3">NodeJS</p>
                            </div>
                            <div
                                class="flex items-center justify-between p-2.5 border-b border-bw500 dark:bg-[#1D1F22]"
                            >
                                <p>move_orders</p>
                                <p class="text-bw300 me-6">Java</p>
                            </div>
                            <div
                                class="flex items-center justify-between p-2.5 dark:bg-[#1D1F22] rounded-b-[10px]"
                            >
                                <p>generate_invoices</p>
                                <p class="text-bw300 me-6">Rust</p>
                            </div>
                        </div>
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
                                Programing Languages
                            </p>
                            <p class="text-sm">
                                Break code into small, independent modules for
                                easier maintenance, better testability, and
                                seamless scalability.
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
