<script lang="ts">
    import { goto } from "$app/navigation";
    import { base } from "$app/paths";
    import Calendlywidget from "$lib/calendlywidget/calendlywidget.svelte";
    import * as Form from "$lib/components/ui/form/index.js";
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton/index.js";
    import { CustomInput } from "$lib/custominput/index.js";
    import { Check } from "lucide-svelte";
    import { toast } from "svelte-sonner";
    import SuperDebug, { defaults, superForm } from "sveltekit-superforms";
    import { zod } from "sveltekit-superforms/adapters";
    import { newFormSchema } from "./schema.js";

    let loading = $state(false);
    let showdebug = $state(false);

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
                    // goto(base + `/`);
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
</script>

<svelte:head>
    <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        defer
    ></script>
</svelte:head>

<div>
    <section
        class="py-20 px-4 mt-10 flex items-center justify-center gradient-bg"
    >
        <div class="md:container mx-auto">
            <div class="max-w-3xl mx-auto animate-fade-in">
                <h2 class="text-3xl md:text-4xl font-bold mb-2 text-center text-bw50">
                    Get in touch!
                </h2>
                <p class="text-xl text-gray-400 mb-8 text-center">
                    We will get back to you as soon as we can.
                </p>
                <div class="bg-card border border rounded-[10px] p-4 m-2">
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
                            aria-label="Submit"
                            variant="success"
                            size="base"
                            data-shortcut="enter"
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

    <section class="h-[100vh]" id="meetinglink">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-bw50">
            Or book a meeting  
        </h2>
        <Calendlywidget />
    </section>

    <!-- <section class="py-20 px-4 text-white">
        <div class="container mx-auto text-center">
            <div class="max-w-3xl mx-auto">
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
    </section> -->

   
</div>

<HotkeyButton
    hidden
    class="hidden"
    aria-label="Toggle debug"
    data-shortcut={"ctrl+d,meta+d"}
    onclick={() => (showdebug = !showdebug)}
/>
