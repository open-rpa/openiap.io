<script lang="ts">
    import lineSvg from "$lib/images/home/community/line.svg";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";

    let community = [
        {
            number: "+500k",
            text: "User Downloads",
            button: {
                title: "Download Opencore",
                link: "https://github.com/open-rpa/openrpa/releases/latest/download/OpenRPA.msi",
            },
        },
        {
            number: "2.73",
            text: "Stars on Github",
            button: {
                title: "Give a Star",
                link: "https://github.com/open-rpa/",
            },
        },
        {
            number: "+5000",
            text: "Forum Posts",
            button: {
                title: "Go to Forum",
                link: "https://discourse.openiap.io/",
            },
        },
        {
            number: "+500k",
            text: "Videos on YouTube",
            button: {
                title: "See the Playlist",
                link: "https://www.youtube.com/@AllanZimmermann/videos",
            },
        },
    ];
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:px-32 xl:mb-24 xl:flex xl:justify-center"
>
    <div class="xl:max-w-[1700px]">
        <div class="text-center border-2 border-bw500/70 rounded-[20px] p-10">
            <p
                class={"text-[30px] lg:text-[64px] py-6 leading-none font-semibold mb-16" +
                    gradienttext}
            >
                Join the community
            </p>
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-20 xl:flex items-center justify-center xl:flex-row xl:justify-between"
            >
                {#each community as item, index}
                    <div
                        class="flex justify-center items-center xl:justify-start xl:items-start"
                    >
                        {#if index != 0}
                            <div class="flex items-start justify-start">
                                <img
                                    src={lineSvg}
                                    alt="lineSvg"
                                    class="me-10 px-4 mt-4 w-full h-[82px] hidden xl:block"
                                />
                            </div>
                        {/if}

                        <div
                            class="flex flex-col items-center justify-center w-fit"
                        >
                            <p
                                class={"text-[30px] lg:text-[64px] font-semibold" +
                                    gradienttext}
                            >
                                {item.number}
                            </p>
                            <p class="mt-2 mb-5">{item.text}</p>
                            <HotkeyButton
                                onclick={() => {
                                    window.open(item.button.link, "_blank");
                                }}>{item.button.title}</HotkeyButton
                            >
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
