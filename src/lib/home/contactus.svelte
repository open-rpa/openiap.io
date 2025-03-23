<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import coverSvg from "$lib/images/home/contact_cover.svg";
    import { ArrowUpRight } from "lucide-svelte";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-32 xl:mb-24 xl:px-6 xl:px-0 xl:max-w-[1700px]"
>
    <div class="border-2 rounded-[20px] border-bw500/70">
        <div class="container">
            <img
                src={coverSvg}
                alt="coverSvg"
                class="h-full w-full object-cover top-0 left-0 absolute"
            />
            <HotkeyButton
                aria-label="Contact Us"
                variant="contact"
                size="contact"
                class="absolute top-5 right-5"
                onclick={() => goto(base + "/contact/meet")}
                ><ArrowUpRight /></HotkeyButton
            >
            <div class="text-overlay">
                <p class="small-text">Book a meeting</p>
                <p class={"text-[30px] lg:text-[40px]" + gradienttext}>
                    Speak with our dedicated sales team
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        height: 500px;
        border: 2px solid transparent;
        border-radius: 20px;
        overflow: hidden;
    }
    .text-overlay {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: #ffffff; /* Adjust as needed */
    }

    .small-text {
        font-size: 14px;
        color: #cfcfcf;
        margin-bottom: 5px;
    }

    .large-text {
        font-size: 48px;
        line-height: 1;
        color: #ffffff;
    }
</style>
