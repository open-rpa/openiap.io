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
    } from "$lib/home";

    $effect(() => {
        window.scrollTo(0, 0);
    });
</script>

<div>
    <Hero />
    <TrustedBy />
    <MultiLanguage />
    <Observability />
    <Workitemqueue />
    <Reports />
    <Security />
    <Testimonials />
    <Joincommunity />
</div>
