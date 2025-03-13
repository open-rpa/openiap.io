<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { Link } from "$lib/components/ui/breadcrumb";
	import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
	import Backgound from "$lib/images/backgound.png";
	import Logo from "$lib/images/logo.png";
	import { Github, Icon, MenuIcon, Moon, Sun, X } from "lucide-svelte";
	import { toggleMode } from "mode-watcher";

	let isMenuOpen = $state(false);
</script>

<header
	class="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-800"
>
	<div class="container mx-auto px-4 h-16 flex items-center justify-between">
		<div class="flex items-center w-200">
			<Link
				href="/"
				class="flex flex-row justify-center items-center align-middle"
			>
				<div class="h-full">
					<img src={Backgound} width={34} alt="Background" />
				</div>
				<div class="mx-2 lg:ms-4 h-10 h-full">
					<img src={Logo} width={120} alt="Logo" />
				</div>
			</Link>
		</div>

		<div class="hidden md:flex items-center align-middle">
			<nav class="flex lg:space-x-8 space-x-2">
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
					onclick={() => goto(base + "/pricing")}
					class="text-gray-300 hover:text-white transition-colors underline-offset-4 hover:underline"
				>
					Pricing
				</Link>
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
				<HotkeyButton
					class="hover-lift"
					onclick={() => goto("/contact/view")}
				>
					Get In Touch
				</HotkeyButton>
				<HotkeyButton
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
		</div>

		<HotkeyButton
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
		(
		<div
			class="md:hidden absolute w-full bg-background border-b border-gray-800 animate-fade-in"
		>
			<nav class="container mx-auto px-4 py-4 flex flex-col space-y-4">
				<Link
					href="/"
					class="text-gray-300 hover:text-white transition-colors"
					onclick={() => (isMenuOpen = false)}
				>
					Home
				</Link>
				<Link
					href="/solutions"
					class="text-gray-300 hover:text-white transition-colors"
					onclick={() => (isMenuOpen = false)}
				>
					Solutions
				</Link>
				<Link
					href="/pricing"
					class="text-gray-300 hover:text-white transition-colors"
					onclick={() => (isMenuOpen = false)}
				>
					Pricing
				</Link>
				<span
					class="text-gray-300 hover:text-white transition-colors cursor-pointer"
					onclick={() =>
						window.open(
							"https://docs.openiap.io/",
							"_blank",
							"noopener,noreferrer",
						)}
				>
					Docs
				</span>
				<Icon icon="ri:github-fill" width={30} />
				<HotkeyButton
					class="w-full"
					onclick={() => {
						goto("/contact/view");
						isMenuOpen = false;
					}}
				>
					Get In Touch
				</HotkeyButton>
				<HotkeyButton
					class="w-full"
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
		)
	{/if}
</header>
