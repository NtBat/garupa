import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div style={styles.column}>
            <a href="#" className={styles.logo}>
              <img src="/logo-footer.svg" alt="Logo da empresa" />
            </a>
          </div>

          <div style={styles.column}>
            <span className={styles.title}>Mapa do site</span>
            <ul className={styles.links}>
              <li>
                <a href="#">
                  <img src="/arrow-footer.svg" alt="Home" />
                  Home
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/arrow-footer.svg" alt="Quem somos" />
                  Quem Somos
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/arrow-footer.svg" alt="Serviços" />
                  Serviços
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/arrow-footer.svg" alt="Notícias" />
                  Notícias
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/arrow-footer.svg" alt="Eventos" />
                  Eventos
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/arrow-footer.svg" alt="Fale Conosco" />
                  Fale Conosco
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/arrow-footer.svg" alt="Trabalhe Conosco" />
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          <div style={styles.column}>
            <span className={styles.title}>Mídias sociais</span>
            <ul className={styles.social}>
              <li>
                <a href="#">
                  <img src="/facebook-top.svg" alt="Facebook" />
                  @cooparcentro
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/instagram-top.svg" alt="Instagram" />
                  @cooparcentro
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/youtube-top.svg" alt="Youtube" />
                  @cooparcentro
                </a>
              </li>
            </ul>
          </div>

          <div style={styles.column}>
            <span className={styles.title}>Contato</span>
            <ul className={styles.contact}>
              <li>
                <span>
                  <img src="/phone-top.svg" alt="Telefone" />
                  (55) 3211-1122
                </span>
              </li>

              <li>
                <span>
                  <img src="/map.svg" alt="Endereço" />
                  ROD. BR-392, KM. 348 97070-160, Santa Maria/RS
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <span>© Todos os direitos reservados. Cooparcentro 2020.</span>
      </div>
    </>
  );
}
