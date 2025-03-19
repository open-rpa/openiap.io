<script>
    import {
        Hero,
        TrustedBy,
        MultiLanguage,
        Observability,
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
    <!-- <Observability />
    <Workitemqueue /> -->
</div>
