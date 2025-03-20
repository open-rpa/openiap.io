<script>
    import * as Carousel from "$lib/components/ui/carousel/index";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import * as Tabs from "$lib/components/ui/tabs/index";
    import lowcodeSvg from "$lib/images/home/multilang/lowcode.svg";
    import lowcodedarkSvg from "$lib/images/home/multilang/lowcodedark.svg";
    import modularcodeSvg from "$lib/images/home/multilang/modularcode.svg";
    import modularcodeDarkSvg from "$lib/images/home/multilang/modularcodedark.svg";
    import proglangSvg from "$lib/images/home/multilang/proglang.svg";
    import proglangDarkSvg from "$lib/images/home/multilang/proglangdark.svg";
    import { Copy, Globe } from "lucide-svelte";
    import { toast } from "svelte-sonner";

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
                    Multi-language support
                </p>
                <div class="flex space-x-5 items-center pe-10">
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
                        class="border-2 rounded-[20px] border-bw500/70 h-[514px] overflow-hidden grayscale-0 group"
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
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden p-12 grayscale-0 group"
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

                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img
                                    src={modularcodeDarkSvg}
                                    alt="modularcodeDarkSvg"
                                />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:inline-flex hidden"
                            >
                                <img
                                    src={modularcodeSvg}
                                    alt="modularcodeSvg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden p-12 grayscale-0 group"
                    >
                        <div class="mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Programing Languages
                            </p>
                            <p class="text-sm">
                                A unified SDK delivering the same seamless
                                experience across 10 different programming
                                languages.
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={proglangDarkSvg} alt="proglangDarkSvg" />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:inline-flex hidden"
                            >
                                <img src={proglangSvg} alt="proglangSvg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden group relative"
                    >
                        <div class="p-12 mb-10">
                            <p class="text-xl font-medium mb-2 text-bw50">
                                Low-Code, High Impact
                            </p>
                            <p class="text-sm">
                                Empower non-developers to effortlessly build
                                functional solutions with their low-code tool of
                                choice. Rapidly create prototypes with ease — no
                                coding expertise required.
                            </p>
                        </div>
                        <div class="ms-12 h-full flex justify-end w-full">
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:hidden block"
                            >
                                <img src={lowcodedarkSvg} alt="lowcodedarkSvg" />
                            </div>
                            <div
                                class="absolute top-10 left-0 right-0 flex items-center justify-center group-hover:inline-flex hidden"
                            >
                                <img src={lowcodeSvg} alt="lowcodeSvg" />
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
