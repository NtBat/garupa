import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";

export default function Header() {
  const router = useRouter();

  const [menuBurger, setActiveMenuBurger] = useState(false);

  function handleBurger() {
    setActiveMenuBurger(!menuBurger);
  }

  return (
    <header className={styles.header}>
      <div className={styles.barTop}>
        <div className={styles.infoBar}>
          <div className={styles.wrapper}>
            <a href="#">
              <img src="/facebook-top.svg" alt="Facebook da empresa" />
            </a>
            <a href="#">
              <img src="/instagram-top.svg" alt="Instagram da empresa" />
            </a>
            <a href="#">
              <img src="/youtube-top.svg" alt="Youtube da empresa" />
            </a>
            <span>@cooparcentro</span>
            <span className={styles.phone}>
              <img src="/phone-top.svg" alt="Telefone da empresa" />
              (55) 3211-1122
            </span>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <a className={styles.linkLogo} href="/">
          <img className={styles.logoImg} src="/logo.svg" alt="Logo Site" />
        </a>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a className={`${router.pathname == "/" ? styles.active : ""}`}>
                  Home
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a
                  className={`${
                    router.pathname == "/quem-somos" ? styles.active : ""
                  }`}
                >
                  Quem Somos
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a
                  className={`${
                    router.pathname == "/servicos" ? styles.active : ""
                  }`}
                >
                  Serviços
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a
                  className={`${
                    router.pathname == "/noticias" ? styles.active : ""
                  }`}
                >
                  Notícias
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a
                  className={`${
                    router.pathname == "/trabalhe-conosco" ? styles.active : ""
                  }`}
                >
                  Trabalhe Conosco
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a
                  className={`${
                    router.pathname == "/contato" ? styles.active : ""
                  }`}
                >
                  Contato
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
