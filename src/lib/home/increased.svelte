<script lang="ts">
    import coverSvg from "$lib/images/home/increased_cover.svg";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-auto xl:px-32 xl:mb-24 xl:flex xl:justify-center"
>
    <div class="xl:max-w-[1700px]">
        <div
            class="border border-bw700 bg-bw900 rounded-[20px] flex flex-col justify-between overflow-hidden"
        >
            <div class="flex flex-col lg:flex-row justify-between">
                <div class="flex flex-col xl:justify-between px-10 xl:py-10 space-y-10 xl:space-y-0">
                    <div class="pt-10 xl:pt-0">
                        <p
                            class={"text-[50px] leading-none font-semibold mb-4" +
                                gradienttext}
                        >
                            Increased Integration Efficiency by 25x
                        </p>
                        <p class="text-bw300 text-[14px]">
                            Kuehne + Nagel increased their integration
                            efficiency <br /> by 25x using OpenCore
                        </p>
                    </div>
                    <div class="pb-4 lg:pb-0">
                        <HotkeyButton
                            aria-label="Learn more"
                            onclick={() => {
                                goto(base + "/usecases");
                            }}>Learn more</HotkeyButton
                        >
                    </div>
                </div>
                <div>
                    <img src={coverSvg} alt="coverSvg" />
                </div>
            </div>
        </div>
    </div>
</div>
