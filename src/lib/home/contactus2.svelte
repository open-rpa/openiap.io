<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import joincomunitySvg from "$lib/images/home/contactus2.svg";
    import { MoveRight } from "lucide-svelte";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-auto xl:px-32 xl:mb-24 xl:flex flex-col xl:flex-row justify-center items-center"
>
    <div class="xl:w-[1700px] flex flex-col xl:flex-row justify-center items-center gap-6">
        <img src={joincomunitySvg} alt="joincomunitySvg" class="w-fit" />

        <div
            class="text-center w-full max-w-[1700px] flex flex-col items-center justify-center"
        >
            <p
                class={"text-[60px] py-6 leading-none mb-6 font-light " +
                    gradienttext}
            >
                Speak with our <br/> dedicated sales team
            </p>
            <HotkeyButton
                aria-label="Contact Us"
                onclick={() => goto(base + "/contact")}
                >Book a meeting <MoveRight /></HotkeyButton
            >
        </div>
    </div>
</div>
