import React, { useState } from "react";

import styles from "./News.module.scss";

export default function Header() {
  return (
    <div className={styles.news}>
      <div className={styles.wrapper}>
        <div className={styles.boxWrapper}>
          <span className={styles.title}>Últimas Notícias</span>
          <ul className={styles.newsBox}>
            <li className={styles.box}>
              <img src="/categoria1.png" alt="Categoria" />
              <div className={styles.category}>Nome da categoria</div>
              <div className={styles.text}>
                <span className={styles.date}>19 de março de 2020</span>
                <span className={styles.description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </li>

            <li className={styles.box}>
              <img src="/categoria2.png" alt="Categoria" />
              <div className={styles.category}>Nome da categoria</div>
              <div className={styles.text}>
                <span className={styles.date}>19 de março de 2020</span>
                <span className={styles.description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </li>

            <li className={styles.box}>
              <img src="/categoria3.png" alt="Categoria" />
              <div className={styles.category}>Nome da categoria</div>
              <div className={styles.text}>
                <span className={styles.date}>19 de março de 2020</span>
                <span className={styles.description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </li>

            <li className={styles.box}>
              <img src="/categoria4.png" alt="Categoria" />
              <div className={styles.category}>Nome da categoria</div>
              <div className={styles.text}>
                <span className={styles.date}>19 de março de 2020</span>
                <span className={styles.description}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </span>
              </div>
            </li>
          </ul>
          <a href="#" className={styles.button}>
            Mais notícias <img src="/arrow.svg" alt="Saiba mais" />
          </a>
        </div>
        <div className={styles.boxWrapper}>
          <span className={styles.title}>Próximos Eventos</span>
          <ul className={styles.eventsBox}>
            <li className={styles.box}>
              <img src="/evento1.png" alt="Evento" />
              <div className={styles.text}>
                <span className={styles.description}>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of
                  type.
                </span>
                <span className={styles.date}>19 de março de 2020</span>
              </div>
            </li>

            <li className={styles.box}>
              <img src="/evento2.png" alt="Evento" />
              <div className={styles.text}>
                <span className={styles.description}>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of
                  type.
                </span>
                <span className={styles.date}>19 de março de 2020</span>
              </div>
            </li>
          </ul>

          <a href="#" className={styles.button}>
            Mais eventos <img src="/arrow.svg" alt="Saiba mais" />
          </a>
        </div>
      </div>
    </div>
  );
}
