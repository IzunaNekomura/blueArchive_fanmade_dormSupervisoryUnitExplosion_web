<script lang="ts">
    import { BookOpen, AlertTriangle } from "lucide-svelte";
</script>

<section id="story" class="py-20 bg-wildhunt-black relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
        <!-- Section Header -->
        <div class="flex justify-center mb-16">
            <h2
                class="text-5xl md:text-6xl font-black text-white italic tracking-tighter drop-shadow-[5px_5px_0px_#C0392B] transform -rotate-2"
            >
                STORY
                <span
                    class="text-wildhunt-teal text-3xl ml-2 font-bold not-italic"
                    >ストーリー</span
                >
            </h2>
        </div>

        <div class="max-w-4xl mx-auto">
            <div
                class="bg-white border-4 border-wildhunt-beige p-8 pt-16 md:p-12 shadow-[12px_12px_0px_0px_#C0392B] relative transform rotate-1"
            >
                <!-- Decorative Icon -->
                <div
                    class="absolute -top-10 -left-6 bg-wildhunt-teal text-white p-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] rotate-[-5deg]"
                >
                    <BookOpen size={48} />
                </div>

                <div
                    class="space-y-6 text-slate-800 text-lg md:text-xl font-medium leading-relaxed"
                >
                    <p
                        class="font-bold text-2xl mb-4 border-b-4 border-wildhunt-beige pb-2 inline-block"
                    >
                        「先生、また金欠ですか？」
                    </p>

                    <p>
                        度重なる不運（と散財）により、今月も所持金がピンチな<span
                            class="font-black text-wildhunt-red"
                            >先生（あなた）</span
                        >。
                        そんなときに見つけたのは、芸術と狂気が入り混じる場所、
                        <span class="font-bold text-wildhunt-teal"
                            >ワイルドハント芸術学院</span
                        >での短期アルバイトだった。
                    </p>

                    <div
                        class="bg-slate-100 p-6 border-l-8 border-wildhunt-black my-6"
                    >
                        <p class="font-black text-xl mb-2">
                            業務内容：校門での所持品検査
                        </p>
                        <p class="text-slate-600">
                            登校してくる生徒たちのカバンの中身をチェックし、
                            <span class="text-red-600 font-bold">危険物</span>や
                            <span class="text-red-600 font-bold"
                                >違法な芸術品</span
                            >を没収すること。
                        </p>
                    </div>

                    <p>
                        簡単そうに見える仕事だが、彼女たちはただの生徒ではない。
                        持ち込まれるのは画材だけとは限らないのだ。
                        銃火器、謎の薬品、そして導火線のついた……<span
                            class="font-black text-wildhunt-red text-2xl inline-block animate-pulse"
                            >爆弾！？</span
                        >
                    </p>

                    <p>
                        瞬時の判断が生死を分ける！
                        寮監隊と協力（？）して、今日も学院の平和を守り抜け！
                        <br />
                        <span class="text-sm text-slate-500 mt-2 block"
                            >※爆発四散しても労災は出ません。</span
                        >
                    </p>
                </div>

                <!-- Warning Tape Decoration at bottom -->
                <div
                    class="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-4 py-2 border-4 border-black font-black flex items-center gap-2 transform -rotate-3 shadow-lg"
                >
                    <AlertTriangle size={24} />
                    CAUTION: EXPLOSIVE CONTENT
                </div>
            </div>
        </div>
    </div>

    <!-- Background Patterns -->
    <div
        class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
    >
        <div
            class="w-full h-full"
            style="background-image: repeating-linear-gradient(45deg, #000 0, #000 20px, transparent 20px, transparent 40px); opacity: 0.2"
        ></div>
    </div>
</section>
