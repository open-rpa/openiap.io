<script>
    import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
    import logo1 from "$lib/images/usecases/rectangle.svg";

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

        const elements = document.querySelectorAll(".scroll-fade-in");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    });
    let gradienttext =
        " inline-block bg-[linear-gradient(to_right,#ffffff80_0%,#ffffff_15%,#ffffff_85%,#ffffff80_100%)] bg-clip-text text-transparent ";
</script>

<svelte:head>
    <title>Use Cases | OpenIAP</title>
</svelte:head>

<section class="lg;py-20 lg:px-4 gradient-bg text-bw50">
    <div class="container mx-auto">
        <div class="text-center mt-48 mb-20">
            <h1
                class={"text-[20px] lg:text-[40px] max-w-[1000px] text-center font-bold mb-6 animate-fade-in" +
                    gradienttext}
            >
                Kuehne + Nagel Increased their Integration Efficiency by 25x
                with OpenCore
            </h1>
        </div>

        <div class="flex items-center justify-center hidden lg:block">
            <div
                class="border-2 rounded-[20px] mb-10 lg:mb-16 text-center w-fit overflow-hidden"
            >
                <div class="container-rectangle h-14 w-72 md:w-full md:h-full">
                    <img
                        src={logo1}
                        alt="logo1"
                        class="h-full hidden md:block"
                    />

                    <div
                        class="absolute top-1 lg:top-2.5 left-10 md:left-32 lg:left-60"
                    >
                        <p class="lg:text-[16px] xl:text-[30px]">Industry</p>
                        <p
                            class="lg:text-[14px] xl:text-[22px] dark:text-bw200"
                        >
                            Logistics
                        </p>
                    </div>
                    <div
                        class="absolute top-1 lg:top-2.5 right-10 md:right-32 lg:right-60"
                    >
                        <p class="lg:text-[16px] xl:text-[30px]">Location</p>
                        <p
                            class="lg:text-[14px] xl:text-[22px] dark:text-bw200"
                        >
                            Europe
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="lg:hidden flex border-2 rounded-[20px] items-center justify-center w-full mb-10 lg:mb-16 text-center"
        >
            <div class="p-5 mx-auto">
                <p class="text-[16px] lg:text-[30px]">Industry</p>
                <p class="dark:text-bw200 text-[14px] lg:text-[22px]">
                    Logistics
                </p>
            </div>
            <div class="p-5 mx-auto">
                <p class="text-[16px] lg:text-[30px]">Location</p>
                <p class="dark:text-bw200 text-[14px] lg:text-[22px]">Europe</p>
            </div>
        </div>

        <div class="px-4 lg:px-60 text-start">
            <div class="mb-10">
                <ul
                    class="list-disc pl-5 [&>li::marker]:text-white border-l-2 border-[#ffffff80] ps-10"
                >
                    <li>
                        Rapid Learning – Developers learned it in two weeks.
                    </li>
                    <li>
                        Resilient Automation – Smart retries ensure seamless
                        recovery.
                    </li>
                    <li>
                        Enhanced Collaboration – Auto-corrections streamline
                        teamwork.
                    </li>
                </ul>
            </div>

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Challenges</p>
                <p>
                    When we sat down with Felix from Kuehne + Nagel, he told us
                    that managing large-scale invoicing and robotic process
                    automation (RPA) posed significant challenges for them. The
                    need to pause development just to start a session hindered
                    efficiency. Felix explained: “Sometimes we had to stop a
                    developer just to start a session”. Additionally, their
                    workflow required a more flexible and scalable solution to
                    manage thousands of invoices per day, integrate with various
                    tax authorities, and ensure seamless data persistence
                    despite network issues or human interventions.
                </p>
            </div>

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Solution</p>
                <p>
                    While addressing their rigid challenges, the team at Kuehne
                    + Nagel found their answers by stumbling upon the products
                    of OpenIAP. At first they learned about OpenRPA, that
                    allowed them to seamlessly create automation robots.
                    However, when they learned about OpenCore a whole new world
                    of possibilities opened, felix explained: “The queuing (work
                    item queues) concept was a game-changer for us. It allowed
                    us to manage every stage of a document’s lifecycle, even
                    across network issues or human errors”. For our client the
                    process of structuring automation processes into different
                    states, controlled by a queue ensured not only data
                    persistence but also flexibility. It allowed them to pause
                    workflows, let users interact with the data, and then
                    seamlessly return it to the process—without losing progress
                    or consistency. To sum up, Felix pointed out that OpenCore
                    has now become the backbone of how they handle invoicing:
                    “This is the perfect tool that we need in order to create
                    complex invoicing scenarios. Today it has become the pillar
                    of how we handle invoicing, globally.”
                </p>
                <p class="mb-4">
                    Felix highlighted three key reasons why they chose OpenCore
                    as their preferred automation platform:
                </p>
                <ol class="list-decimal ms-4">
                    <li class="mb-4">
                        <span class="font-semibold"> Scalability </span>
                        – OpenCore’s architecture allowed them to handle thousands
                        of invoices per day effortlessly, distributing workloads
                        dynamically across multiple servers. On this, Felix elaborated:
                        “For example, we once had a case where we had to manage thousands
                        of invoices per day. At first, we didn’t realize there was
                        a better way, but later we discovered that the process could
                        have been completed in just an hour by distributing the workload
                        across multiple servers”. Furthermore, OpenCore’s support
                        for pods enabled seamless scaling without increasing hardware
                        capacity.
                    </li>
                    <li class="mb-4">
                        <span class="font-semibold">
                            Functional Versatility</span
                        > – OpenCore’s extensive integration capabilities meant they
                        could interface with any tax authority or system across seven
                        different countries. The platform’s document management features
                        allowed them to process, convert, sign, and store documents
                        with complete flexibility.
                    </li>
                    <li class="mb-4">
                        <span class="font-semibold"> Ease of Adoption </span> – Despite
                        having no prior experience with OpenCore, their developers
                        achieved results within weeks: “We started with two developers
                        who didn't know how to use it. It took us no more than a
                        week or two to get the first results”, Felix explained. He
                        also pointed out that the intuitive nature of the platform,
                        combined with its rapid adaptability to emerging technologies
                        like AI, has made it an invaluable tool for him and his team.
                    </li>
                </ol>
            </div>

            <div class="mb-10 lg:mb-16">
                <p class="text-[30px] font-medium mb-4">Results</p>
                <p class="mb-4">
                    The implementation of OpenCore transformed their invoicing
                    operations. The platform became the backbone of their global
                    invoicing system, handling between 20,000 to 40,000 invoices
                    per day with unparalleled efficiency. Felix told us that by
                    standardising reusable integration models with OpenCore, it
                    has significantly accelerated their deployment times: “When
                    we started the first integration, it took us (42 team
                    members) five months and today it takes between four to five
                    weeks to complete a full integration with only eight people
                    working on it”.
                </p>
                <p>
                    Beyond scalability, OpenCore dramatically improved
                    resilience. A real-world test of this occurred when one
                    country’s tax authority mistakenly blacklisted their IP
                    address. With no manual intervention required, OpenCore
                    automatically resumed operations once access was restored:
                    “As soon as this our IP was approved again by the authority,
                    our OpenCore system started again. Completely automatically.
                    We didn't have to change anything. We didn't have to touch
                    any documents. Everything restarted seamlessly.”
                    Collaboration also improved—not just internally, but across
                    affiliates—by systematically reducing recurring errors.
                    Intelligent retries and automated master data correction
                    minimised the burden on operations, creating a smooth,
                    self-restoring system: “Everyone of our team members has
                    seen the effect. There was no need to describe it. They see
                    that suddenly all the errors disappear on their own because
                    you try a document which works with the same master data”.
                    Felix elaborated, that this aspect of OpenCore has afforded
                    them complete trust in the software: “From this we have
                    obtained peace of mind which is incredible. Today we have
                    absolutely no doubt about our system: We let it run, it
                    works. It works like a very reliable machine.”
                </p>
            </div>
        </div>

        <div
            class="flex flex-col border-2 rounded-[20px] items-center justify-center w-full p-10"
        >
            <div class="text-center">
                <h1
                    class={"md:text-[24] lg:text-[50px] text-center font-bold mb-6 animate-fade-in mb-10" +
                        gradienttext}
                >
                    Ready to get started?
                </h1>
            </div>
            <p class="mb-10 text-[10px] lg:text-[16px]">
                Try OpenCore now for free
            </p>
            <HotkeyButton
                variant="success"
                onclick={() =>
                    window.open("https://app.openiap.io/ui/#/Login", "_blank")}
            >
                Try OpenCore
            </HotkeyButton>
        </div>
    </div>
</section>

<style>
    .container-rectangle {
        position: relative;
        text-align: center;
        color: white;
    }

    /* Top left text */
    .container {
        position: relative;
        text-align: center;
        color: white;
    }

    /* Top left text */
    .top-left {
        position: absolute;
        top: 10px;
    }

    /* Top right text */
    .top-right {
        position: absolute;
        top: 10px;
    }

    /* Centered text */
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
