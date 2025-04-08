<script>
    import {
        Hero,
        Joincommunity,
        // MultiLanguage,
        // Observability,
        // Reports,
        // Security,
        // Testimonials,
        TrustedBy,
        // Workitemqueue,
        // Increased,
        Contactus,
    } from "$lib/openrpa";
</script>

<svelte:head>
    <title>OpenRPA | A scalable and secure
        automation platform</title>
    <!-- <meta
        name="description"
        content="OpenIAP is a platform that helps you to manage your business operations."
    /> -->
</svelte:head>

<!-- <div
    class="bg-pink-800 sm:bg-red-800 md:bg-blue-800 lg:bg-green-800 xl:bg-yellow-800"
> -->
<div>
    <Hero />
    <TrustedBy />
    <!-- <MultiLanguage />
    <Observability />
    <Workitemqueue />
    <Reports />
    <Security />
    <Increased />
    <Testimonials /> -->
    <Joincommunity />
    <Contactus />
</div>
