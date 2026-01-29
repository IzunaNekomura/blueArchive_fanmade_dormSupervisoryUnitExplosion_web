<script lang="ts">
    import { Menu, Volume2 } from "lucide-svelte";

    let isMenuOpen = $state(false);

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<nav
    class="fixed top-0 w-full z-50 bg-wildhunt-black/95 backdrop-blur-md border-b-4 border-wildhunt-teal shadow-xl"
>
    <div class="container mx-auto px-4 h-16 flex justify-between items-center">
        <!-- Logo -->
        <div class="flex items-center gap-2 group cursor-pointer">
            <div
                class="w-10 h-10 bg-wildhunt-beige rounded flex items-center justify-center text-white font-black border-2 border-white group-hover:rotate-12 transition-transform"
            >
                <img
                    src="/media/misc/wildhunt_logo.png"
                    alt="WildhuntLogo"
                    class="w-full h-full"
                />
            </div>
            <h1
                class="text-xl md:text-2xl font-black tracking-tighter text-white italic"
            >
                <span class="text-wildhunt-beige">寮監隊</span>
                <span
                    class="text-wildhunt-red text-shadow-md ml-1 inline-block animate-pulse-fast"
                    >爆発</span
                >
                <span class="text-wildhunt-red">四散!</span>
            </h1>
        </div>

        <!-- Desktop Menu -->
        <div
            class="hidden md:flex gap-6 font-bold text-wildhunt-beige items-center"
        >
            <a href="#story" class="hover:text-emerald-400 transition-colors"
                >ストーリー</a
            >
            <a
                href="#characters"
                class="hover:text-emerald-400 transition-colors">キャラクター</a
            >
            <a href="#system" class="hover:text-emerald-400 transition-colors"
                >ゲームシステム</a
            >
            <!-- <button
                class="bg-wildhunt-beige hover:bg-white text-black px-4 py-1 rounded border-2 border-black shadow-[4px_4px_0px_0px_#C0392B] transition-transform active:translate-y-1 active:shadow-none flex items-center gap-2 transform rotate-1 hover:rotate-0"
            >
                <Volume2 size={18} /> BGM ON
            </button> -->
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="md:hidden text-white" onclick={toggleMenu}>
            <Menu size={32} />
        </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    {#if isMenuOpen}
        <div
            class="md:hidden bg-slate-900 border-t-4 border-emerald-700 p-4 flex flex-col gap-4 font-bold text-white shadow-xl"
        >
            <a href="#story" class="hover:text-emerald-400">ストーリー</a>
            <a href="#system" class="hover:text-emerald-400">ゲームシステム</a>
            <a href="#characters" class="hover:text-emerald-400">キャラクター</a
            >
            <!-- <button
                class="bg-yellow-400 text-black px-4 py-2 rounded border-2 border-black flex items-center justify-center gap-2"
            >
                <Volume2 size={18} /> BGM ON
            </button> -->
        </div>
    {/if}
</nav>
