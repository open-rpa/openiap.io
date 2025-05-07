<script>
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import hero1 from "$lib/images/home/hero.svg";
    import hero from "$lib/images/home/horizonpng.png";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div class="xl:pb-16">
    <div
        class="xl:w-full xl:object-cover mt-32 xl:mt-36 p-4 text-center"
    >
        <h1
            class={"text-[30px] lg:text-hero font-bold mb-6 animate-fade-in tracking-widest" +
                gradienttext}
        >
            Open Source RPA built<br />
            for scale
        </h1>
        <p
            class="xl:text-[16px] text-bw500 mb-[52px] mx-auto animate-fade-in tracking-widest"
        >
            Automate workflows with OpenRPA, the powerful open-source robotic
            process automation <br />tool
        </p>

        <div
            class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
        >
            <HotkeyButton
                class="tracking-wider"
                aria-label="Download OpenRPA for Free"
                onclick={() =>
                    window.open(
                        "https://github.com/open-rpa/openrpa/releases/latest/download/OpenRPA.msi",
                        "_blank",
                        "noopener,noreferrer",
                    )}
            >
                Download OpenRPA for Free
            </HotkeyButton>
            <HotkeyButton
                aria-label="Get Started"
                class="tracking-wider"
                onclick={() =>
                    window.open(
                        "https://docs.openiap.io/docs/openrpa/",
                        "_blank",
                        "noopener,noreferrer",
                    )}
            >
                Get Started
            </HotkeyButton>
        </div>
    </div>
    <!-- <div class="flex items-end justify-center flex-grow"> -->
    <div>
        <!-- <img src={hero} alt="hero" class="xl:w-full xl:h-auto" /> -->
        <script
            type="module"
            src="https://unpkg.com/@splinetool/viewer@1.9.90/build/spline-viewer.js"
        ></script>
        <spline-viewer
            url="https://prod.spline.design/NbOkKVgYnnaE7KuQ/scene.splinecode"
        ></spline-viewer>
    </div>
</div>
