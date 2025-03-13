<script>
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";

    $effect(() => {
        window.scrollTo(0, 0);
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

<div
    class="px-4 gradient-bg h-screen flex flex-col items-center justify-center"
>
    <div
        class="container mx-auto text-start flex flex-col items-center scroll-fade-in"
    >
        <div class="text-customGreen mb-4 text-3xl text-center">Partners</div>
        <div class="text-gray-400 mb-10 max-w-3xl text-center">
            Our partners offer support in English, Danish, German, Dutch,
            Afrikaans, Mandarin, Cantonese and Portuguese, ensuring assistance
            is available in your preferred language.
        </div>
        <div class="flex justify-center">
            <HotkeyButton
                class="hover-lift"
                size="lg"
                onclick={() =>
                    window.open(
                        "https://calendar.app.google/aoU5qv1gX6ocHnAH8",
                        "_blank",
                        "noopener,noreferrer",
                    )}
            >
                Become a Partner
            </HotkeyButton>
        </div>
    </div>
</div>
