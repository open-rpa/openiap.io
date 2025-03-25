<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
	import Logo from "$lib/images/logo.svg";
	import { Icon, MenuIcon, Moon, Sun, X } from "lucide-svelte";
	import { toggleMode } from "mode-watcher";

	let isMenuOpen = $state(false);
</script>

<header class="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
	<div class="px-4 h-16 flex items-center justify-between">
		<HotkeyButton variant="ghostfull" onclick={() => goto(base + "/")} aria-label="Go to Home">
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
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/usecases")}
				aria-label="Go to Use Cases"
			>
				Use Cases
			</HotkeyButton>
			<!-- <HotkeyButton
				variant="link"
				onclick={() =>
					window.open(
						"https://docs.openiap.io/",
						"_blank",
						"noopener,noreferrer",
						)}
				aria-label="Open Documentation"
			>
				Docs
			</HotkeyButton> -->
			<HotkeyButton
				variant="link"
				onclick={() => {
					goto("/contact");
					isMenuOpen = false;
				}}
				aria-label="Get In Touch"
			>
				Get In Touch
			</HotkeyButton>
			<HotkeyButton
					variant="link"
					onclick={() => {
						goto("/pricing");
						isMenuOpen = false;
					}}
					aria-label="Get In Touch"
				>
					Pricing
				</HotkeyButton>
		</nav>
		<!-- <div class="ms-4">
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
			aria-label="Toggle Menu"
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
					onclick={() => goto(base + "/usecases")}
					aria-label="Go to Use Cases"
				>
					Use Cases
				</HotkeyButton>
				<!-- <HotkeyButton
					variant="link"
					onclick={() =>
						window.open(
							"https://docs.openiap.io/",
							"_blank",
							"noopener,noreferrer",
						)}
					aria-label="Open Documentation"
				>
					Docs
				</HotkeyButton> -->
				<HotkeyButton
					variant="link"
					onclick={() => {
						goto("/contact");
						isMenuOpen = false;
					}}
					aria-label="Get In Touch"
				>
					Get In Touch
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => {
						goto("/pricing");
						isMenuOpen = false;
					}}
					aria-label="Get In Touch"
				>
					Pricing
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() =>
						window.open(
							"https://app.openiap.io/",
							"_blank",
							"noopener,noreferrer",
						)}
					aria-label="Login"
				>
					Login
				</HotkeyButton>
			</nav>
		</div>
	{/if}
</header>
