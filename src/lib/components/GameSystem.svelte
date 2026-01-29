<script lang="ts">
    import { Search, MoveRight, AlertTriangle } from "lucide-svelte";
</script>

<section id="system" class="py-20 bg-slate-50 relative">
    <div class="absolute top-0 w-full h-4 bg-caution-tape"></div>
    <div class="container mx-auto px-4">
        <h2 class="text-4xl font-black text-center text-slate-800 mb-12">
            <span
                class="border-b-8 border-wildhunt-teal inline-block px-4 font-outline-sm text-white drop-shadow-[0_4px_0_#000]"
            >
                お仕事マニュアル
            </span>
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
            <!-- Step 1: Check -->
            <div
                class="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_#10b981] hover:-translate-y-2 transition-transform"
            >
                <div
                    class="h-40 flex items-center justify-center bg-emerald-50 rounded mb-6 border-2 border-dashed border-emerald-300 overflow-hidden relative group"
                >
                    <Search
                        size={80}
                        class="text-wildhunt-teal/50 group-hover:scale-110 transition-transform group-hover:text-wildhunt-teal"
                    />
                    <div
                        class="absolute bottom-2 right-2 bg-wildhunt-teal text-white font-bold text-xs px-2 py-1 border border-black"
                    >
                        CLICK TO INSPECT
                    </div>
                </div>
                <h3 class="text-2xl font-black mb-2 text-slate-800">
                    1. 所持品検査
                </h3>
                <p class="font-bold text-slate-600">
                    生徒をクリックしてアイテムを暴き出せ！<br
                    />制服のポケット、カバンの中、全部チェックだ！
                </p>
            </div>

            <!-- Step 2: Drag -->
            <div
                class="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_#facc15] hover:-translate-y-2 transition-transform"
            >
                <div
                    class="h-40 flex items-center justify-center bg-wildhunt-beige/30 rounded mb-6 border-2 border-dashed border-wildhunt-beige relative"
                >
                    <div
                        class="absolute w-20 h-20 bg-white rounded border-4 border-black flex items-center justify-center animate-wiggle shadow-lg cursor-grab active:cursor-grabbing"
                    >
                        <!-- <span class="text-4xl">😱</span> -->
                        <img
                            src="/media/sprites/mob1_drag.png"
                            alt="Mob1 Drag"
                            class="max-h-full object-contain"
                        />
                    </div>
                    <MoveRight
                        size={32}
                        class="absolute right-4 text-emerald-600"
                        strokeWidth={3}
                    />
                    <MoveRight
                        size={32}
                        class="absolute left-4 rotate-180 text-red-500"
                        strokeWidth={3}
                    />
                </div>
                <h3 class="text-2xl font-black mb-2 text-slate-800">
                    2. 高速仕分け
                </h3>
                <p class="font-bold text-slate-600">
                    <span class="text-wildhunt-red bg-red-100 px-1"
                        >左へポイッ</span
                    >で退場。<br />
                    <span class="text-wildhunt-teal bg-emerald-100 px-1"
                        >右へポイッ</span
                    >で通過許可。<br />
                    迷ってる暇はないぞ！
                </p>
            </div>

            <!-- Step 3: Explosion -->
            <div
                class="bg-white p-6 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_#ef4444] hover:-translate-y-2 transition-transform animate-shake"
            >
                <div
                    class="h-40 flex items-center justify-center bg-red-50 rounded mb-6 border-2 border-dashed border-red-300 relative overflow-hidden"
                >
                    <div
                        class="absolute inset-0 flex items-center justify-center animate-pulse-fast"
                    >
                        <AlertTriangle
                            size={90}
                            class="text-wildhunt-red"
                            strokeWidth={2.5}
                        />
                    </div>
                    <div
                        class="absolute bottom-0 w-full h-8 bg-orange-500 animate-[wiggle_0.1s_infinite] opacity-50"
                    ></div>
                </div>
                <h3 class="text-2xl font-black mb-2 text-red-600">
                    3. ミス＝爆発
                </h3>
                <p class="font-bold text-slate-600">
                    爆弾魔を通したり、無実の生徒から没収しすぎるとゲームオーバー。
                    <br /><span class="text-wildhunt-red font-black text-xl"
                        >ドカーン！！</span
                    >
                </p>
            </div>
        </div>
    </div>
</section>
