<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
	import Logo from "$lib/images/logo.svg";

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

<section class="py-4 px-4">
	<div class="container mx-auto">
		<div class="md:flex md:justify-between md:items-center md:align-middle">
			<HotkeyButton variant="ghostfull" onclick={() => goto(base + "/")} aria-label="Go to Home">
				<div class="flex items-center justify-center space-x-[15px]">
					<div class="justify-end">
						<img src={Logo} alt="Logo" />
					</div>
				</div>
			</HotkeyButton>
			<div
				class={`${isScreenSmall && "grid grid-cols-2 mt-4 space-y-2 text-center items-center "} ${isScreenSmallTab && "grid grid-cols-4 mt-4 space-y-2 text-center items-center "} ${isScreenMedium && "grid grid-cols-5 space-y-2 text-center items-center"}  ${isScreenLarge && "flex flex-row "} `}
			>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Home"
				>
					Home
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/usecases")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Use Cases"
				>
					Use Cases
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/pricing")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Pricing"
				>
					Pricing
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/partners")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Partners"
				>
					Partners
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/contact/view")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Contact"
				>
					Contact
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/telemetry")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Telemetry"
				>
					Telemetry
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/terms")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Terms & Conditions"
				>
					Terms & Conditions
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/privacy")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
					aria-label="Go to Privacy Policy"
				>
					Privacy Policy
				</HotkeyButton>
			</div>
		</div>
	</div>
</section>
