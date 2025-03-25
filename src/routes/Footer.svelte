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

<section
	class="pt-10 pb-16 mx-6 md:mx-10 lg:mx-20 xl:mx-32 xl:flex xl:justify-center"
>
	<div
		class={`w-full lg:max-w-[1700px] ${isScreenSmall && "grid grid-cols-2 mt-4 space-y-2 text-center items-center "} ${isScreenSmallTab && "grid grid-cols-4 mt-4 space-y-2 text-center items-center "} ${isScreenMedium && "grid grid-cols-5 space-y-2 text-center items-center"}  ${isScreenLarge && "flex flex-row justify-between"} `}
	>
		<div
			class={`${isScreenSmall && "col-span-2 "} ${
				isScreenSmallTab && "col-span-4 "
			} ${isScreenMedium && "col-span-5"}  ${isScreenLarge && ""}`}
		>
			<HotkeyButton
				variant="ghostfull"
				onclick={() => goto(base + "/")}
				aria-label="Go to Home"
			>
				<div class="flex items-center justify-center space-x-[15px]">
					<div class="justify-end">
						<img src={Logo} alt="Logo" />
					</div>
				</div>
			</HotkeyButton>
		</div>
		<HotkeyButton
			variant="link"
			onclick={() => goto(base + "/")}
			class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
			aria-label="Go to Home"
		>
			Home
		</HotkeyButton>
		<!-- <div class="flex flex-col justify-start items-start">
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/")}
				class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				aria-label="Go to Home"
			>
				Solutions
			</HotkeyButton>
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/")}
				class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				aria-label="Go to Home"
			>
				OpenCores
			</HotkeyButton>
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/")}
				class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				aria-label="Go to Home"
			>
				OpenRPA
			</HotkeyButton>
		</div> -->
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
			onclick={() => goto(base + "/contact")}
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
</section>
