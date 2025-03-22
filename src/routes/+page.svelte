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
    } from "$lib/home";

    $effect(() => {
        window.scrollTo(0, 0);
    });
</script>

<!-- <div class="bg-pink-500 sm:bg-red-500 md:bg-blue-500 lg:bg-green-500 xl:bg-yellow-500">  -->
<div>
    <Hero />
    <!-- <TrustedBy />
    <MultiLanguage />
    <Observability />
    <Workitemqueue />
    <Reports /> -->
    <Security />
    <!-- <Increased />
    <Testimonials />
    <Joincommunity />
    <Contactus /> -->
</div>
