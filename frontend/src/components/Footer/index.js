import React from 'react';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.contact}>
          <h6>
            <i class="fas fa-tag"></i>
             CARDONE
          </h6>
          <a>
            <i class="fas fa-phone-square"></i> +7(800)555-00-00
          </a>
          <a>
            <i class="fas fa-at"></i> cardone@mail.ru
          </a>
        </div>

      

        <div className={styles.social}>
          <h6>Мы в социальных сетях</h6>
          <ul>
            <li>
              <i class="fab fa-facebook-square fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-telegram-plane fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-vk fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-whatsapp-square fa-2x"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2020 Copyright:
        <a href="#"> CARDONE</a>
      </div>
    </footer>
  );
}

export default Footer;
