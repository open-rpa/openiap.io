<script lang="ts">
    import coverSvg from "$lib/images/home/cover.svg";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import modularcodeSvg from "$lib/images/home/multilang/modularcode.svg";
    import modularcodeDarkSvg from "$lib/images/home/multilang/modularcodedark.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div class="px-32 mb-24 flex justify-center">
    <div class="flex justify-between xl:max-w-[1700px]">
        <div
            class="border-2 border-bw500 rounded-[20px] flex flex-col justify-between"
        >
            <div
                class="border-2 rounded-[20px] border-gradient-to-r from-bw500 to-[bw500_70%] h-[514px] overflow-hidden p-12 grayscale-0 group"
            >
                <div class="mb-10 text-center">
                    <p class="text-[14px] text-bw200 mb-5">Book a meeting</p>
                    <p class="text-[48px] leading-none text-bw50  mb-2 text-bw50">
                        Speak with our dedicated sales <br /> team
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
                        <img src={modularcodeSvg} alt="modularcodeSvg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
