import styles from "./ArtistCard.module.css";

interface ArtistCardProps {
  name: string;
  role: string;
  backgroundImageUrl: string;
}

export function ArtistCard({
  name,
  role,
  backgroundImageUrl,
}: ArtistCardProps) {
  const containerBackgroundStyle = {
    backgroundImage: `url("${backgroundImageUrl}")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className={styles.container} style={containerBackgroundStyle}>
      <div className={styles.artistDetail}>
        <strong>{name}</strong>
        <p>{role}</p>
      </div>
    </div>
  );
}
