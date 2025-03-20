<script>
    import greenlogoSvg from "$lib/images/home/testimonials/greenlogo.svg";
    import knlogoSvg from "$lib/images/home/testimonials/Kühne_Nagel_logo.svg";
    import greenrectSvg from "$lib/images/home/testimonials/greenRectangle.svg";
    import synergerplogoSvg from "$lib/images/home/testimonials/synergerp.svg";

    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
    let testimonials = [
        {
            logo: knlogoSvg,
            name: "Felix",
            position: "Global Head of indirect tax",
            testimonial:
                "This is the perfect tool that we need in order to create complex invoicing scenarios. Today it has become the pillar of how we handle invoicing, globally.",
        },
        {
            logo: synergerplogoSvg,
            name: "Brennan Fritz",
            position: "Head of ITS & HCM",
            testimonial:
                "OpenCore is light on resources, extremely fast and incredibly easy to scale when required. ",
        },
        {
            logo: synergerplogoSvg,
            name: "Felix Hassine ",
            position: "Head of ITS & HCM",
            testimonial:
                "OpenCore is light on resources, extremely fast and incredibly easy to scale when required.",
        },
    ];
</script>

<div class="px-32 mb-24 flex justify-center">
    <div class="xl:max-w-[1700px]">
        <div class="mb-16">
            <p class={"text-[64px] font-semibold" + gradienttext}>
                Industry leaders deliver winning <br />solutions with OpenCore
            </p>
            <p class="text-bw300 font-semibold text-xl">
                OpenCore allows different types of developers to work together
                via one common framework
            </p>
        </div>

        <div class="flex justify-between">
            {#each testimonials as item}
                <div
                    class="border-2 border-bw500 rounded-[20px] h-[400px] w-[400px] p-10 flex flex-col justify-between"
                >
                    <div>
                        <div class="flex justify-between mb-12">
                            <img src={greenlogoSvg} alt="greenlogoSvg" />
                            <img src={item.logo} alt="knlogoSvg" />
                        </div>
                        <p class="self-start text-bw100">
                            {item.testimonial}
                        </p>
                    </div>
                    <div class="">
                        <div class="justify-end">
                            <img
                                src={greenrectSvg}
                                alt="greenrectSvg"
                                class="mb-4"
                            />
                            <p class="text-bw50">Felix</p>
                            <p class="text-[#4F8D7D] font-bold">
                                {item.position}
                            </p>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
