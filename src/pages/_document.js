import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta
            name="description"
            content="Site Officiel du Club de Scrabble de Braine-l'Alleud"
          />
          <meta
            name="keywords"
            content="Scrabble Belgique, Club Braine-l'Alleud ,Duplicate ,Classique ,Compétitions ,Fédération Belge ,Fédération internationale, Clubs belges de scrabble, festival de Braine, club championnat, interclubs de Belgique"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          ></link>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
