const fonts = [
  "Alegreya",
  "Alegreya Sans",
  "Arvo",
  "Chelsea Market",
  "Crimson Text",
  "Domine",
  "Edu NSW ACT Foundation",
  "Edu SA Beginner",
  "Fira Sans",
  "Gentium Book Plus",
  "Lato",
  "Lora",
  "Merriweather",
  "Merriweather Sans",
  "Montserrat",
  "Open Sans",
  "Playfair Display",
  "Poppins",
  "PT Sans Narrow",
  "Quicksand",
  "Red Hat Display",
  "Roboto",
  "Roboto Slab",
  "Source Sans Pro",
  "Source Serif Pro",
  "Varela Round",
  "Anonymous Pro",
  "Arima",
  "Courier Prime",
  "Expletus Sans",
  "Fredoka One",
  "Indie Flower",
  "Lobster",
  "Lobster Two",
  "Poiret One",
  "PT Mono",
  "Ubuntu Mono",
];

let rt = document.getElementById("root");
for (let i = 0; i < fonts.length; i++) {
  rt.innerHTML =
    rt.innerHTML +
    `

    <fieldset>
    <legend>${fonts[i]}</legend>
    <div style=" font-family: '${fonts[i]}';">
    <p>a quick brown fox jumps over the lazy dog</p>
    <p>A QUICK BROWN FOX JUMPS OVER THE LAZY DOG</p>
    <p>0 1 2 3 4 5 6 7 8 9</p>
    </div>
    </fieldset>
    <br />
        `;
}
