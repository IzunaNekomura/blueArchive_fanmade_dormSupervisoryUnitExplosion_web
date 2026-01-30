<script lang="ts">
    import { X } from "lucide-svelte";

    const contrabandItems = [
        { name: "明太子ポテチ", reason: "食品安全基準違反", risk: "LOW" },
        {
            name: "ペロロ様人形",
            reason: "外交的抗議により持込不可",
            risk: "MEDIUM",
        },
        { name: "パイナップル", reason: "検問員の個人的な恨み", risk: "LOW" },
        { name: "偽装陶器爆弾", reason: "芸術は爆発だ！", risk: "DANGER" },
    ];
</script>

<section
    class="py-20 bg-wildhunt-teal border-y-4 border-black relative overflow-hidden"
>
    <!-- Background Pattern -->
    <div
        class="absolute inset-0 opacity-20"
        style="background-image: radial-gradient(#000 2px, transparent 2px); background-size: 20px 20px;"
    ></div>

    <div class="container mx-auto px-4 relative z-10">
        <div
            class="bg-white rounded border-4 border-black p-8 shadow-[12px_12px_0px_0px_#374151]"
        >
            <h2
                class="text-3xl font-black text-center mb-8 flex items-center justify-center gap-3"
            >
                <X size={48} class="text-wildhunt-red" strokeWidth={4} />
                <span
                    class="font-outline-sm text-white drop-shadow-[2px_2px_0_#000]"
                    >本日の没収対象</span
                >
                <X size={48} class="text-wildhunt-red" strokeWidth={4} />
            </h2>

            <div class="grid md:grid-cols-2 gap-4">
                {#each contrabandItems as item}
                    <div
                        class="flex items-center gap-4 p-4 bg-slate-50 rounded border-2 border-slate-300 hover:border-red-500 transition-colors cursor-help group border-sketchy"
                    >
                        <div
                            class="w-16 h-16 bg-slate-200 rounded shrink-0 flex items-center justify-center text-3xl group-hover:animate-bounce border-2 border-slate-400"
                        >
                            📦
                        </div>
                        <div>
                            <h4 class="font-black text-lg text-wildhunt-black">
                                {item.name}
                            </h4>
                            <p class="text-sm text-wildhunt-red font-bold">
                                {item.reason}
                            </p>
                        </div>
                        <div
                            class={`ml-auto px-2 py-1 rounded text-xs font-black border-2 border-black transform
                        rotate-2 ${
                            item.risk === "DANGER"
                                ? "bg-red-600 text-white animate-pulse"
                                : "bg-yellow-300 text-black"
                        }`}
                        >
                            {item.risk}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
