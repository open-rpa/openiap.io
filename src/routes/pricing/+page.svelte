<script>
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import * as Card from "$lib/components/ui/card";
  import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
  import { Check, X } from "lucide-svelte";

  let screen = $state(1);
  $effect(() => {
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

    return () => observer.disconnect();
  });
</script>

<section class="pt-24 md:min-h-screen px-4 gradient-bg">
  <div class="container mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
      Flexible Pricing Tailored To Your Needs
    </h2>
    <p
      class="text-xl text-gray-400 my-6 text-center max-w-2xl mx-auto animate-fade-in"
    >
      Explore our different pricing plans
    </p>

    <div
      class="flex space-x-4 justify-center items-center mb-8 animate-fade-in"
    >
      <div
        class={`p-2 rounded cursor-pointer hover:bg-customGreen hover:text-black ${screen === 1 && "bg-customGreen text-black"} `}
        onclick={() => (screen = 1)}
      >
        Licenses
      </div>
      <div
        class={`p-2 rounded cursor-pointer hover:bg-customGreen hover:text-black ${screen === 2 && "bg-customGreen text-black"} `}
        onclick={() => (screen = 2)}
      >
        Cloud
      </div>
      <div
        class={`p-2 rounded cursor-pointer  hover:bg-customGreen hover:text-black ${screen === 3 && "bg-customGreen text-black"} `}
        onclick={() => (screen = 3)}
      >
        Consulting
      </div>
    </div>

    {#if screen == 1}
      <div
        class="grid grid-cols-1 md:grid-cols-6 gap-4 mx-auto animate-fade-in"
      >
        <Card.Root
          class="md:col-span-3 lg:col-start-2 lg:col-span-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
        >
          <Card.Header class="mb-0">
            <Card.Title>Open Source</Card.Title>
            <Card.Description>Perfect for getting started</Card.Description>
            <Card.Content class="p-0">
              <div class="grid grid-cols-1">
                <div class="m-1">
                  <p class="flex items-center my-2">Control and Scalability</p>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Limited access to features
                    </li>
                  </ul>
                </div>

                <div class="m-1">
                  <p class="flex items-center my-2">Support</p>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500" />
                      Community support
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500" />
                      Basic tutorials
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Content>
          </Card.Header>
          <HotkeyButton
            onclick={() =>
              window.open(
                "https://docs.openiap.io/",
                "_blank",
                "noopener,noreferrer",
              )}
            class="m-6 mt-0">Get Started</HotkeyButton
          >
        </Card.Root>

        <Card.Root
          class="md:col-span-3 lg:col-start-4 lg:col-span-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
        >
          <Card.Header>
            <Card.Title>Enterprise</Card.Title>
            <Card.Description>Custom solutions</Card.Description>
            <Card.Content class="p-0">
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="m-1">
                  <p class="flex items-center my-2">Control</p>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Access to OpenAI's APIs
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500" />
                      Reporting
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500" />
                      Performance Monitoring
                    </li>
                  </ul>
                </div>

                <div class="m-1">
                  <p class="flex items-center my-2">Scalability</p>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Custom AI Chatbot
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Kubernetes
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Git
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Grafana
                    </li>
                  </ul>
                </div>

                <div class="m-1">
                  <p class="flex items-center my-2">Support</p>
                  <ul class="space-y-2 text-sm">
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500" />
                      SLA
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Priority Support
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Prod Dev Roadmap
                    </li>
                    <li class="flex items-center">
                      <Check class="mr-2 h-4 w-4 text-green-500 " />
                      Access to Dev Team
                    </li>
                  </ul>
                </div>
              </div>
            </Card.Content>
          </Card.Header>
          <HotkeyButton
            onclick={() => goto(base + "/contact/meet")}
            class="m-6 mt-0">Contact Sales</HotkeyButton
          >
        </Card.Root>
      </div>
    {/if}

    {#if screen == 2}
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto animate-fade-in"
      >
        <Card.Root
          class=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
        >
          <Card.Header>
            <Card.Title>Open Source</Card.Title>
            <Card.Description>Perfect for getting started</Card.Description>
          </Card.Header>

          <div class="flex p-6 items-end">
            <span class="text-3xl font-bold text-center"
              >0 <span class="text-2xl">USD</span></span
            >
          </div>

          <Card.Content>
            <ul class="space-y-4">
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Runtime limited to 4 hours
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Limited disk space (25 MB)
              </li>
              <li class="flex items-center">
                <X class="mr-2 h-4 w-4 text-red-500" />
                Dedicated Server
              </li>
            </ul>
            <HotkeyButton
              onclick={() =>
                window.open(
                  "https://docs.openiap.io/",
                  "_blank",
                  "noopener,noreferrer",
                )}
              class="w-full mt-6">Get Started</HotkeyButton
            >
          </Card.Content>
        </Card.Root>

        <Card.Root
          class=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
        >
          <Card.Header>
            <Card.Title>Cloud Basic</Card.Title>
            <Card.Description
              >Perfect for Beginners and Small Projects</Card.Description
            >
          </Card.Header>
          <div class="flex px-6 items-end">
            <span class="text-3xl font-bold text-center"
              ><span class="text-2xl">DKK {" "}</span>277</span
            >
            <span
              class="text-sm font-bold text-center justify-end text-gray-400"
              >/Month</span
            >
          </div>
          <div class="flex px-6 pb-6 items-end">
            <span class="text-base font-bold text-center text-gray-400"
              >Approx. 39 <span class="text-base text-gray-400">USD</span></span
            >
          </div>
          <Card.Content>
            <ul class="space-y-4">
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Run your agents 24/7
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                256 MB RAM
              </li>
              <li class="flex items-center">
                <X class="mr-2 h-4 w-4 text-red-500" />
                Dedicated Server
              </li>
            </ul>
            <HotkeyButton
              onclick={() =>
                window.open(
                  "https://app.openiap.io/ui/#/Customer",
                  "_blank",
                  "noopener,noreferrer",
                )}
              class="w-full mt-6">Subscribe Now</HotkeyButton
            >
          </Card.Content>
        </Card.Root>

        <Card.Root
          class="scale-105 transition-all duration-300 hover:shadow-lg border-customGreen flex flex-col justify-between"
        >
          <Card.Header>
            <Card.Title>Cloud Premium</Card.Title>
            <Card.Description>For great value over performance</Card.Description
            >
          </Card.Header>
          <div class="flex px-6 items-end">
            <span class="text-3xl font-bold text-center"
              ><span class="text-2xl">DKK {" "}</span>915
            </span>
            <span
              class="text-sm font-bold text-center justify-end text-gray-400"
              >/Month</span
            >
          </div>
          <div class="flex px-6 pb-6 items-end">
            <span class="text-base font-bold text-center text-gray-400"
              >Approx. 129 <span class="text-base text-gray-400">USD</span
              ></span
            >
          </div>
          <Card.Content>
            <ul class="space-y-4">
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Run your agents 24/7
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                1 GB RAM
              </li>
              <li class="flex items-center">
                <X class="mr-2 h-4 w-4 text-red-500" />
                Dedicated Server
              </li>
            </ul>
            <HotkeyButton
              onclick={() =>
                window.open(
                  "https://app.openiap.io/ui/#/Customer",
                  "_blank",
                  "noopener,noreferrer",
                )}
              class="w-full mt-6">Subscribe Now</HotkeyButton
            >
          </Card.Content>
        </Card.Root>

        <Card.Root
          class=" hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
        >
          <Card.Header>
            <Card.Title>Cloud Advanced</Card.Title>
            <Card.Description
              >Ample resources for advanced projects</Card.Description
            >
          </Card.Header>
          <div class="flex px-6 items-end">
            <span class="text-3xl font-bold text-center"
              ><span class="text-2xl">DKK {" "}</span>1699</span
            >
            <span
              class="text-sm font-bold text-center justify-end text-gray-400"
              >/Month</span
            >
          </div>
          <div class="flex px-6 pb-6 items-end">
            <span class="text-base font-bold text-center text-gray-400"
              >Approx. 239<span class="text-base text-gray-400">
                USD</span
              ></span
            >
          </div>
          <Card.Content>
            <ul class="space-y-4">
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Run your agents 24/7
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                2 GB RAM
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Dedicated Server
              </li>
            </ul>
            <HotkeyButton
              onclick={() =>
                window.open(
                  "https://app.openiap.io/ui/#/Customer",
                  "_blank",
                  "noopener,noreferrer",
                )}
              class="w-full mt-6">Subscribe Now</HotkeyButton
            >
          </Card.Content>
        </Card.Root>
      </div>
    {/if}

    {#if screen == 3}
      <div
        class="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4 mx-auto animate-fade-in"
      >
        <Card.Root
          class="md:col-start-2 md:col-span-3 lg:md:col-span-1 lg:col-start-2 hover:scale-105 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
        >
          <Card.Header>
            <Card.Title>Hourly</Card.Title>
            <Card.Description
              >Perfect for onboarding developers</Card.Description
            >
          </Card.Header>

          <div class="flex px-4 items-end">
            <span class="text-3xl font-bold text-center"
              ><span class="text-2xl">DKK {" "}</span>1530</span
            >
            <span
              class="text-md font-bold text-center justify-end text-gray-400"
              >/hour</span
            >
          </div>
          <div class="flex px-4 pb-4 items-end">
            <span class="text-base font-bold text-center text-gray-400"
              >Approx. 216 <span class="text-base text-gray-400">USD</span
              ></span
            >
          </div>
          <Card.Content>
            <ul class="space-y-2">
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Advanced support
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Troubleshooting
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Designing software architecture
              </li>
              <li class="flex items-center">
                <Check class="mr-2 h-4 w-4 text-green-500" />
                Assistance with custom infrastructure
              </li>
            </ul>
            <HotkeyButton
              onclick={() =>
                window.open(
                  "https://calendar.app.google/9Kt9XWGRYPLTyhQF7",
                  "_blank",
                  "noopener,noreferrer",
                )}
              class="w-full mt-6">Book a meeting</HotkeyButton
            >
          </Card.Content>
        </Card.Root>
      </div>
    {/if}

    <div class="flex justify-center gap-4 py-6">
      <HotkeyButton
        class="hover-lift"
        size="lg"
        onclick={() => goto(base + `/pricing/details/${screen}`)}
      >
        Learn More
      </HotkeyButton>
    </div>
  </div>
</section>
