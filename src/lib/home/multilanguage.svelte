<script lang="ts">
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
    let carouselItem = [
        {
            title: "Modular Code, Maximum Flexibility",
            description:
                "Break code into small, independent modules for easier maintenance, better testability, and seamless scalability.",
            image: modularcodeSvg,
            imageDark: modularcodeDarkSvg,
        },
        {
            title: "Programing Languages",
            description:
                " A unified SDK delivering the same seamless experience across 10 different programming languages.",
            image: proglangSvg,
            imageDark: proglangDarkSvg,
        },
        {
            title: "Low-Code, High Impact",
            description:
                " Empower non-developers to effortlessly build functional solutions with their low-code tool of choice. Rapidly create prototypes with ease — no coding expertise required.",
            image: lowcodeSvg,
            imageDark: lowcodedarkSvg,
        },
    ];
    function renderTop(index: number) {
        let newClass = "";
        if (index == 0) {
            newClass = "top-16 md:top-5 lg:top-0 lg:bottom-0 xl:top-12";
        } else if (index == 1) {
            newClass = "top-10 md:top-5 lg:top-0 lg:bottom-0 xl:top-14";
        } else if (index == 2) {
            newClass = "top-16 md:top-14 lg:top-10 xl:top-20";
        }
        return newClass + " left-0 right-0  ";
    }
</script>

<div class="mx-6 md:mx-10 lg:mx-20 xl:mx-32 xl:mb-24 xl:flex xl:justify-center">
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
                    Multi-language support
                </p>
                <div class="block flex space-x-5 items-center lg:pe-10">
                    <Carousel.Previous />
                    <Carousel.Next />
                </div>
            </div>
            <p class="text-bw300 font-semibold lg:text-xl">
                OpenCore allows different types of developers to work together
                via one common framework
            </p>
        </div>
        <Carousel.Content class="fade-mask-rights">
            <Carousel.Item class="lg:basis-3/5">
                <div class="p-1">
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[500px] xl:h-[514px] overflow-hidden grayscale-0 group"
                    >
                        <div class="p-8 xl:p-12 pb-0 mb-2 md:mb-4">
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
                            class="ms-8 md:ms-10 lg:ms-2 xl:ms-12 h-[387px] border-2 rounded-[20px] border-bw500/70 w-full"
                        >
                            <div
                                class="py-1 px-2.5 border-b-2 border-bw500/70 w-full"
                            >
                                <Globe class="h-4 w-4" />
                            </div>
                            <div class="m-3 pt-3 dark:bg-[#1D1F22] h-full">
                                <Tabs.Root value="1" class="ms-5">
                                    <div></div>
                                    <Tabs.List
                                        class="h-fit  md:block w-full w-fit bg-bw200 dark:bg-darkagenttab rounded-[5px] p-1 mb-2 lg:mb-0 text-bw50 font-normal"
                                    >
                                        {#each languages as language, index}
                                            <Tabs.Trigger value={`${index + 1}`}
                                                >{language.name}</Tabs.Trigger
                                            >
                                        {/each}
                                    </Tabs.List>
                                    <div class="mt-5 w-fit">
                                        {#each languages as language, index}
                                            <Tabs.Content
                                                value={`${index + 1}`}
                                                class=""
                                            >
                                                <div
                                                    class="text-bw300 flex justify-between"
                                                >
                                                    <pre class="overflow-hidden w-64 lf:w-full">
<code>{language.code}</code>
                                            </pre>
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

            {#each carouselItem as item, index}
                <Carousel.Item class={"md:basis-1/2 lg:basis-1/3"}>
                    <div
                        class="border-2 rounded-[20px] border-bw500/70 h-[500px] xl:h-[514px] overflow-hidden grayscale-0 group"
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
                                class={"absolute flex items-center justify-center group-hover:hidden inline-flex " +
                                    renderTop(index)}
                            >
                                <img src={item.imageDark} alt="imagedark" />
                            </div>
                            <div
                                class={"absolute flex items-center justify-center group-hover:group-hover:inline-flex hidden " +
                                    renderTop(index)}
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
