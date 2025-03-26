<!-- <script>
  import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
  import {
    ArrowRight,
    Database,
    Users,
    Icon,
    Box,
    LineChart,
    Github,
    LibraryBig,
    SquareDashedMousePointer,
  } from "lucide-svelte";
  import {
    Workflow,
    LockKeyhole,
    Lock,
    ChartColumn,
    ShipWheel,
    Code,
    GitMerge,
    TrendingUp,
    MonitorCog,
    Play,
    Zap,
    ArrowDown,
  } from "lucide-svelte";
  import Opencore from "$lib/images/opencore.png";
  import Devportal from "$lib/images/solutions/devportal.png";
  import Apidocs from "$lib/images/solutions/apidocs.png";
  import { ImageUpscale } from 'lucide-svelte';
  let iconClass =
    "flex flex-col items-center justify-center space-y-2 cursor-pointer animate-fade-in";

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

<div class="pt-16">
  <section class="py-20 px-4 gradient-bg relative overflow-hidden">
    <div class="container mx-auto relative z-10">
      <div class="max-w-4xl mx-auto text-center scroll-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Your
          <span class="bg-clip-text text-customGreen">
            {" "}Single Point{" "}
          </span>
          of Automation
        </h1>
        <p class="text-xl text-gray-400 px-4 sm:px-0">
          Elevate your business workflows with our powerful automation suite,
          crafted for seamless scalability, top-tier security, and easy
          integration with your current systems.
        </p>
        <p class="text-xl text-gray-400 mb-8 px-4 sm:px-0">
          Unlock efficiency and drive growth effortlessly.
        </p>
        <HotkeyButton
          class="hover-lift"
          size="lg"
          onclick={() =>
            window.open(
              "https://docs.openiap.io/docs/Accessing-for-the-First-Time.html",
              "_blank",
              "noopener,noreferrer",
            )}
        >
          Get Started <ArrowRight class="ml-2 h-5 w-5" />
        </HotkeyButton>
      </div>
    </div>
  </section>

  <section class="py-10 px-4">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="scroll-fade-in space-y-6">
          <h2 class="text-3xl font-bold mb-6">
            OpenCore: Dynamic Process Orchestration
          </h2>
          <p class="text-gray-400 text-justify">
            A versatile and secure orchestration platform designed to integrate
            seamlessly with your existing RPA, CRM, ERP, SCM, and other software
            you love. Run it in the cloud or on-premise with comprehensive
            coding support, allowing developers to work with their preferred
            languages and in familiar environments.
          </p>
          <div class="grid sm:grid-cols-2 gap-4 mt-8">
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <Database class="h-5 w-5 text-customGreen" />
              <span>Centralized Control</span>
            </div>
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <Users class="h-5 w-5 text-customGreen" />
              <span>Collaborative Environment</span>
            </div>
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <LineChart class="h-5 w-5 text-customGreen" />
              <span>Real-time Analytics</span>
            </div>
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <Box class="h-5 w-5 text-customGreen" />
              <span>Cross-Platform Integration</span>
            </div>
          </div>
          <div class="flex justify-center mt-10 space-x-4">
            <a
              class={iconClass}
              onclick={() =>
                window.open(
                  "https://github.com/open-rpa/openflow/",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              <Github width={30} height={30} />
              <p>GitHub</p>
            </a>
            <a
              class={iconClass}
              onclick={() =>
                window.open(
                  "https://docs.openiap.io/docs/flow/",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              <LibraryBig width={30} height={30} />
              <p>Docs</p>
            </a>
          </div>
        </div>
        <div class="scroll-fade-in">
          <div
            class="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50"
          >
            <Workflow class="w-full h-48 text-customGreen mb-4" />
            <h3 class="text-xl font-semibold mb-4">
              Versatile Automation Toolkit
            </h3>
            <p class="text-gray-400 text-justify">
              Leverage the Power of Code for Advanced Automation, or
              Drag-and-Drop Functions for Simpler Workflows; Empowering Both
              Developers and Non-Technical Users to Work Together Seamlessly.
            </p>
            <HotkeyButton
              class="mt-6 w-full"
              size="lg"
              onclick={() =>
                window.open(
                  "https://docs.openiap.io/docs/flow/",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              Learn More
              <ArrowRight class="ml-2 h-4 w-4" />
            </HotkeyButton>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div
          class="md:w-1/2 scroll-zoom-in opacity-0 scale-95 transition-all duration-70"
        >
          <div class="relative">
            <img
              src={Opencore}
              alt=""
              class="w-full h-full object-cover filter blur-sm"
            />

            <div class="absolute inset-0 flex items-center justify-center">
              <LockKeyhole class="h-32 w-32 text-white opacity-70" />
            </div>
          </div>
        </div>
        <div class="md:w-1/2 space-y-6">
          <h2 class="text-3xl font-bold">Enterprise-Grade Security</h2>
          <p class="text-gray-400 text-justify">
            We partner with institutions in the most highly regulated sectors.
            Stringent annual security audits are mandatory and OpenCore
            consistently delivers exceptional results. With advanced, built-in
            security features such as end-to-end encryption, access control
            lists, and rigorous adherence to industry-leading security
            standards, OpenCore provides a level of data protection that
            instills confidence and meets the highest professional standards.
          </p>
          <ul class="space-y-4">
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 gradient-bg">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 scroll-fade-in">
          <h2 class="text-3xl font-bold">Scale Your Automation Effortlessly</h2>
          <p class="text-gray-400 text-justify">
            Boost efficiency with OpenIAP’s scalable platform. Easily create
            modular code and workflows for reusable deployment to different use
            cases. Foster collaboration between low-code users and developers
            with our SDKs, supporting seven major programming languages. With
            Kubernetes for deployment and Grafana for data visualization,
            scaling your automation has never been easier.
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div
              class="flex items-center justify-center md:justify-start space-x-3 p-4 rounded-lg border border-gray-700 hover:border-customGreen transition-all"
            >
              <span><ChartColumn /></span>
              <span class="text-sm md:text-base">Grafana</span>
            </div>
            <div
              class="flex items-center justify-center md:justify-start space-x-3 p-4 rounded-lg border border-gray-700 hover:border-customGreen transition-all"
            >
              <span><ShipWheel /></span>
              <span class="text-sm md:text-base">kubernetes</span>
            </div>
            <div
              class="flex items-center justify-center md:justify-start space-x-3 p-4 rounded-lg border border-gray-700 hover:border-customGreen transition-all"
            >
              <span><Code /></span>
              <span class="text-sm md:text-base">Multi-Language Support</span>
            </div>
            <div
              class="flex items-center justify-center md:justify-start space-x-3 p-4 rounded-lg border border-gray-700 hover:border-customGreen transition-all"
            >
              <span><GitMerge /></span>
              <span class="text-sm md:text-base">Git</span>
            </div>
          </div>
        </div>
        <div class="scroll-fade-in">
          <div
            class="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50"
          >
            <ImageUpscale class="w-full h-48 text-customGreen mb-4" />
            <h3 class="text-xl font-semibold mb-4">
              Integrate with the Software you Love
            </h3>
            <p class="text-gray-400 text-justify">
              Using code or NodeRed you can connect to your favourite solutions
              and systems with over 4000 APIs.
            </p>
            <HotkeyButton
              class="mt-6 w-full"
              size="lg"
              onclick={() =>
                window.open(
                  "https://docs.openiap.io/docs/flow/",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              Get Started Now
              <ArrowRight class="ml-2 h-4 w-4" />
            </HotkeyButton>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4">
    <div class="container mx-auto">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-14">Developer Tools</h2>
        <div class="grid md:grid-cols-2 gap-8">
          {#each [{ title: "Developer Portal", description: "Access powerful debugging tools, dedicated testing environments, and a supportive community to help streamline development.", image: Devportal, redirectTo: "https://app.openiap.io/ui/" }, { title: "API Documentation", description: "Comprehensive API documentation with interactive examples and SDKs for seven major programming languages.", image: Apidocs, redirectTo: "https://docs.openiap.io/docs/sdk/" }] as item}
            <div
              onclick={() =>
                window.open(item.redirectTo, "_blank", "noopener,noreferrer")}
              class="hover:scale-105 cursor-pointer scroll-fade-in opacity-0 transition-all duration-700 bg-gray-900 rounded-lg border-gray-700"
            >
              <div
                class="overflow-hidden border hover:border-customGreen transition-all rounded-lg border-gray-700"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  class="w-full opacity-50"
                />
                <div class="p-6 w0full">
                  <h3 class="text-xl font-semibold mb-2">{item.title}</h3>
                  <p class="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 gradient-bg">
    <div class="container mx-auto">
      <div
        class="text-center scroll-bounce opacity-0 transition-all duration-700 flex flex-col items-center"
      >
        <h2 class="text-3xl font-bold mb-4 max-w-4xl text-center">
          Orchestrate your Favourite RPA Solution through OpenCore or use our
          Open Source Solution
        </h2>
        <p class="text-gray-400 max-w-4xl mx-auto">
          Use whatever you know, whatever you love, or use OpenRPA!
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 px-4 bg-gradient-to-b from-background to-gray-900">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="order-2 lg:order-1 scroll-fade-in space-y-6">
          <h2 class="text-3xl font-bold mb-6">
            OpenRPA: Robotic Process Automation
          </h2>
          <p class="text-gray-400 text-justify">
            Empower your team with our advanced, user-friendly RPA solution,
            designed for both speed and scalability. Build, deploy, and optimize
            automations faster than ever with our intuitive visual interface and
            an extensive library of pre-built components. Seamlessly integrate
            with OpenCore to enhance performance across all systems and scale
            operations effortlessly, bringing enterprise-grade capabilities to
            every automation.
          </p>

          <div class="grid sm:grid-cols-2 gap-4 mt-8">
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <MonitorCog class="h-5 w-5 text-customGreen" />
              <span>Intuitive Interface</span>
            </div>
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <Play class="h-5 w-5 text-customGreen" />
              <span>Smart Recording</span>
            </div>
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <TrendingUp class="h-5 w-5 text-customGreen" />
              <span>Easy to Scale</span>
            </div>
            <div
              class="flex items-center space-x-3 p-4 rounded-lg border border-gray-800 hover:border-customGreen transition-all"
            >
              <SquareDashedMousePointer class="h-5 w-5 text-customGreen" />
              <span>Drag and Drop</span>
            </div>
          </div>
          <div class="flex justify-center mt-10 space-x-4">
            <div
              class={iconClass}
              onclick={() =>
                window.open(
                  "https://github.com/open-rpa/openrpa/",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              <Github width={30} height={30} />
              <p>GitHub</p>
            </div>
            <div
              class={iconClass}
              onclick={() =>
                window.open(
                  "https://docs.openiap.io/docs/openrpa/",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              <LibraryBig width={30} height={30} />
              <p>Docs</p>
            </div>
          </div>
        </div>
        <div class="order-1 lg:order-2 scroll-fade-in">
          <div
            class="p-6 rounded-lg border border-gray-800 hover:border-customGreen transition-all bg-gray-900/50"
          >
            <Zap class="w-full h-48 text-customGreen mb-4" />
            <h3 class="text-xl font-semibold mb-4">
              Low-Code Automation Builder
            </h3>
            <p class="text-gray-400 text-justify">
              Create powerful automation workflows without the need to write
              code. Perfect for users who want to automate repetitive tasks
              quickly and efficiently.
            </p>
            <HotkeyButton
              class="mt-6 w-full"
              size="lg"
              onclick={() =>
                window.open(
                  "https://www.youtube.com/@AllanZimmermann/videos",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              Watch Tutorial
              <ArrowRight class="ml-2 h-4 w-4" />
            </HotkeyButton>
            <HotkeyButton
              class="mt-4 w-full"
              size="lg"
              onclick={() =>
                window.open(
                  "https://github.com/open-rpa/openrpa/releases/latest/download/OpenRPA.msi",
                  "_blank",
                  "noopener,noreferrer",
                )}
            >
              Download OpenRPA
              <ArrowDown class="ml-2 h-4 w-4" />
            </HotkeyButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</div> -->
