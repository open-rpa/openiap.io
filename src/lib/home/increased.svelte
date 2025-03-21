<script lang="ts">
    import coverSvg from "$lib/images/home/cover.svg";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div class="px-32 mb-24 flex justify-center">
    <div class="flex justify-between xl:max-w-[1700px]">
        <div
            class="border-2 border-bw500 rounded-[20px] flex flex-col justify-between"
        >
            <div class="flex">
                <div class="flex flex-col justify-between px-10 pt-10 pb-10">
                    <div>
                        <p
                            class={"text-[44px] leading-none font-semibold mb-6" +
                                gradienttext}
                        >
                            Increased Integration Efficiency by 25x
                        </p>
                        <p class="text-bw300">
                            Kuehne + Nagel increased their integration
                            efficiency <br /> by 25x using OpenCore
                        </p>
                    </div>
                    <div>
                        <HotkeyButton>Learn more</HotkeyButton>
                    </div>
                </div>
                <div>
                    <img src={coverSvg} alt="coverSvg" />
                </div>
            </div>
        </div>
    </div>
</div>
