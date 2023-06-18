<script>
    export let data;
    let { games } = data;
    $: ({ games } = data);
</script>

<ul>
    {#each games as {player_choice,computer_choice} }
    <li>The player played {player_choice}. The computer played {computer_choice}.</li>
    {/each}
</ul>