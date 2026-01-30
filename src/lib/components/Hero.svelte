<script lang="ts">
    import { Bomb, DollarSign, ExternalLink } from "lucide-svelte";
</script>

<header
    class="relative pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
>
    <!-- Background Decoration -->
    <div class="absolute top-24 right-10 opacity-30 animate-wiggle">
        <Bomb size={240} class="text-slate-800" />
    </div>
    <div class="absolute bottom-10 left-10 opacity-30 animate-float">
        <DollarSign size={180} class="text-yellow-500 drop-shadow-md" />
    </div>

    <!-- Badge -->
    <div
        class="bg-wildhunt-teal text-white font-bold px-6 py-2 border-4 border-black -rotate-3 mb-8 shadow-[6px_6px_0px_0px_#000] z-10"
    >
        ＊このゲームは「ブルーアーカイブ」の二次創作です。<br /><span
            class="text-wildhunt-red font-outline"
            >『 圧 倒 的 非 公 式 作 品 』です。</span
        >
    </div>

    <!-- Main Title Area -->
    <div class="relative z-10 mb-8 p-4">
        <h1
            class="text-6xl md:text-8xl font-black leading-none drop-shadow-xl transform -rotate-2"
        >
            <div class="flex flex-col md:block">
                <span class="text-wildhunt-black font-outline tracking-tight"
                    >寮監隊</span
                >
                <span
                    class="text-wildhunt-red font-outline tracking-tight md:ml-4 animate-pulse-fast inline-block"
                    >爆発四散!</span
                >
            </div>
        </h1>
    </div>

    <p
        class="text-lg md:text-2xl font-black text-wildhunt-black max-w-3xl mb-12 bg-white/90 p-6 rounded-sm border-4 border-black shadow-[8px_8px_0px_0px_#374151]"
    >
        先生、また金欠ですか？<br />
        そうだ、<span class="text-wildhunt-teal">ワイルドハント芸術学院</span
        >の<br /><span
            class="text-wildhunt-red underline decoration-4 decoration-wildhunt-beige"
            >超・厳格検問バイト</span
        >で稼ごう！
    </p>

    <!-- Main Action Button -->
    <button
        class="group relative bg-wildhunt-red hover:bg-wildhunt-red/90 text-white text-3xl font-black py-6 px-16 rounded-lg border-4 border-black shadow-[10px_10px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[14px_14px_0px_0px_#000] active:translate-y-2 active:shadow-none rotate-1"
    >
        <span class="flex items-center gap-4 font-outline-sm">
            検問開始!
            <ExternalLink
                class="group-hover:rotate-12 transition-transform"
                strokeWidth={3}
            />
        </span>
        <div
            class="absolute -top-4 -right-4 bg-wildhunt-beige text-black text-sm font-bold px-3 py-1 border-2 border-black animate-bounce rotate-12"
        >
            ON STEAMの予定（未定）!
        </div>
    </button>

    <!-- Caution Tape -->
    <div
        class="mt-16 w-full max-w-5xl h-12 bg-black rounded overflow-hidden border-4 border-black relative shadow-xl transform -rotate-1"
    >
        <div
            class="caution-tape w-[120%] h-full animate-[wiggle_3s_linear_infinite] -ml-4"
        ></div>
        <div
            class="absolute inset-0 flex items-center justify-center text-white bg-black/50 font-black tracking-widest text-lg md:text-xl"
        >
            DANGER: EXPLOSIVES DETECTED // 危険物持ち込み禁止
        </div>
    </div>
</header>
