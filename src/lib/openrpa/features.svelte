<script lang="ts">
    import {
        Bot,
        Code,
        Monitor,
        PictureInPicture,
        Shuffle,
    } from "lucide-svelte";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";

    let community = [
        {
            title: "Robust Multi-Platform Automation",
            text: "Automate Windows, SAP, Java, browsers, mainframes, images, and Microsoft Office with native integration.",
            icon: "1",
            colspan: "col-span-1",
        },
        {
            title: "Multi-Language Scripting Support",
            text: "Embed inline code in C#, VB, Python, PowerShell, or AutoHotKey—directly within workflows.",
            icon: "2",
            colspan: "col-span-1",
        },
        {
            title: "Reactive Robot Triggers",
            text: "Enable dynamic responses to events like file changes, keyboard input, Outlook OOO and more.",
            icon: "3",
            colspan: "col-span-1",
        },
        {
            title: "Assisted & Unattended Robots",
            text: "Build interactive forms with Forge Forms or run self-healing, high-density robots via RDP - managed by OpenCore.",
            icon: "4",
            colspan: "col-span-1",
        },
        {
            title: "Picture-in-Picture Automation",
            text: "Run robots in the corner of your screen via RDP - automate without interfering with your main desktop. ",
            icon: "5",
            colspan: "col-span-2",
        },
    ];
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-auto xl:px-32 xl:mb-24 xl:flex xl:justify-center"
>
    <div class="p-20 px-40 w-full max-w-[1700px]">
        <p
            class={"text-[50px] py-6 leading-none font-semibold mb-10" +
                gradienttext}
        >
            Features
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            {#each community as item, index}
                <div
                    class={"p-6 flex justify-center items-center xl:justify-start xl:items-start border border-bw500/70 rounded-[15px] " +
                        item.colspan}
                >
                    <div class="flex flex-col justify-center w-fit">
                        <div
                            class="border border-bw500/70 rounded-[10px] p-2 mb-10 w-fit text-bw100 bg-[#18181B]"
                        >
                            {#if item.icon == "1"}
                                <Monitor class="h-4 w-4" />
                            {:else if item.icon == "2"}
                                <Code class="h-4 w-4" />
                            {:else if item.icon == "4"}
                                <Bot class="h-4 w-4" />
                            {:else if item.icon == "3"}
                                <Shuffle class="h-4 w-4" />
                            {:else if item.icon == "5"}
                                <PictureInPicture class="h-4 w-4" />
                            {/if}
                        </div>
                        <p class={"text-[20px] font-bold text-bw50"}>
                            {item.title}
                        </p>
                        <p class="mt-2 mb-5 text-[14px]">{item.text}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
