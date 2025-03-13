<script>
    import logo1 from "$lib/images/testimonials/nagel.png";
    import logo2 from "$lib/images/testimonials/b2bpresales.png";
    import logo3 from "$lib/images/testimonials/alphatods.jpeg";

    $effect(() => {
        window.scrollTo(0, 0);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 },
        );

        const elements = document.querySelectorAll(".scroll-fade-in");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });
</script>

<section class="py-20 px-4 gradient-bg">
    <div class="container mx-auto">
        <div class="scroll-fade-in">
            <h2 class="text-4xl font-bold text-center mt-10 mb-6">
                Case Studies
            </h2>
            <p class="text-gray-400 text-center mb-12">
                Explore some of the ways our customers leverage our platform.
            </p>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div class="space-y-4 scroll-fade-in order-1 md:order-1">
                <h2 class="text-3xl font-bold text-customGreen mb-4">
                    Transforming Tax Compliance
                </h2>

                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white"
                        >The Challenge: {" "}</span
                    >
                    Kuehne + Nagel faced the complex task of complying with tax authority
                    demands regarding invoices while ensuring the accuracy of official
                    data to prevent VAT and tax losses.
                </p>
                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white">The Solution: {" "}</span
                    >
                    By utilizing the OpenIAP platform, Kuehne + Nagel’s business
                    and development teams collaborate to create a scalable template
                    for rapid deployment. This innovative solution enables them to
                    efficiently manage tax compliance across six countries and counting.
                    The flexibility of OpenIAP’s low-code and real-code environment
                    facilitates seamless integration with existing systems, empowering
                    teams to adapt quickly to regulatory changes.
                </p>
                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white">The Impact: {" "}</span>
                    With OpenIAP, Kuehne + Nagel saves a significant amount of time
                    and resources each month by implementing a robust system for
                    data verification that is secure and scalable. The streamlined
                    process significantly boosts productivity and operational efficiency.
                </p>
            </div>
            <div class="scroll-fade-in order-2 md:order-2">
                <div
                    class="p-6 md:py-32 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50 hover:scale-110 duration-300"
                >
                    <img
                        src={logo1}
                        class="w-full h-full text-customGreen"
                        alt="logo1"
                    />
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div class="space-y-4 scroll-fade-in order-1 md:order-2">
                <h2 class="text-3xl font-bold text-customGreen mb-4">
                    Accelerating AI Integration
                </h2>

                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white"
                        >The Challenge: {" "}</span
                    >
                    Leveraging OpenIAP’s OpenCore and Node-RED, B2BPreSales developed
                    a proof of concept (POC) with a custom web front end. This approach
                    enabled rapid development and integration without the need for
                    a pre-existing infrastructure. OpenCore’s robust capabilities
                    allowed the team to quickly connect data sources and implement
                    AI-driven solutions.
                </p>
                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white">The Solution: {" "}</span
                    >
                    Leveraging OpenIAP’s OpenFlow and Node-RED, B2BPreSales developed
                    a proof of concept (POC) with a custom web front end. This approach
                    enabled rapid development and integration without the need for
                    a pre-existing infrastructure. OpenCore’s robust capabilities
                    allowed the team to quickly connect data sources and implement
                    AI-driven solutions.
                </p>
                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white">The Impact: {" "}</span>
                    With the help of OpenIAP, B2BPreSales successfully scaled their
                    CRM integrations from one to three in record time, simplifying
                    the process significantly. This efficiency allowed them to hire
                    Data Scientists without the delay of building infrastructure
                    from scratch, accelerating their AI initiatives and enhancing
                    their data-driven decision-making capabilities.
                </p>
            </div>
            <div class="scroll-fade-in order-2 md:order-1">
                <div
                    class="p-6 md:py-32 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50 hover:scale-110 duration-300"
                >
                    <img
                        src={logo2}
                        alt="b2bpresales logo"
                        class="w-full h-full text-customGreen"
                    />
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div class="space-y-4 scroll-fade-in order-1 md:order-1">
                <h2 class="text-3xl font-bold text-customGreen mb-4">
                    Generative AI Government Projects
                </h2>

                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white"
                        >The Challenge: {" "}</span
                    >
                    Alphatrods faced the complex task of incorporating Generative
                    AI into government projects with 22 different municipalities,
                    while adhering to stringent GDPR regulations. The project required
                    a comprehensive automation solution that includes humans in the
                    loop to maintain oversight and control.
                </p>
                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white">The Solution: {" "}</span
                    >
                    Utilizing OpenCore, Alphatrods achieved a unified, single-pane
                    view of the entire automation process. This solution seamlessly
                    integrated multiple RPA products while keeping humans in the
                    loop. OpenCore’s capabilities ensured that all components work
                    together harmoniously, maintaining compliance and efficiency.
                </p>
                <p class="text-gray-400 text-justify">
                    <span class="font-bold text-white">The Impact: {" "}</span>
                    With OpenIAP, Alphatrods transforms previously fragmented and
                    slow processes in Danish municipalities into streamlined and
                    controlled operations. The integration of AI and human oversight
                    into a single view simplifies management and enhances the project’s
                    efficiency, demonstrating the power of OpenIAP’s comprehensive
                    automation platform.
                </p>
            </div>
            <div class="scroll-fade-in order-2 md:order-2">
                <div
                    class="p-6 md:py-32 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50 hover:scale-110 duration-300"
                >
                    <img
                        src={logo3}
                        alt="b2bpresales logo"
                        class="w-full h-full text-customGreen"
                    />
                </div>
            </div>
        </div>

        <p class="text-xl text-center scroll-fade-in">
            Share Your Path to Success with Us!
        </p>
    </div>
</section>
