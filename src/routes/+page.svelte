<script lang="ts">
    import App from "./+page.svelte"; // Correction: No, we are IN +page.svelte
    import Hero from "$lib/components/Hero.svelte";
    import Story from "$lib/components/Story.svelte";
    import CharacterShowcase from "$lib/components/CharacterShowcase.svelte";
    import GameSystem from "$lib/components/GameSystem.svelte";
    import ContrabandList from "$lib/components/ContrabandList.svelte";
</script>

<svelte:head>
    <title>寮監隊爆発四散! - Official Website</title>
    <meta
        name="description"
        content="先生、また金欠ですか？ワイルドハント芸術学院の超・厳格検問バイトで稼ごう！ブルーアーカイブ二次創作ゲーム「寮監隊爆発四散!」公式サイト。"
    />
</svelte:head>

<Hero />
<Story />
<CharacterShowcase />
<GameSystem />
<ContrabandList />
