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
    <title>OpenCore | A scalable and secure automation platform</title>
    <!-- <meta
        name="description"
        content="OpenIAP is a platform that helps you to manage your business operations."
    /> -->
</svelte:head>

<!-- <div
    class="bg-pink-800 sm:bg-red-800 md:bg-blue-800 lg:bg-green-800 xl:bg-yellow-800"
> -->
<div class="scroll-fade-in">
    <Hero />
    <TrustedBy />
    <MultiLanguage />
    <Observability />
    <Workitemqueue />
    <Reports />
    <Security />
    <Increased />
    <Testimonials />
    <Joincommunity />
    <Contactus2 />
</div>
