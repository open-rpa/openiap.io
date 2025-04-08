<script>
    $effect(() => {
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

<svelte:head>
    <title>Telemetry | OpenIAP</title>
</svelte:head>

<div class="px-4 pt-20 gradient-bg md:h-screen scroll-fade-in">
    <div class="container mx-auto text-start">
        <div class="text-customGreen mb-4 text-3xl">TELEMETRY</div>
        <div class="text-gray-400 mb-10">
            OpenIAP applications collect telemetry data about general usage.
            Participation in this program is optional, and you may opt-out if
            you would not like to share any information.
        </div>
        <div class="text-customGreen mb-4 text-xl">
            WHY IS TELEMETRY COLLECTED?
        </div>
        <div class="text-gray-400 mb-10">
            In order to document usage patterns of the different applications to
            help decide what features to focus on and how they are used, usage
            information from OpenIAP applications gets collected and sent to
            otel.openiap.io. Each instance generates a unique non-reversable
            ofid based on the domain name, to allocate each client to the
            instance it belongs.
        </div>
        <div class="text-customGreen mb-4 text-xl">
            WHY IS TELEMETRY COLLECTED?
        </div>
        <div class="text-gray-400 mb-10">
            For OpenRPA we collect ofid, memory and CPU usage, hostname,
            username, number of workflow runs, number of active running
            workflows, and timing information for each activity type.
        </div>
        <div class="text-gray-400 mb-10">
            For OpenCore we collect ofid, memory and CPU usage, database
            performance, online clients and client types, queue usage and number
            and types of packages and timing of each package.
        </div>
        <div class="text-gray-400 mb-10">
            For OpenIAP Agent instances we collect memory and CPU usage, and
            timing information for each node type.
        </div>
        <div class="text-customGreen mb-4 text-xl">HOW DO I OPT-OUT?</div>
        <div class="text-gray-400 mb-10">
            For OpenRPA in settings.json set enable_analytics to false, for all
            other create an environment variable named enable_analytics set to
            value false.
        </div>
    </div>
</div>
