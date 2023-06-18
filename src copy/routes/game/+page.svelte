<script>
    import { supabase } from "$lib/supabaseClient";
    let playerChoice = "";
    let computerChoice = "";
    let result = "";
  
    const choices = ["Rock", "Paper", "Scissors"];
  
    async function playGame(choice) {
      playerChoice = choice;
      computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
      if (playerChoice === computerChoice) {
        result = "It's a tie!";
      } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        result = "You win!";
      } else {
        result = "Computer wins!";
      }
      const { error } = await supabase.from("games").insert({
        player_choice:playerChoice,
        computer_choice:computerChoice
      })

      console.log(error);
    }
  </script>
  
  <main class="flex flex-col items-center justify-center h-screen">
    <h1 class="text-3xl font-bold mb-4">Rock Paper Scissors</h1>
  
    <div class="mb-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => playGame("Rock")}
      >
        Rock
      </button>
  
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => playGame("Paper")}
      >
        Paper
      </button>
  
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        on:click={() => playGame("Scissors")}
      >
        Scissors
      </button>
    </div>
  
    {#if result}
      <div class="text-2xl font-bold">
        <p>Player: {playerChoice}</p>
        <p>Computer: {computerChoice}</p>
        <p>{result}</p>
      </div>
    {/if}
  </main>