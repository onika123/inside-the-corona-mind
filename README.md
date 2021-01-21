# Inside the Corona mind
Inside The Corona Mind is een platform waar mensen hun verhalen, meningen en alternatieven kunnen delen om zo anderen te kunnen inspireren

##### Sidenote
Het technische prototype is niet compleet, daarom heb ik bij de funcitonaliteiten die ik niet heb kunnen uitwerken een uitleg gegeven. De namen van de functionaliteiten komen overeen met de annotaties in de HTML.

## Data
Dit concept loopt voor op de data, en wordt tijdens gebruik gegenereerd. Er is bij dit prototype dan ook geen gebruik gemaakt van een dataset of module.

### Wordcloud uitleg
De HTML van de wordcloud bestaat uit meerdere divs waar de pop up in zit om je gegevens en foto up te loaden. Deze divs worden geactiveerd met CSS. D.m.v. .actieve. Met de JS is er de mogelijkheid om een foto up te loaden vanuit je bestanden die direct zichtbaar is in de gegeven container van de pop up. Deze foto zal zichtbaar moeten zijn in de wordcloud. Met een hover functie op een img is het de bedoeling dat er meer informatie wordt gegeven d.m.v. een pop up. Alle afbeeldingen van de wordcloud zijn op dit moment een img. De wordcloud zelf zou d.m.v. grids geplaatst kunnen worden. 


### Quote uitleg
De quote heeft geen hover functie en bevat voor nu niet meer informatie dan alleen de quote. Dus dit is dan een kwestie van HTML en CSS. 


### Kleurenkiezer
De kleurenkiezer heeft hetzelfde principe als de wordcloud. 


### Grafiek
De grafiek is een uitdaging omdat gebruikers ook zelf erin moeten kunnen tekenen. Omdat ik geen ervaring hierin heb, heb ik dit opgezocht over hoe ik het  zou kunnen aanpakken. Op stackoverflow heb ik het volgende antwoord gevonden: https://stackoverflow.com/questions/2368784/draw-on-html5-canvas-using-a-mouse

```
1. Attach a mousedown, mousemove, and mouseup event listener to the canvas DOM
2. on mousedown, get the mouse coordinates, and use the moveTo() method to position your drawing cursor and the beginPath() method to begin a new drawing path.
3. on mousemove, continuously add a new point to the path with lineTo(), and color the last segment with stroke().
4. on mouseup, set a flag to disable the drawing. 
```




### Optionele toevoeging: iedere gebruiker kan dit onderzoek een eigen titel geven
Doormiddel van de input te verzamelen in een array. Is het mogelijk om in de array een loop te gebruiken. Waardoor er elke x dat de pagina opnieuw laadt een andere titel zichtbaar zal zijn. Bijvoorbeeld: r = Math.floor((Math.random() * array.length)); nieuwetitels = titel[r]; in een functie. 
