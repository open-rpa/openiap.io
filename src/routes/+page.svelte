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

<!-- <div
    class="bg-pink-800 sm:bg-red-800 md:bg-blue-800 lg:bg-green-800 xl:bg-yellow-800"
> -->
<div>
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
    <Contactus />
</div>
