import { FC } from "react"
import Image from 'next/image'
import styles from './header.module.scss'

import logoImg from '../../assets/images/logo.webp'
import Link from "next/link"
import CustomButton from "../../components/button/CustomButton"
import ContainerL from "../../layouts/ContainerL"


const Header: FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.headerBg}>
          <nav>
            <div className={styles.navbar}>
              <div className={styles.navbarLeft}>
                <Link href={'/'}>Новини</Link>
                <Link href={'/'}>Інформація</Link>
                <Link href={'/'}>Про нас</Link>
              </div>
              <div className={styles.navbarLogo}>
                <Link href={'/'}>
                  <Image
                    width={75}
                    height={34}
                    src={logoImg}
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className={styles.flexBlock}></div>
            </div>
          </nav>
        </div>

        <div className={styles.hBanner}>
          <ContainerL className={styles.hBanner_container}>
            <h2 className={styles.hBanner_title}>Що це таке?</h2>
            <div className={styles.hBanner_line}></div>
            <p className={styles.hBanner_text}><span>Quick Direction</span> - це сервіс для легкого спілкування студентів з дирекцією. З нами ваша заявка точно не загубиться: заповнену форму одразу буде скеровано до спеціальних відділів дирекції НТУ “ХПІ” відповідно до обраного вами запиту.</p>
            <CustomButton className={styles.hBanner_btn} onClick={() => { }} >
              Подати заявку
            </CustomButton>
          </ContainerL>
        </div>

      </div>
    </header>
  )
}

export default Header
