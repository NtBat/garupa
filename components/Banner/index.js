import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <a href="#" className={styles.image}>
      <img src="/banner.jpg" alt="Sempre ao lado do homem do campo" />
    </a>
  );
}
