import React, { useState } from "react";

import styles from "./Banner.module.scss";

export default function Header() {
  return (
    <a href="#" className={styles.image}>
      <img src="/banner.jpg" alt="Sempre ao lado do homem do campo" />
    </a>
  );
}
