<script>
function Home() {
    const asciiArt = `
.      *       .       *    .
      /\\        .    *      .
.       /  \\   /\\       *         *
    /    \\_/  \\  *       .      .
*        /          \\   .   /\\    .
  /  /\\        \\    /  \\       *
.     /  /  \\   /\\   \\  /    \\    *
/  /    \\_/  \\   \\/      \\     .
*     /  /           \\          \\    *
/  /             \\          \\     
/\\_/  /               \\          \\_/\\   
/     /                 \\            \\    
/     /                   \\            \\
/_____/                     \\____________\\

    .    *           *       .      *
*          .   *    .       .       *  
  .   *        *       .     *
*        *  .        *        *  .
      *        .     .       *
    `;
    document.getElementById("app").innerHTML = `<pre class="ascii-art">${asciiArt}</pre>`;
}

// Call the Home function to render the ASCII art
Home();
</script>