

<svelte:head>
	<title>Welcome to the best Rock Paper Scissors website ;of 2023</title>
	<meta name="description" content="Rock paper Scissors is the best game ever." />
</svelte:head>

<script>
	import { goto } from '$app/navigation';
  
	function startGame() {
	  goto('/game');
	}
  </script>
  
  <main class="flex flex-col items-center justify-center h-screen">
	<h1 class="text-3xl font-bold mb-4">Rock Paper Scissors</h1>
  
	<p class="text-xl text-center mb-4">
	  Welcome to the exciting world of Rock Paper Scissors! It's a classic game loved by people of all ages.
	  Challenge yourself and have fun playing against the computer.
	</p>
  
	<button
	  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	  on:click={startGame}
	>
	  Start Game
	</button>
  </main>