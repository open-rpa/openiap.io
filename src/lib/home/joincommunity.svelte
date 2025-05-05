<script lang="ts">
    import lineSvg from "$lib/images/home/community/line.svg";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import joincomunitySvg from "$lib/images/home/joincomunity.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";

    let community = [
        {
            number: "+500k",
            text: "User Downloads",
            button: {
                title: "Download Opencore",
                link: "https://github.com/open-rpa/docker",
            },
        },
        {
            number: "+3k",
            text: "Stars on Github",
            button: {
                title: "Give a Star",
                link: "https://github.com/open-rpa/openrpa",
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
            number: "+500",
            text: "Videos on YouTube",
            button: {
                title: "See the Playlist",
                link: "https://www.youtube.com/@AllanZimmermann/videos",
            },
        },
    ];
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-auto xl:px-32 xl:mb-24 flex flex-col xl:flex-row justify-center"
>
    <div
        class="xl:w-[1700px] flex flex-col xl:flex-row justify-between items-center"
    >
        <div class="text-center w-full max-w-[1700px]">
            <p class={"text-[60px] py-6 leading-none mb-6" + gradienttext}>
                Join the community
            </p>
            <div
                class="grid grid-cols-1 md:grid-cols-2 items-center py-6 mx-24"
            >
                {#each community as item, index}
                    <div
                        class="flex justify-center items-center xl:items-start mt-4"
                    >
                        <!-- {#if index != 0}
                        <div class="flex items-start justify-start">
                            <img
                                src={lineSvg}
                                alt="lineSvg"
                                class="me-10 px-4 w-full h-[82px] hidden xl:block"
                            />
                        </div>
                    {/if} -->

                        <div
                            class="flex flex-col items-center justify-center w-fit"
                        >
                            <p
                                class={"text-[40px] font-semibold" +
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
        <img src={joincomunitySvg} alt="joincomunitySvg" />
    </div>
</div>
