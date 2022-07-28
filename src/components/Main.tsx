import { Button } from "./Button";
import { ArtistCard } from "./ArtistCard";

import sabineLowe from "../assets/sabine-lowe.jpg";
import eleanorPena from "../assets/eleanor-pena.jpg";
import leslieAlexander from "../assets/leslie-alexander.jpg";
import contentExplorerRightImage from "../assets/img-direita.jpg";
import collectionImage1 from "../assets/img-1.jpg";
import collectionImage2 from "../assets/img-2.jpg";
import collectionImage3 from "../assets/img-3.jpg";

import styles from "./Main.module.css";

export function Main() {
  const artists = [
    {
      name: "Sabine Lowe",
      role: "Designer e Fotógrafa",
      image: sabineLowe,
    },
    {
      name: "Eleanor Pena",
      role: "Escritora e Designer",
      image: eleanorPena,
    },
    {
      name: "Leslie Alexander",
      role: "Diretora de Arte",
      image: leslieAlexander,
    },
  ];
  return (
    <main>
      <section className={styles.contentExplorerSection}>
        <div className={styles.contentExplorerSection_text}>
          <h2>Descubra novos artistas e suas obras</h2>
          <p>Uma nova geração de jovens artistas surgem</p>
          <Button content="Explorar" />
          <div className={styles.contentExplorerSection_infos}>
            <div>
              <strong>+2 mil</strong>
              <p>Artistas</p>
            </div>
            <div>
              <strong>+7 mil</strong>
              <p>Vendas</p>
            </div>
            <div>
              <strong>+16 mil</strong>
              <p>Avaliações</p>
            </div>
          </div>
        </div>
        <img
          src={contentExplorerRightImage}
          alt="Image of content explorer section"
        />
      </section>
      <section className={styles.collectionsSection}>
        <div className={styles.collectionsSection_img}>
          <img src={collectionImage1} alt="Image 1 from collections" />
          <img src={collectionImage2} alt="Image 2 from Collections" />
          <img src={collectionImage3} alt="Image 3 from Collections" />
        </div>
        <div className={styles.collectionsSection_text}>
          <h2>Confira as últimas coleções</h2>
          <Button content="Ver Mais" />
        </div>
      </section>
      <section className={styles.artistsSection}>
        <h2>Artistas</h2>
        <div className={styles.artistsSection_img}>
          {artists.map((artist) => {
            return (
              <ArtistCard
                key={artist.name}
                name={artist.name}
                role={artist.role}
                backgroundImageUrl={artist.image}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
