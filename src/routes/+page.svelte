<script>
    import {
        Hero,
        TrustedBy,
        MultiLanguage,
        Observability,
        Workitemqueue,
    } from "$lib/home";
    import Reports from "$lib/home/reports.svelte";
    import Security from "$lib/home/security.svelte";

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
</div>
