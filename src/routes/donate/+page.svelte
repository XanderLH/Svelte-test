<script>
	import pnf from '$lib/images/PNF.png';
    let name
    let email
    let donations = 568
    let money = 48950
    function UpdateDonations() {
        donations += 1
        let jimmy = document.getElementById("don").value
        money += Number(jimmy)
    }

</script>


<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
    <title>Range Input</title>
  </head>
  <body id='donations'>
    <section id="overlay">
      <img src={pnf} alt="Davie's Burgers Logo" id="logo">
      <br>
      <form id='formulaire'>
        <h1>L'argent n'a pas de valeur réelle, alors donnez-le nous !</h1>
        <div class="container1">
        <h6>{donations}</h6>
        <h7>donations have already been made</h7>
    </div>
    <div class="container2">
        <h8>{money}€</h8>
        <h9>have been donated</h9>
    </div>

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
        <input type="submit" id="bt" value="Save data to file" on:click={UpdateDonations}>
        
    </section>
  
    <br>
    <br>

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
  top: 80px
}

.container1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:absolute;
  right: 500px;
  top: 350px;
  width: 200px;
}

.container2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:absolute;
  right: -250px;
  top: 350px;
}


h6 {
    position: relative;
    top: -70px;
    color: rgb(21, 5, 36);
    font-size: 3rem;
	font-family: Fantasy;
	border-radius: 10px;
}

h7 {
    font-size: large;
    font:700;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(21, 5, 36);
}

h8 {
    position: relative;
    top: -70px;
    color: rgb(241, 225, 255);
    font-size: 3rem;
	font-family: Fantasy;
	border-radius: 10px;

}


h9 {
    font-size: large;
    font:700;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: rgb(241, 225, 255);
    position: relative;
    top: -50px
}



</style>