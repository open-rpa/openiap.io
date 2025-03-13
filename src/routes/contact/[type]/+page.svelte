<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import * as Form from "$lib/components/ui/form/index.js";
    import { toast } from "svelte-sonner";
    import SuperDebug, { defaults, superForm } from "sveltekit-superforms";
    import { effect as formEffect, zod } from "sveltekit-superforms/adapters";
    import { newFormSchema } from "../schema.js";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton/index.js";
    import { Check } from "lucide-svelte";
    import { CustomInput } from "$lib/custominput/index.js";

    let { data } = $props();

    console.log(data.type);

    let loading = $state(false);
    let disabled = $state(false);
    let showdebug = $state(false);
    let sectionRef: HTMLElement | null = $state(null);

    const form = superForm(defaults(zod(newFormSchema)), {
        dataType: "json",
        validators: zod(newFormSchema),
        SPA: true,
        onUpdate: async ({ form, cancel }) => {
            if (form.valid) {
                loading = true;
                try {
                    const data = form.data;
                    const requestOptions = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    };

                    const response = await fetch(
                        "https://allanopenrpadk.app.openiap.io/form",
                        requestOptions,
                    );
                    const resData = await response.json();
                    if (resData.success) {
                        toast.success("Your response has been submitted");
                    } else {
                        toast.error(resData.error);
                    }
                    goto(base + `/user`);
                } catch (error: any) {
                    toast.error("Error", {
                        description: error.message,
                    });
                    cancel();
                    loading = false;
                }
            } else {
                loading = false;
                toast.error("Error", {
                    description: "Form is invalid",
                });
            }
        },
    });
    const { form: formData, enhance, message } = form;

    let isScreenSmall = $state();
    let isScreenSmallTab = $state();
    let isScreenMedium = $state();
    let isScreenLarge = $state();

    $effect(() => {
        if (data.type == "meet") {
            const meetingLinkElement = document?.getElementById("meetinglink");
            if (meetingLinkElement) {
                const offset = -60; // Adjust this value to match your header height
                if (sectionRef == null) return;
                const elementPosition = sectionRef.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.scrollY + offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
                // meetingLinkElement.scrollIntoView({
                //     behavior: "smooth",
                // });
            }
        } else {
            window.scrollTo(0, 0);
        }
        isScreenSmall = window.innerWidth < 450;
        isScreenSmallTab = window.innerWidth > 1160;
        isScreenMedium = window.innerWidth < 1160 && window.innerWidth > 769;
        isScreenLarge = window.innerWidth > 1160;
        const handleResize = () => {
            isScreenSmall = window.innerWidth < 540;
            isScreenSmallTab =
                window.innerWidth > 540 && window.innerWidth < 769;
            isScreenMedium =
                window.innerWidth > 769 && window.innerWidth < 1160;
            isScreenLarge = window.innerWidth > 1160;
        };
        window.addEventListener("resize", handleResize);

        handleResize();

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
        const elements = document.querySelectorAll(
            ".scroll-fade-in, .scroll-zoom-in, .scroll-rotate-in, .scroll-bounce",
        );
        elements.forEach((el) => observer.observe(el));
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
            observer.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    });
</script>

<div>
    <section
        class="py-20 px-4 md:h-screen flex items-center justify-center gradient-bg"
    >
        <div class="md:container mx-auto">
            <div class="max-w-3xl mx-auto animate-fade-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center">
                    Get in Touch!
                </h2>
                <p class="text-xl text-gray-400 mb-8 text-center">
                    We will get back to you as soon as we can.
                </p>
                <div class="bg-card border border-1 rounded-xl p-4 m-2">
                    <form method="POST" use:enhance>
                        <div
                            class="grid grid-cols-2 space-x-5 justify-between w-full"
                        >
                            <Form.Field {form} name="name" class="mb-4">
                                <Form.Control>
                                    {#snippet children({ props })}
                                        <Form.Label>Name *</Form.Label>
                                        <CustomInput
                                            placeholder="Type name"
                                            disabled={loading}
                                            {...props}
                                            bind:value={$formData.name}
                                        />
                                    {/snippet}
                                </Form.Control>
                                <Form.FieldErrors />
                            </Form.Field>

                            <Form.Field {form} name="company_name" class="mb-4">
                                <Form.Control>
                                    {#snippet children({ props })}
                                        <Form.Label>Company Name *</Form.Label>
                                        <CustomInput
                                            placeholder="Type company name"
                                            disabled={loading}
                                            {...props}
                                            bind:value={$formData.company_name}
                                        />
                                    {/snippet}
                                </Form.Control>
                                <Form.FieldErrors />
                            </Form.Field>
                        </div>

                        <Form.Field {form} name="phone_number" class="mb-4">
                            <Form.Control>
                                {#snippet children({ props })}
                                    <Form.Label>Phone Number</Form.Label>
                                    <CustomInput
                                        type="number"
                                        placeholder="Type phone number"
                                        disabled={loading}
                                        {...props}
                                        bind:value={$formData.phone_number}
                                    />
                                {/snippet}
                            </Form.Control>
                            <Form.FieldErrors />
                        </Form.Field>

                        <Form.Field {form} name="email" class="mb-4">
                            <Form.Control>
                                {#snippet children({ props })}
                                    <Form.Label>Email *</Form.Label>
                                    <CustomInput
                                        type="email"
                                        placeholder="Type email"
                                        disabled={loading}
                                        {...props}
                                        bind:value={$formData.email}
                                    />
                                {/snippet}
                            </Form.Control>
                            <Form.FieldErrors />
                        </Form.Field>

                        <Form.Field {form} name="message" class="mb-4">
                            <Form.Control>
                                {#snippet children({ props })}
                                    <Form.Label>Message *</Form.Label>
                                    <CustomInput
                                        placeholder="Type message"
                                        disabled={loading}
                                        {...props}
                                        bind:value={$formData.message}
                                    />
                                {/snippet}
                            </Form.Control>
                            <Form.FieldErrors />
                        </Form.Field>

                        <HotkeyButton
                            type="submit"
                            disabled={loading}
                            aria-label="Create User"
                            variant="success"
                            size="base"
                            data-shortcut="ctrl+s"
                        >
                            <Check />
                            Submit</HotkeyButton
                        >
                    </form>
                </div>
            </div>
        </div>
    </section>

    {#if formData != null && showdebug == true}
        <SuperDebug data={formData} theme="vscode" />
    {/if}

    <section class="py-20 px-4">
        <div class="container mx-auto text-center">
            <div class="max-w-3xl mx-auto scroll-fade-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Reach out to Learn More
                </h2>
                <p class="mb-2">
                    Write us:
                    <a
                        class="text-customGreen hover:text-white"
                        href="mailto:hello@openiap.io"
                    >
                        {" "}hello at openiap.io{" "}
                    </a>
                </p>
                <p class="mb-2">
                    Call us:
                    <a
                        href="tel:+393899433824"
                        class="text-customGreen hover:text-white"
                    >
                        {" "}+39 389 943 3824
                    </a>
                </p>
            </div>
        </div>
    </section>

    <section
        class="py-20 px-4 gradient-bg"
        id="meetinglink"
        bind:this={sectionRef}
    >
        <div class="md:container mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold">Book a Meeting Now</h2>
            <iframe
                class={`calendly-inline-widget min-w-80 w-full ${isScreenSmall && "h-[66rem]"} ${isScreenSmallTab && "h-[70rem]"} ${isScreenMedium && "h-[70rem]"}  ${isScreenLarge && "h-[50rem]"} `}
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3uQ_PUYcVYRPtxpvIVUac6CKOKpr9z-lBo3vc-ScYGaeX1766BKtaol1MUfGlZNZ1yU2WLQGPO?gv=true"
            ></iframe>
        </div>
    </section>
</div>

<HotkeyButton
    hidden
    class="hidden"
    aria-label="Toggle debug"
    data-shortcut={"ctrl+d,meta+d"}
    onclick={() => (showdebug = !showdebug)}
/>
