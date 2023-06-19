<script>
	import pnf from '$lib/images/PNF.png';
    import buddha from '$lib/images/Bouddha.jpg';
    import cesar from '$lib/images/cesar.jpg';
    import macron from '$lib/images/macron.jpg';
    import mozart from '$lib/images/mozart.jpg';
    import nietzsche from '$lib/images/nietzsche.jpg';
    import schopi from '$lib/images/schopi.jpg';
    import socrate from '$lib/images/Socrate.jpg';
    import zemmour from '$lib/images/Zemmour.jpg';

    let name
    let email
    let score = 0
    let personality
    let resume
    let photo
    //function UpdateAnswer() {
        //score = document.querySelector(input[name="q1"]);
        //console.log(score)
    //}
if (score>18) {
    personality = "Tu es Friedrich Nietzsche !"
    photo = nietzsche
    resume = "La décadence et le nihilisme est le plus grand ennemi de l'humanité, tu le sais bien, et ton plus grand ennemi est toi-même !"
} else if (score>16) {
    personality = "Tu es Wolfgang Amadeus Mozart !"
    photo = mozart
    resume = "Oui, tu es décadent. Oui, tu fais honte à ton Dieu. Mais comme tu aimes la vie !"
} else if (score>14) {
    personality = "Tu es Eric Zemmour !"
    photo = zemmour
    resume = "Pas de bol..."
} else if (score>12) {
    personality = "Tu es Julius Caesar !"
    photo = cesar
    resume = "Tu aimes la guerre ! Tu aimes la gloire ! Mais s'élever au-dessus du reste du monde, ou faire décliner ce dernier, voilà deux choses à ne pas confondre..."
} else if (score>10) {
    personality = "Tu es Socrate !"
    photo = socrate
    resume = "Tout ce que tu sais c'est que tu ne sais rien. Et qui n'aime pas ce qu'il sait ?"
} else if (score>8) {
    personality = "Tu es Emmanuel Macron !"
    photo = macron
    resume = "Le monde a besoin d'être conforté dans ce qu'il est. Le temps est passé des grands rêves, de la construction de sociétés florissantes. Tu prépares le terrain pour l'homme de demain : le dernier homme."
} else if (score>6) {
    personality = "Tu es Arthur Schopenhauer !"
    photo = schopi
    resume = "La Terre est ronde, autant l'attendre ici..."
} else if (score>4) {
    personality = "Tu es Siddhārtha Buddha Gautama !"
    photo = buddha
    resume = "Tu vois le monde comme il est. Tu es en paix avec lui. Personne n'est plus décadent que toi, et personne ne l'acceptes autant que toi."
} else{
    personality = ""
    photo = ""
    resume = ""
}

</script>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Range Input</title>
  </head>
  <body>
    <section id="overlay">
        <center>
      <img src="src\lib\images\Thomas_Couture_003.jpg" alt="decadent" id="logo">
    </center>
      <form>
        <h1>Quel décadent êtes vous?</h1>
        <br>
        <br>
        <h2>Faîtes le test !</h2>
        <br>
        <br>
				<section class="q1">
                    <span>Aux élections présidentielles...</span>
                    <br>
                    <br>
                    <input type="radio" name="q1" id="hasard" value="1">
                    <label for="hasard">Tu choisis un bulletin au hasard, on est pas à ça près</label>
                    <br>
                    <input type="radio" name="q1" id="barrage" value="2">
                    <label for="barrage">On vote, surtout au deuxième tour, pour faire barrage...</label>                    
                    <br>
                    <input type="radio" name="q1" id="autorité" value="3">
                    <label for="autorité">Qui a le plus d'autorité aura mon vote !</label>
                    <br>
                    <input type="radio" name="q1" id="anarchie" value="4">
                    <label for="anarchie">Aucun changement ne viendra d'en haut, les vrais enjeux ne se jouent pas dans les urnes.</label>

                  </section>
        <br>
        <br>

        <section class="q2">
            <span>Le soir, avant de dormir...</span>
            <br>
            <br>
            <input type="radio" name="q2" id="paix" value="1">
            <label for="paix">Tu t'endors en paix, ignorant les souffrances de la vie</label>
            <br>
            <input type="radio" name="q2" id="mus" value="3">
            <label for="mus">Tu maudis le monde et les abrutis qui y vivent</label>                    
            <br>
            <input type="radio" name="q2" id="ordi" value="2">
            <label for="ordi">Tu es sur ton ordinateur jusqu'à 4h50</label>
            <br>
            <input type="radio" name="q2" id="suicide" value="4">
            <label for="suicide">Tu contemples le suicide, tu le mets au défi</label>

          </section>
<br>
<br>

<section class="q3">
    <span>Dans un débat...</span>
    <br>
    <br>
    <input type="radio" name="q3" id="doute" value="2">
    <label for="doute">Tu remets tout en question : on peut être sûr de rien...</label>
    <br>
    <input type="radio" name="q3" id="verite" value="1">
    <label for="verite">Les plus grandes vérités ne trouvent aucune place dans le débat</label>                    
    <br>
    <input type="radio" name="q3" id="engueule" value="3">
    <label for="engueule">On s'engueule jusqu'à ce qu'on oublie de quoi on parle !</label>
    <br>
    <input type="radio" name="q3" id="digne" value="4">
    <label for="digne">Seuls les plus dignes connaîtront mes vraies opinions</label>

  </section>
<br>
<br>

<section class="q4">
    <span>Ton livre préféré...</span>
    <br>
    <br>
    <input type="radio" name="q4" id="connu" value="2">
    <label for="connu">Un livre connu, comme ça je pourrai en parler à tout le monde et leur faire savoir combien je suis cultivé</label>
    <br>
    <input type="radio" name="q4" id="bible" value="3">
    <label for="bible">La Bible.</label>                    
    <br>
    <input type="radio" name="q4" id="snobe" value="4">
    <label for="snobe">Tu connaîtrais pas si je te disais le nom</label>
    <br>
    <input type="radio" name="q4" id="zen" value="1">
    <label for="zen">Le savoir ne vient pas de l'extérieur, tout ce dont nous avons besoin est en nous</label>

  </section>
<br>
<br>

<section class="q5">
    <span>L'univers finira...</span>
    <br>
    <br>
    <input type="radio" name="q5" id="nihil" value="1">
    <label for="nihil">Pas assez tôt</label>
    <br>
    <input type="radio" name="q5" id="chal" value="2">
    <label for="chal">Avec la mort thermique du cosmos, tout le monde le sait</label>                    
    <br>
    <input type="radio" name="q5" id="bout" value="3">
    <label for="bout">... et c'est moi qui en viendrai à bout !</label>
    <br>
    <input type="radio" name="q5" id="retour" value="4">
    <label for="retour">L'univers n'a pas de fin, la vie n'est qu'éternel retour</label>

  </section>
<br>
<br>

<section class='submission'>
            <input type="submit" id="bt" value="Save data to file" on:click={UpdateAnswer}>
            
        </section>
    
        <br>
        <br>
      </form>
      <br>
    </section>
    <br>
    <br>
    <br>

    <center>
    <div class="answer">
        {personality}
    </div>
    <div class="answer">
        <img src={photo}>
    </div>
    <div class="description">
        {resume}
    </div>
</center>
  </body>
</html>

<style>
    span {
        color: aliceblue;
        text-shadow:0cqh;
        box-shadow: inset;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: large;
    }

    label {
        color: aliceblue;

    }

    .answer {
        color: aliceblue;
        text-shadow:0cqh;
        box-shadow: inset;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: large;
    }

    .description {
        color: aliceblue;
        background-color: rgb(149, 149, 149);
    }

</style>