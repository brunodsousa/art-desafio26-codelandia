import { MagnifyingGlass } from "phosphor-react";
import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} placeholder="Buscar" />
      <MagnifyingGlass className={styles.searchIcon} />
    </div>
  );
}
