---
title: In To The Code!
date: 2016-01-29
tags: Ruby, PHP
class: blogpost
---

##In To The Code!
<img src="/images/codeacademy-ruby.png" />

<p>There i was, learning PHP in a DIY way..., I figured if half the web uses "WordPress" the PHP based platform, it might be the language that needs the most attention.</p>

<p>Looking back i'm so happy i was wrong about that one!!</p>

<p>In the first days of January 2016 a friend of mine told me about a development bootcamp in Amsterdam called Codaisseur, where they teach people to code, "It will only take about 5 to 7 weeks time and you will be able to code" he said. On top of that they would help me with getting a job as a Junior Developer, guide me during the job for 2 years until i reach a senior level.</p>
<p>At first it sounded to good to be true, I waited about 2 weeks, then i had to check it out, i send out an e-mail stating that i wanted to participate in the traineeship program.</p>

<p>Mr. W. de Vos of Codaisseur, told me there was only one spot still open and that if i wanted to participate i should at least be able to do the entire Ruby course on Codeacademy website in 48 hours to get a feeling of the intensity of the bootcamp, also because time was critical i did not have much time, the first traineeship would already start in 3 days, i only had about 24 hours left to do it, all i had was some basic php knowledge😳, non the less i didn't give up, now or never!</p>

<p>I huffed and puffed and stayed up all night, pulled it off and sent him the result in the morning.<br />
Next Stop Codaisseur Amsterdam 😁</p>
<br />
<br />
<p>Even tough the concepts are quite similar, PHP is a such a pain in the $@## 😏, compared to the friendly-ness and readability of Ruby. </p>
<p>Checkout some of these loop exercises i did on my own in PHP:</p>

<a href="http://webtotally.com/test.php">demo</a>

source:

```php
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>WebDesign Huiswerk Opdracht 38</title>
<?php
/*Style voor de tabellen*/
echo "<style>
.rij{clear:both;}.blokje {
display: inline-block;
width: 10px;
padding: 17px 22px;
border: solid 2px black;}
.rij2{clear:both;}
.blokje2 {
    display: inline-block;
    width: 200px;
    padding: 10px 10px;
    border: solid 1px black;
}
</style>"
?>
</head>

<body>
<h1> FOR loop tabel met vermenigvuldiging van 1 tot 10 </h1>
<?php

/*for loop tabel met vermenigvuldiging van 1 tot 10*/

for ($cijferX = 1; $cijferX <=10; $cijferX++){
	echo "<div class='rij'>";
	for ($cijferY = 1; $cijferY <=10; $cijferY ++){
	echo "<div class='blokje'>". $cijferX*$cijferY ."</div>";}
}
echo "</div>";
?>


<br/>
<br/>
<h1> While loop dat informatie genereert vanuit een 2D array in een tabel </h1>
<?php

/*While loop dat informatie genereert vanuit een 2D array in een tabel*/

$brd = array(
array("Saksen", "Dresden", "Zwinger-monument"),
array("Hessen", "Wiesbadden", "Kurhaus"),
array("Beieren", "München", "Paleis van Justitie")

);


$x=0;

while ($x <= count($brd) -1) {
echo "<div class='rij2'>";
	$y=0;

		while ($y <= count($brd) -1) {
			echo "<div class='blokje2'>" . $brd[$x][$y] . "</div>";
			$y++;

			}

	$x++;


	echo "</div>";
	}
	?>

<br/>
<br/>
<h1>FOR loop dat informatie genereert vanuit een 2D array in een tabel</h1>
<?php

/*FOR loop dat informatie genereert vanuit een 2D array in een tabel*/

$brd2 = array(
array("Saksen", "Dresden", "Zwinger-monument"),
array("Hessen", "Wiesbadden", "Kurhaus"),
array("Beieren", "München", "Paleis van Justitie")
);
echo "<div class='rij2'>";

for (
$x=0; $x <= sizeof($brd2) -1; $x++)
{

	for (
	$y=0; $y<=sizeof($brd2) - 1; $y++
	){
		echo "<div class='blokje2'>" . $brd2[$x][$y] . "</div>";}
		echo "</div>";
}

?>
<br/>
<br/>
</body>
</html>
```
