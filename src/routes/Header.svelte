<script lang="ts">
	import { goto } from "$app/navigation";
	import { base } from "$app/paths";
	import { page } from "$app/state";
	import { HotkeyButton } from "$lib/components/ui/hotkeybutton";
	import Logo from "$lib/images/logo.svg";
	import { Github, Icon, Info, MenuIcon, Moon, Sun, X } from "lucide-svelte";
	import { toggleMode } from "mode-watcher";
	import { check } from "valibot";

	let isMenuOpen = $state(false);
	let currentPath = page.url.pathname;

	function checkPage(path: any) {
		currentPath = page.url.pathname;
		console.log("=> currentPath", currentPath);
		console.log("path", path);
		console.log("currentPath", currentPath);

		if (currentPath === "/") {
			currentPath = "/home";
		}

		if (currentPath.includes(path)) {
			return true;
		} else {
			return false;
		}
	}
	checkPage("sa");
</script>

<header class="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
	<div class="px-4 h-16 flex items-center justify-between">
		<HotkeyButton
			variant="ghostfull"
			onclick={() => goto(base + "/")}
			aria-label="Go to home page"
		>
			<div class="flex items-center justify-center space-x-[15px]">
				<div class="justify-end">
					<img src={Logo} alt="Logo" />
				</div>
				<div class="text-xl text-bw50 font-semibold items-center">
					OpenIAP
				</div>
			</div>
		</HotkeyButton>

		<nav class="hidden md:block me-12">
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/")}
				aria-label="Go to OpenCore page"
				class={`${checkPage("/home") && "underline decoration-2 underline-offset-4"}`}
			>
				OpenCore
			</HotkeyButton>
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/openrpa")}
				aria-label="Go to OpenRPA page"
				class={`${checkPage("/openrpa") && "underline decoration-2 underline-offset-4"}`}
			>
				OpenRPA
			</HotkeyButton>
			<HotkeyButton
				variant="link"
				onclick={() => goto(base + "/usecases")}
				aria-label="Go to use cases page"
				class={`${checkPage("/usecases") && "underline decoration-2 underline-offset-4"}`}
			>
				Use cases
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
				aria-label="Go to get in touch page"
				class={`${checkPage("/contact") && "underline decoration-2 underline-offset-4"}`}
			>
				Get in touch
			</HotkeyButton>
			<HotkeyButton
				variant="link"
				onclick={() => {
					goto("/pricing");
					isMenuOpen = false;
				}}
				aria-label="Go to pricing page"
				class={`${checkPage("/pricing") && "underline decoration-2 underline-offset-4"}`}
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

		<div class="hidden md:flex items-center">
			<HotkeyButton
				variant="ghostfull"
				size="icon"
				aria-label="Github"
				onclick={() =>
					window.open(
						"https://github.com/open-rpa",
						"_blank",
						"noopener,noreferrer",
					)}
			>
				<Github class="h-4 w-4" />
			</HotkeyButton>
			<HotkeyButton
				aria-label="Login"
				variant="link"
				class="hover-lift"
				onclick={() =>
					window.open(
						"https://app.openiap.io/ui",
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
					onclick={() => goto(base + "/")}
					aria-label="Go to OpenCore page"
				>
					OpenCore
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/openrpa")}
					aria-label="Go to OpenRPA page"
				>
					OpenRPA
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => goto(base + "/usecases")}
					aria-label="Go to use cases page"
				>
					Use cases
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
					aria-label="Go to get in touch page"
				>
					Get in touch
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() => {
						goto("/pricing");
						isMenuOpen = false;
					}}
					aria-label="Go to pricing page"
				>
					Pricing
				</HotkeyButton>
				<HotkeyButton
					variant="ghostfull"
					aria-label="Github"
					onclick={() =>
						window.open(
							"https://github.com/open-rpa",
							"_blank",
							"noopener,noreferrer",
						)}
				>
					<Github class="h-4 w-4" />
				</HotkeyButton>
				<HotkeyButton
					variant="link"
					onclick={() =>
						window.open(
							"https://app.openiap.io/ui",
							"_blank",
							"noopener,noreferrer",
						)}
					aria-label="Go to login page"
				>
					Login
				</HotkeyButton>
			</nav>
		</div>
	{/if}
</header>
