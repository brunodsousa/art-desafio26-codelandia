import styles from "./Footer.module.css";
import artLogo from "../assets/logo-art.svg";

export function Footer() {
  return (
    <footer className={styles.container}>
      <img src={artLogo} alt="'Art.' logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Buscar</a>
          </li>
          <li>
            <a href="#">Explorar</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
