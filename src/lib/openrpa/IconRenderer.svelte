<script lang="ts">
    import {
        BookUser,
        Bot,
    } from "lucide-svelte";
    export let title: string;
</script>

{#if title == "Box"}
    <Bot />
{:else if title == "Settings"}
    <BookUser />
{/if}