<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
	import Logo from "$lib/images/logo.svg";
	import { Icon, MenuIcon, X } from "lucide-svelte";

	let isMenuOpen = $state(false);
</script>

<header class="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
	<div class="px-4 h-16 flex items-center justify-between">
		<HotkeyButton variant="ghostfull" onclick={() => goto(base + "/")}>
			<div class="flex items-center justify-center space-x-[15px]">
				<div class="justify-end">
					<img src={Logo} alt="Logo" />
				</div>
				<div class="text-xl text-bw50 font-semibold items-center">
					OpenIAP
				</div>
			</div>
		</HotkeyButton>
		<nav class="hidden md:flex md:space-x-2 space-x-2">
			<!-- <HotkeyButton variant="link" onclick={() => goto(base + "/")}>
				Home
			</HotkeyButton> -->
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/solutions")}
			>
				Solutions
			</HotkeyButton>
			<!-- <HotkeyButton
				variant="link"
				onclick={() => goto(base + "/pricing")}
			>
				Pricing
			</HotkeyButton> -->
			<HotkeyButton
				variant="link"
				onclick={() =>
					window.open(
						"https://docs.openiap.io/",
						"_blank",
						"noopener,noreferrer",
					)}
			>
				Docs
			</HotkeyButton>
			<HotkeyButton
				variant="link"
				onclick={() => {
					goto("/contact/view");
					isMenuOpen = false;
				}}
			>
				Get In Touch
			</HotkeyButton>
		</nav>

		<!-- <div class="hidden md:flex items-center align-middle">
			<nav class="flex lg:space-x-8 space-x-2">
				<HotkeyButton
					onclick={() => goto(base + "/")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
				>
					Home
				</HotkeyButton>
				<HotkeyButton
					onclick={() => goto(base + "/solutions")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
				>
					Solutions
				</HotkeyButton>
				<HotkeyButton
					onclick={() => goto(base + "/pricing")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline cursor-pointer"
				>
					Pricing
				</HotkeyButton>
				<span
					class="text-gray-300 hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
					onclick={() =>
						window.open(
							"https://docs.openiap.io/",
							"_blank",
							"noopener,noreferrer",
						)}
				>
					Docs
				</span>
			</nav>
			<div class="ms-4">
				<HotkeyButton
					onclick={toggleMode}
					variant="headericon"
					size="icon"
					aria-label="Toggle Theme"
				>
					<Sun
						class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
					/>
					<Moon
						class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
					/>
					<span class="sr-only">Toggle theme</span>
				</HotkeyButton>
			</div>
			<div class="ms-4 flex space-x-2 items-center align-middle">
				<Github
					width={30}
					class="cursor-pointer"
					onclick={() =>
						window.open(
							"https://github.com/open-rpa/",
							"_blank",
							"noopener,noreferrer",
						)}
				/>
				</div>
		</div> -->

		<div class="hidden md:flex">
			<HotkeyButton
				aria-label="Login"
				variant="link"
				class="hover-lift"
				onclick={() =>
					window.open(
						"https://app.openiap.io/",
						"_blank",
						"noopener,noreferrer",
					)}
			>
				Login
			</HotkeyButton>
		</div>

		<HotkeyButton
			variant="link"
			class="md:hidden"
			onclick={() => (isMenuOpen = !isMenuOpen)}
		>
			{#if isMenuOpen == true}
				<X class="h-6 w-6" />
			{:else}
				<MenuIcon class="h-6 w-6" />
			{/if}
		</HotkeyButton>
	</div>

	{#if isMenuOpen}
		<div
			class="md:hidden absolute w-full bg-background border-b border-gray-800 animate-fade-in"
		>
			<nav class="container mx-auto px-4 py-4 flex flex-col space-y-4">
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/solutions")}
				>
					Solutions
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() =>
						window.open(
							"https://docs.openiap.io/",
							"_blank",
							"noopener,noreferrer",
						)}
				>
					Docs
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => {
						goto("/contact/view");
						isMenuOpen = false;
					}}
				>
					Get In Touch
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() =>
						window.open(
							"https://app.openiap.io/",
							"_blank",
							"noopener,noreferrer",
						)}
				>
					Login
				</HotkeyButton>
			</nav>
		</div>
	{/if}
</header>
