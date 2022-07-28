import styles from "./Header.module.css";
import artLogo from "../assets/logo-art.svg";
import { SearchBar } from "./SearchBar";
import { Button } from "./Button";

export function Header() {
  return (
    <header className={styles.container}>
      <h1>
        <img src={artLogo} alt="'Art.' logo" />
      </h1>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      <Button content="Entrar" />
    </header>
  );
}
