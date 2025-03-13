<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { Link } from "$lib/components/ui/breadcrumb";
	import Logo from "$lib/images/logo.png";

	let isScreenSmall = $state();
	let isScreenSmallTab = $state();
	let isScreenMedium = $state();
	let isScreenLarge = $state();

	$effect(() => {
		// Define a handler href check the window width

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
		// Add the resize event listener
		window.addEventListener("resize", handleResize);

		// Call the handler initially in case the screen is already small
		handleResize();

		// Clean up the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	});
</script>

<section class="py-4 px-4 border-t border-gradient-bg">
	<div class="container mx-auto">
		<div class="md:flex md:justify-between md:items-center md:align-middle">
			<div class="flex justify-center">
				<img src={Logo} width={120} alt="logo" />
			</div>
			<div
				class={`${isScreenSmall && "grid grid-cols-2 mt-4 space-y-2 text-center items-center "} ${isScreenSmallTab && "grid grid-cols-4 mt-4 space-y-2 text-center items-center "} ${isScreenMedium && "grid grid-cols-5 space-y-2 text-center items-center"}  ${isScreenLarge && "flex flex-row lg:space-x-10 md:space-x-2"} `}
			>
				<Link
					onclick={() => goto(base + "/")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Home
				</Link>
				<Link
					onclick={() => goto(base + "/solutions")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Solutions
				</Link>
				<Link
					onclick={() => goto(base + "/usecases")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Use Cases
				</Link>
				<Link
					onclick={() => goto(base + "/pricing")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Pricing
				</Link>
				<Link
					onclick={() => goto(base + "/partners")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Partners
				</Link>
				<Link
					onclick={() => goto(base + "/contact/view")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Contact
				</Link>
				<Link
					onclick={() => goto(base + "/telemetry")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Telemetry
				</Link>
				<Link
					onclick={() => goto(base + "/terms")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Terms & Conditions
				</Link>
				<Link
					onclick={() => goto(base + "/privacy")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Privacy Policy
				</Link>
			</div>
		</div>
		<p class="text-center md:text-start mt-6 md:mt-4 text-gray-500 text-sm">
			OpenIAP is automation made simple - and open source
		</p>
	</div>
</section>
