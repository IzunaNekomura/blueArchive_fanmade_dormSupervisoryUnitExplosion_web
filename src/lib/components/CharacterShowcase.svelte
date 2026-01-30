<script lang="ts">
    import { Search, Grab } from "lucide-svelte";

    let activeTab = $state("mob1");
    let isInteracting = $state(false);

    function setTab(tab: string) {
        activeTab = tab;
        isInteracting = false;
    }
</script>

<section
    id="characters"
    class="py-20 bg-wildhunt-teal border-y-4 border-black text-white bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"
>
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-black text-center mb-12 font-outline">
            <span
                class="border-b-8 border-wildhunt-beige inline-block px-4 transform -rotate-1"
                >検問対象となる哀れなモブちゃんたち：</span
            >
        </h2>

        <div
            class="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto"
        >
            <!-- Interacitve Character Card -->
            <div
                class="flex-1 bg-white p-2 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_#000]"
            >
                <div
                    class="bg-slate-100 rounded-lg p-6 h-full flex flex-col items-center"
                >
                    <div class="flex gap-4 mb-6">
                        <button
                            onclick={() => setTab("mob1")}
                            class={`px-4 py-2 font-bold border-2 border-black rounded ${
                                activeTab === "mob1"
                                    ? "bg-wildhunt-beige text-black shadow-[2px_2px_0px_0px_#000]"
                                    : "bg-white text-wildhunt-grey"
                            }`}
                        >
                            生徒A
                        </button>
                        <button
                            onclick={() => setTab("mob2")}
                            class={`px-4 py-2 font-bold border-2 border-black rounded ${
                                activeTab === "mob2"
                                    ? "bg-yellow-400 text-black shadow-[2px_2px_0px_0px_#000]"
                                    : "bg-white text-slate-500"
                            }`}
                        >
                            生徒B
                        </button>
                    </div>

                    <!-- Image Display Area -->
                    <div
                        class="relative w-64 h-64 md:w-80 md:h-80 cursor-pointer outline-none"
                        role="button"
                        tabindex="0"
                        onclick={() => (isInteracting = !isInteracting)}
                        onkeydown={(e) => {
                            if (e.key === "Enter" || e.key === " ")
                                isInteracting = !isInteracting;
                        }}
                    >
                        <!-- Background Circle -->
                        <div
                            class={`absolute inset-0 bg-wildhunt-beige rounded-full transition-transform duration-300 border-4 border-dashed border-wildhunt-red ${
                                isInteracting ? "scale-100" : "scale-90"
                            }`}
                        ></div>

                        <!-- Normal State Image -->
                        <div
                            class={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
                                isInteracting ? "opacity-0" : "opacity-100"
                            }`}
                        >
                            {#if activeTab === "mob1"}
                                <div class="flex flex-col items-center h-full">
                                    <img
                                        src="/media/sprites/mob1_standing_v2.png"
                                        alt="Mob1 Standing"
                                        class="max-h-full object-contain drop-shadow-lg"
                                    />
                                    <div
                                        class="text-slate-400 text-xs mt-2 font-mono"
                                    >
                                        Click to Grab!
                                    </div>
                                </div>
                            {:else}
                                <div class="flex flex-col items-center h-full">
                                    <img
                                        src="/media/sprites/mob2_standing_v2.png"
                                        alt="Mob2 Standing"
                                        class="max-h-full object-contain drop-shadow-lg"
                                    />
                                </div>
                            {/if}
                        </div>

                        <!-- Drag State Image (Visible on Hover/Active) -->
                        <div
                            class={`absolute inset-0 flex items-center justify-center transition-all duration-200 pointer-events-none ${
                                isInteracting
                                    ? "opacity-100 rotate-12"
                                    : "opacity-0 -rotate-6"
                            }`}
                        >
                            {#if activeTab === "mob1"}
                                <div class="flex flex-col items-center h-full">
                                    <img
                                        src="/media/sprites/mob1_drag.png"
                                        alt="Mob1 Drag"
                                        class="max-h-full object-contain drop-shadow-2xl"
                                    />
                                </div>
                            {:else}
                                <div class="flex flex-col items-center h-full">
                                    <img
                                        src="/media/sprites/mob2_drag.png"
                                        alt="Mob2 Drag"
                                        class="max-h-full object-contain drop-shadow-2xl"
                                    />
                                </div>
                            {/if}
                        </div>

                        <!-- Interaction Guide -->
                        <div
                            class="absolute -bottom-4 right-0 bg-white border-2 border-black rounded-full p-2 animate-bounce"
                        >
                            <Grab size={24} />
                        </div>
                    </div>

                    <div class="mt-6 text-center">
                        <p class="font-bold text-slate-700 mb-2">
                            {activeTab === "mob1"
                                ? "おさげの生徒"
                                : "目隠れ生徒"}
                        </p>
                        <p
                            class="text-sm text-slate-500 bg-white p-2 rounded border border-slate-300"
                        >
                            見た目では判別がつかないモブちゃん。<br
                            />怪しい物品を隠し持っている可能性大。<br />
                            <span class="text-red-500 font-bold"
                                >クリック/タップで摘まんでみよう！</span
                            >
                        </p>
                    </div>
                </div>
            </div>

            <!-- Steps/Description -->
            <div class="md:w-1/3 flex flex-col gap-4">
                <div
                    class="bg-wildhunt-beige p-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_#000] flex items-center gap-4"
                >
                    <div
                        class="bg-white p-2 rounded-full border-2 border-black"
                    >
                        <Search size={32} />
                    </div>
                    <div class="text-slate-500">
                        <h3 class="font-black text-xl">持ち物検査</h3>
                        <p class="font-bold text-sm">クリックで持ち検！</p>
                    </div>
                </div>

                <div
                    class="flex-1 bg-white p-6 rounded-xl border-4 border-black flex flex-col justify-center items-center text-center shadow-[4px_4px_0px_0px_#000]"
                >
                    <p class="font-black text-xl mb-4 text-slate-500">
                        摘まんで左右に仕分け！
                    </p>
                    <p class="text-s mt-4 text-slate-500">
                        生徒はつまむもの・・・・・・<br
                        />無駄につまみたくなりますが、<br />時間制限に注意！
                    </p>
                    <div
                        class="flex w-full justify-between items-center text-2xl font-black gap-4"
                    >
                        <div class="text-red-500 flex flex-col items-center">
                            <span class="text-4xl">←</span>
                            退場
                        </div>
                        <div class="w-px h-16 bg-slate-300"></div>
                        <div
                            class="text-wildhunt-teal flex flex-col items-center"
                        >
                            <span class="text-4xl">→</span>
                            通過
                        </div>
                    </div>
                    <p class="text-xs mt-4 text-slate-500">
                        え？物みたいに扱うなって？<br
                        />何を今更言ってるんですか？<br
                        />いつも編成画面でみんなのことを<br
                        />つまんで振り回してるじゃないですか。
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
