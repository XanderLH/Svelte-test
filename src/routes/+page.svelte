<script>
	import pnf from '$lib/images/PNF.png';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>



<section>
	<br>
	<img src={pnf} alt="PNFlogo" id="logo">
	<br/>
<br/>
	<center>
		<div class="presentation">
			<center>
				<br>

			<h2>Bienvenue sur le site officiel du Parti Nihiliste Français.</h2>
			<br>
			<br>
			<h4 >Nous luttons depuis le début de la civilisation pour en venir à sa fin
				<br>Depuis maintenant des générations, les penseurs, intellectuels, religieux, et tous les naïfs optimistes qui leur ressemblent, n'ont su se mettre d'accord sur rien si ce n'est qu'il ne fallait surtout pas "tomber" dans le nihilisme.
				<br>
				<br>Mais nous voyons aujourd'hui où cet optimisme béat nous mène, et oh comment il nous invite à nous voiler la face, à sourire quand il est temps de pleurer, à nous relever quand il est bien plutôt venu l'heure de sombrer.
				<br>
				<br>Voilà pourquoi nous avons décidé qu'il était de notre devoir de créer un parti qui relfèterait le réel, qui serait le seul parti représentant réellement ce que la population humaine est devenue. D'une espèce qui a su tantôt s'organiser afin de lutter ensemble pour un monde meilleur, nous voilà aujourd'hui une populace qui se complaît à défendre notre petit chez soi : le peu que nous avons, nous le garderons à tout prix.
				<br>
				<br>Voici venu le temps du parti qui représentera ce que nous sommes.
				<br>
				<br>C'est la fin d'une ère, oui, mais il n'est point de raison de pleurer. Célébrons tout ce que nous avons pu accomplir, et attendons patiemment le néant qui nous attend.
			</h4>
			<br>

		</center>
		</div>
		<br>
		<center>
		<div>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe width="854" height="480" src="https://www.youtube.com/embed/3SwQHIBNI90">
			</iframe>
		</div></center>

	</center>

</section>



<style>

	.presentation{
		background-color: blue;
		min-width: 100%;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	h4 {
		color: white;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
