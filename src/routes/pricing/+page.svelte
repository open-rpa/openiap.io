<script>
  import { goto } from "$app/navigation";
  import { base } from "$app/paths";
  import * as Card from "$lib/components/ui/card";
  import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
  import { Check, X } from "lucide-svelte";
  import * as Tabs from "$lib/components/ui/tabs/index";
  import Separator from "$lib/components/ui/separator/separator.svelte";
  import border_bottom from "$lib/images/border_bottom.svg";
  import border_bottom_large from "$lib/images/border_bottom_large.svg";
  import pricing_grid from "$lib/images/pricing_grid.png";

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

  let gradienttext =
    " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
  let gradienttextnew =
    " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<svelte:head>
  <title>Pricing | OpenIAP</title>
</svelte:head>

<section
  class="pt-32 md:h-screen px-4 gradient-bg flex justify-center items-center md:mb-[700px]"
>
  <img
    src={pricing_grid}
    alt="pricing_grid"
    class="hidden md:block md:absolute w-[100%] h-[100%] object-cover top-0 left-0 z-0"
  />
  <div class="container mx-auto md:absolute md:h-screen">
    <div class="text-center">
      <div class="mb-10">
        <div class="text-center">
          <p class={"text-[50px] font-semibold" + gradienttext}>
            Plans and Pricing
          </p>
        </div>
        <p class="text-bw300 font-semibold text-[14px]">
          Explore our different pricing plans tailored to your needs
        </p>
      </div>
    </div>

    <Tabs.Root value="1">
      <div class="flex justify-center mb-10">
        <Tabs.List
          class="bg-bw700 dark:bg-bw700 rounded-[5px] p-1 lg:mb-0 text-bw50 font-normal flex justify-center w-fit rounded-[10px]"
        >
          <Tabs.Trigger
            value="1"
            class=" text-xs sm:text-base"
            onclick={() => (screen = 1)}>Licenses</Tabs.Trigger
          >
          <Tabs.Trigger
            value="2"
            class=" text-xs sm:text-base"
            onclick={() => (screen = 2)}>Cloud</Tabs.Trigger
          >
          <Tabs.Trigger
            value="3"
            class=" text-xs sm:text-base"
            onclick={() => (screen = 3)}>Consulting</Tabs.Trigger
          >
        </Tabs.List>
      </div>
      <Tabs.Content value="1">
        <div
          class="grid grid-cols-1 gap-8 md:flex md:justify-center animate-fade-in"
        >
          <Card.Root
            class="md:col-span-3 lg:col-start-2 lg:col-span-2  transition-all duration-300 hover:shadow-lg flex flex-col justify-between rounded-[20px] border-2 bg-cardbgdark dark:bg-cardbgdark w-full lg:w-[510px] lg:h-[530px] px-[26px] py-1.5 border-bw500/70"
          >
            <Card.Header class="mb-0">
              <Card.Title class={"font-normal mb-2" + gradienttextnew}
                >Open Source</Card.Title
              >
              <Card.Description>Perfect for getting started</Card.Description>
              <div class="pt-2 pb-[14px]">
                <Separator />
              </div>
              <Card.Content class="p-0">
                <div class="grid grid-cols-1">
                  <div class="m-1 mb-5">
                    <p class="flex items-center my-2 text-bw50 text-[14px]">
                      Control and Scalability
                    </p>
                    <ul class="space-y-2 text-sm">
                      <li class="flex items-center">
                        <Check
                          class="mr-2 h-4 w-4 text-greentick text-[14px]"
                        />
                        Limited access to features
                      </li>
                    </ul>
                  </div>

                  <div class="m-1">
                    <p class="flex items-center my-2 text-bw50 text-[14px]">
                      Support
                    </p>
                    <ul class="space-y-2 text-sm text-[14px]">
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick" />
                        Community support
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick" />
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
            class="md:col-span-3 lg:col-start-4 lg:col-span-2 transition-all duration-300 hover:shadow-lg flex flex-col justify-between rounded-[20px] border-2 bg-cardbgdark dark:bg-cardbgdark w-full lg:w-[510px] px-[26px] py-1.5 border-bw500/70"
          >
            <Card.Header>
              <Card.Title class={"font-normal mb-2" + gradienttextnew}
                >Enterprise</Card.Title
              >
              <Card.Description>Customized solutions</Card.Description>
              <div class="pt-2 pb-[14px]">
                <Separator />
              </div>
              <Card.Content class="p-0">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="m-1">
                    <p class="flex items-center my-2 text-bw50 text-[14px]">
                      Control
                    </p>
                    <ul class="space-y-2 text-sm text-[14px]">
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Access to OpenAI's APIs
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick" />
                        Reporting
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick" />
                        Performance Monitoring
                      </li>
                    </ul>
                  </div>

                  <div class="m-1 lg:ms-12 justify-end">
                    <p class="flex items-center my-2 text-bw50 text-[14px]">
                      Scalability
                    </p>
                    <ul class="space-y-2 text-sm text-[14px]">
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Custom AI Chatbot
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Kubernetes
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Git
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Grafana
                      </li>
                    </ul>
                  </div>

                  <div class="m-1">
                    <p class="flex items-center my-2 text-bw50 text-[14px]">
                      Support
                    </p>
                    <ul class="space-y-2 text-sm text-[14px]">
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick" />
                        SLA
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Priority Support
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Prod Dev Roadmap
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Access to Dev Team
                      </li>
                      <li class="flex items-center">
                        <Check class="mr-2 h-4 w-4 text-greentick " />
                        Discount on support
                      </li>
                    </ul>
                  </div>
                </div>
              </Card.Content>
            </Card.Header>
            <HotkeyButton
              variant="success"
              onclick={() => goto(base + "/contact")}
              class="m-6 mt-0">Contact Sales</HotkeyButton
            >
          </Card.Root>
        </div>
      </Tabs.Content>
      <Tabs.Content value="2">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-4 xl:gap-4 xl:flex xl:justify-center animate-fade-in"
        >
          <Card.Root
            class=" hover:transition-all duration-300 hover:shadow-lg flex flex-col justify-between rounded-[20px] border-2 bg-cardbgdark dark:bg-cardbgdark xl:w-[335px] xl:h-[452px] px-[26px] py-1.5 border-bw500/70"
          >
            <Card.Header>
              <Card.Title class={"font-normal" + gradienttextnew}
                >Free</Card.Title
              >
              <Card.Description>Perfect for getting started</Card.Description>
            </Card.Header>

            <!-- <div class="flex px-6 items-end text-bw50 my-6">
              <span class="text-[30px] font-bold text-center">Free</span>
            </div> -->

            <div class="pt-5">
              <div class="flex px-6 items-end text-bw50">
                <span class="text-[30px] font-bold text-center"
                  >Free
                  <!-- <span
                    class="font-bold text-center justify-end text-bw500 text-[14px]"
                    >/Month</span
                  > -->
                </span>
              </div>
              <!-- <div class="flex px-6 pb-6 items-end text-[14px]">
                <span class="font-bold text-center text-bw200"
                  >Approx. 39 <span class="text-bw200">USD</span></span
                >
              </div> -->
            </div>

            <!-- <div class="pt-5">
                <div class="flex px-6 items-end text-bw50">
                  <span class="text-[30px] font-bold text-center"
                    >Free
                    <span
                      class="ms-1 font-bold text-center justify-end text-bw500 text-[14px]"
                      >/Month</span
                    >
                  </span>
                </div>
                <div class="flex px-6 pb-6 items-end text-[14px]">
                  <span class="font-bold text-center text-bw500"
                    >Approx. 39 <span class="text-bw500">USD</span></span
                  >
                </div>
              </div> -->

            <div class="px-5">
              <img src={border_bottom} alt="border_bottom" />
            </div>

            <Card.Content>
              <ul class="space-y-4 text-[14px]">
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Runtime limited to 4 hours
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Limited disk space
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
            class=" hover:transition-all duration-300 hover:shadow-lg flex flex-col justify-between rounded-[20px] border-2 bg-cardbgdark dark:bg-cardbgdark xl:w-[335px] px-[26px] py-1.5 border-bw500/70"
          >
            <Card.Header>
              <Card.Title class={"font-normal" + gradienttextnew}
                >Cloud Basic</Card.Title
              >
              <Card.Description>Perfect for Beginners</Card.Description>
            </Card.Header>

            <div class="pt-5">
              <div class="flex px-6 items-end text-bw50">
                <span class="text-[30px] font-bold text-center"
                  >USD 44
                  <span
                    class="font-bold text-center justify-end text-bw500 text-[14px]"
                    >/Month</span
                  >
                </span>
              </div>
              <!-- <div class="flex px-6 pb-6 items-end text-[14px]">
                <span class="font-bold text-center text-bw200"
                  >Approx. 39 <span class="text-bw200">USD</span></span
                >
              </div> -->
            </div>

            <div class="px-6">
              <img src={border_bottom} alt="border_bottom" />
            </div>

            <Card.Content>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Run your agents 24/7
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  256 MB RAM
                </li>
                <li class="flex items-center">
                  <X class="mr-2 h-4 w-4 text-red-500" />
                  Dedicated Server
                </li>
              </ul>
              <HotkeyButton
                variant="success"
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
            class="transition-all duration-300 hover:shadow-lg border-customGreen flex flex-col justify-between rounded-[20px] border-2 bg-cardbgdark dark:bg-cardbgdark xl:w-[335px] px-[26px] py-1.5 border-bw500/70"
          >
            <Card.Header>
              <Card.Title class={"font-normal" + gradienttextnew}
                >Cloud Premium</Card.Title
              >
              <Card.Description
                >Perfect for medium-size projects</Card.Description
              >
            </Card.Header>

            <div class="pt-5">
              <div class="flex px-6 items-end text-bw50">
                <span class="text-[30px] font-bold text-center"
                  >USD 144
                  <span
                    class="font-bold text-center justify-end text-bw500 text-[14px]"
                    >/Month</span
                  >
                </span>
              </div>
              <!-- <div class="flex px-6 pb-6 items-end text-[14px]">
                <span class="font-bold text-center text-bw200"
                  >Approx. 129 <span class="text-bw200">USD</span></span
                >
              </div> -->
            </div>

            <div class="px-6">
              <img src={border_bottom} alt="border_bottom" />
            </div>
            <Card.Content>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Run your agents 24/7
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  1 GB RAM
                </li>
                <li class="flex items-center">
                  <X class="mr-2 h-4 w-4 text-red-500" />
                  Dedicated Server
                </li>
              </ul>
              <HotkeyButton
                variant="success"
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
            class=" hover:transition-all duration-300 hover:shadow-lg flex flex-col justify-between rounded-[20px] border-2 bg-cardbgdark dark:bg-cardbgdark xl:w-[335px] px-[26px] py-1.5 border-bw500/70"
          >
            <Card.Header>
              <Card.Title class={"font-normal" + gradienttextnew}
                >Cloud Advanced</Card.Title
              >
              <Card.Description>Perfect for advanced projects</Card.Description>
            </Card.Header>

            <div class="pt-5">
              <div class="flex px-6 items-end text-bw50">
                <span class="text-[30px] font-bold text-center"
                  >USD 165
                  <span
                    class="font-bold text-center justify-end text-bw500 text-[14px]"
                    >/Month</span
                  >
                </span>
              </div>
              <!-- <div class="flex px-6 pb-6 items-end text-[14px]">
                <span class="font-bold text-center text-bw200"
                  >Approx. 239 <span class="text-bw200">USD</span></span
                >
              </div> -->
            </div>

            <div class="px-6">
              <img src={border_bottom} alt="border_bottom" />
            </div>

            <Card.Content>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Run your agents 24/7
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  2 GB RAM
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Dedicated Server
                </li>
              </ul>
              <HotkeyButton
                variant="success"
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
      </Tabs.Content>
      <Tabs.Content value="3">
        <div class="flex justify-center animate-fade-in">
          <Card.Root
            class="md:col-start-2 md:col-span-3 lg:md:col-span-1 lg:col-start-2 hover:transition-all duration-300 hover:shadow-lg flex flex-col justify-between rounded-[20px] border-2 bg-cardbgdark dark:bg-cardbgdark lg:w-[400px] px-[26px] py-1.5 border-bw500/70"
          >
            <Card.Header>
              <Card.Title class={"font-normal" + gradienttextnew}
                >Hourly</Card.Title
              >
              <Card.Description
                >Perfect for onboarding developers</Card.Description
              >
            </Card.Header>

            <div class="pt-5">
              <div class="flex px-6 items-end text-bw50">
                <span class="text-[30px] font-bold text-center"
                  >USD 225
                  <span
                    class="font-bold text-center justify-end text-bw500 text-[14px]"
                    >/Hour</span
                  >
                </span>
              </div>
              <!-- <div class="flex px-6 pb-6 items-end text-[14px]">
                <span class="font-bold text-center text-bw200"
                  >Approx. 216 <span class="text-bw200">USD</span></span
                >
              </div> -->
            </div>

            <div class="px-6">
              <img src={border_bottom_large} alt="border_bottom" />
            </div>

            <Card.Content>
              <ul class="space-y-2 text-[14px]">
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Advanced support
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Troubleshooting
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Designing software architecture
                </li>
                <li class="flex items-center">
                  <Check class="mr-2 h-4 w-4 text-greentick" />
                  Assistance with custom infrastructure
                </li>
              </ul>
              <HotkeyButton
                variant="success"
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
      </Tabs.Content>
    </Tabs.Root>

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
