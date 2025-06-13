<script>
    import {
        Hero,
        Joincommunity,
        MultiLanguage,
        Observability,
        Reports,
        Security,
        Testimonials,
        TrustedBy,
        Workitemqueue,
        Increased,
        Contactus,
        Contactus2,
    } from "$lib/home";

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
    <title>OpenCore | Removing DevOps Complexity</title>
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
        <MultiLanguage />
    </div>
    <div class="scroll-fade-in">
        <Observability />
    </div>
    <div class="scroll-fade-in">
        <Workitemqueue />
    </div>
    <div class="scroll-fade-in">
        <Reports />
    </div>
    <div class="scroll-fade-in">
        <Security />
    </div>
    <div class="scroll-fade-in">
        <Increased />
    </div>
    <div class="scroll-fade-in">
        <Testimonials />
    </div>
    <div class="scroll-fade-in">
        <Joincommunity />
    </div>
    <div class="scroll-fade-in">
        <Contactus2 />
    </div>
</div>
