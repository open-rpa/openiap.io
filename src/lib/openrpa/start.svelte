<script lang="ts">
    import Hotkeybutton from "$lib/components/ui/hotkeybutton/hotkeybutton.svelte";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div
    class="mx-6 mb-10 md:mx-10 lg:mx-20 xl:mx-auto xl:px-32 xl:mb-24 xl:flex xl:justify-center"
>
    <div
        class="flex flex-col w-fit text-center rounded-[20px] p-10 w-full max-w-[1700px]"
    >
        <p
            class={"text-[50px] leading-none mb-5 font-semibold " +
                gradienttext}
        >
            Start automating now
        </p>
        <p
            class={"text-[14px] leading-none font-semibold mb-10" +
                gradienttext}
        >
            Download OpenRPA for free
        </p>
        <div>
            <Hotkeybutton>Download OpenRPA</Hotkeybutton>
        </div>
    </div>
</div>
