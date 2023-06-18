<script>
	import welcome from '$lib/images/Begaudeau.webp';
	import welcome_fallback from '$lib/images/Begaudeau.gif';
	import nietzsche from '$lib/images/Nietzsche.webp';
	import nietzsche_fallback from '$lib/images/Nietzsche.gif';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="Booo">
			<picture>
				<source srcset={welcome} type="image/webp"   style="width: 388px; height: 225px; object-fit: cover; object-position: 100% 100%;"/>
				<img src={welcome_fallback} alt="Welcome"   style="width: 388px; height: 225px; object-fit: cover; object-position: 100% 100%;"/>
			</picture>
		</span>
		<span class="Super">
			<picture>
				<source srcset={nietzsche} type="image/webp" style="width: 380px; height: 413px; object-fit: cover; object-position: 100% 100%;"/>
				<img src={nietzsche_fallback} alt="Welcome" style="width: 380px; height: 413px; object-fit: cover; object-position: 100% 100%;"/>
			</picture>
		</span>

		<br>
		Cultive ta Santé,<br />et la Vertu suivra.
	</h1>
<br/>
<br/>
	<center>
	<h2>
		Temps écoulé avant le <br />prochain retour de cet instant<br /> que tu es en train de vivre :
	</h2>
	<br/>
	<h3>~57x10^4946 jours</h3>
	</center>

</section>

<style>
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
