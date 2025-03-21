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

<div class="px-32 mb-24 flex justify-center">
    <div class="flex justify-between xl:max-w-[1700px]">
        <div
            class="border-2 border-bw500 rounded-[20px]"
        >
        <div class="flex flex-col justify-between py-14 px-52">

            <p class={"text-[64px] font-semibold mb-16" + gradienttext}>
                Join the community
            </p>
            <div class="flex">
                {#each community as item, index}
                    <div class="flex justify-start items-start">
                        {#if index != 0}
                            <img src={lineSvg} alt="lineSvg" class="mt-2 mx-10 w-full h-[82px]" />
                        {/if}
                        <div
                            class="flex flex-col items-center justify-center w-fit"
                        >
                            <p
                                class={"text-[60px] font-semibold" +
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
</div>
