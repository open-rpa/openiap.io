<script lang="ts">
    import coverSvg from "$lib/images/home/contact_cover.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<div class="mx-32 mb-24 px-6 lg:px-0 lg:max-w-[1700px]">
    <div class="border-2 rounded-[20px] border-bw500/70">
        <div class="container">
            <img
                src={coverSvg}
                alt="Background image"
                class="background-image"
            />
            <div class="text-overlay">
                <p class="small-text">Book a meeting</p>
                <p class={"large-text" + gradienttext}>
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

    .background-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
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
