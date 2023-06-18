<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Range Input</title>
  </head>
  <body id='donations'>
    <section id="overlay">
      <img src="src\lib\images\Capture d'écran 2023-06-18 184132.png" alt="Davie's Burgers Logo" id="logo">
      <br>
      <form id='formulaire'>
        <h1>L'argent n'a pas de valeur réelle, alors donnez-le nous !</h1>
        <br>
        <br>
				<section class="name">
          <label for="name">Nom</label>
          <br>
          <br>

    			<input type="text" name="name" id="name">
        </section>
        <br>
        <br>

        <section class="email">
          <label for="email">Email</label>
          <br>
          <br>
          <input type="email" name="email" id="email">
					
          
        </section>
        <br>
        <br>

        <section class="don">
            <label for="don">Donate</label>
            <br>
            <br>
            <input type="number" name="don" id="don" step='10'>
                      
            
          </section>
          <br>
        <br>
        <section class='submission'>
        <input type="submit" id="bt" value="Save data to file" onclick="saveFile()">
    </section>
  


      </form>
    </section>
  </body>
</html>

<style>

    #logo{
	width: 400px;
	position: relative;
    display: block;
  margin-left: auto;
  margin-right: auto;
  top: 200px
}

</style>