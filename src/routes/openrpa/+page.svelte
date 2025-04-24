<script>
    import { Hero, Joincommunity, TrustedBy, Contactus } from "$lib/openrpa";
    import Features from "$lib/openrpa/features.svelte";
    import Start from "$lib/openrpa/start.svelte";
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
    <Hero />
    <TrustedBy />
    <Features />
    <Joincommunity />
    <Start />
    <!-- <Contactus /> -->
</div>
