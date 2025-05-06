<script>
    import { Hero, Joincommunity, TrustedBy, Contactus } from "$lib/openrpa";
    import Features from "$lib/openrpa/features.svelte";
    import Start from "$lib/openrpa/start.svelte";

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
    <title>OpenRPA | A scalable and secure automation platform</title>
    <!-- <meta
        name="description"
        content="OpenIAP is a platform that helps you to manage your business operations."
    /> -->
</svelte:head>

<!-- <div
    class="bg-pink-800 sm:bg-red-800 md:bg-blue-800 lg:bg-green-800 xl:bg-yellow-800"
> -->
<div>
    <div class="scroll-fade-in">
        <Hero />
    </div>
    <div class="scroll-fade-in">
        <TrustedBy />
    </div>
    <div class="scroll-fade-in">
        <Features />
    </div>
    <div class="scroll-fade-in">
        <Joincommunity />
    </div>
    <div class="scroll-fade-in">
        <Start />
    </div>
    <!-- <Contactus /> -->
</div>
