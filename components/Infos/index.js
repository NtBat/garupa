import styles from "./Infos.module.scss";

export default function Infos() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={`${styles.box} ${styles.boxText}`}>
          <h1>lorem ipsum dolor sit</h1>
          <strong>amet, consectetur adipiscing elit.</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit ut aliquam, purus sit
            amet luctus venenatis, lectus magna fringilla urna, porttitor
            rhoncus dolor non enim praesent elementum facilisis leo, vel
            fringila est ullamcorper eget nulla facilisi etiam dignissim diam
            quis enim lobortis scelerisque fermentum.
          </p>
        </div>
        <div className={styles.box}>
          <img src="/defensivos.png" alt="Defensivos" />
          <div className={styles.shadow}></div>
          <span className={styles.text}>Defensivos</span>
        </div>

        <div className={styles.box}>
          <img src="/nutricao.png" alt="Nutrição" />
          <div className={styles.shadow}></div>
          <span className={styles.text}>Nutrição</span>
        </div>

        <div className={styles.box}>
          <img src="/fertilizantes.png" alt="Fertilizantes" />
          <div className={styles.shadow}></div>
          <span className={styles.text}>Fertilizantes</span>
        </div>

        <div className={styles.box}>
          <img src="/sementes.png" alt="Sementes" />
          <div className={styles.shadow}></div>
          <span className={styles.text}>Sementes</span>
        </div>

        <div className={styles.box}>
          <img src="/graos.png" alt="Grãos" />
          <div className={styles.shadow}></div>
          <span className={styles.text}>Grãos</span>
        </div>
      </div>

      <a href="#" className={styles.button}>
        Saiba mais <img src="/arrow.svg" alt="Saiba mais" />
      </a>
    </div>
  );
}
