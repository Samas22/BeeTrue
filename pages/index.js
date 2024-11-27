import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const asciiArt = `
  _______________________
      |,_,_,_,_,_,_,_,_,_,_,_/|
      \\( (_(_(_(_(_(_(_( ( (/ /
     ( \\|_____________/|) )/ /|
      )   | |        //) )/ / |
     ( )  | |       //) )/_/|_|____
      (   | |      //)_)_,_,_,_,_,/|
     ) (  | |     //(_(_(_(_( ( (/ /
      )   | |    |_________/|) )/ /|
     ( )  |_|     | |     //) )/ / |
 _____(___________|_|____//) )/ /| |
|____)_(_,_,_,_,_,_,_,_,|/) )/ / | |
 \\  _)_)_)_)_)_)_)_)_)_)_)_)/ /  | |
  \\|________________________|/   | |
    | |           |_|    | |     |_|
    | |                  | |
    | |                  | |
    | |                  | |   -MJR
    | |                  | |
    |_|                  |_|

.......`;
    document.getElementById("ascii-art").innerHTML = `<pre class="ascii-art">${asciiArt}</pre>`;
  }, []);

  return (
    <div>
      <Head>
        <title>My NODE NEXT REACT App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style jsx>{`
        .ascii-art {
          font-family: monospace;
          white-space: pre;
          line-height: 1.2;
        }
      `}</style>
      <h1>Hello, There!</h1>
      <div id="ascii-art"></div>
    </div>
  );
}
