import { FC } from "react"
import { advantages } from "../../../../constants/homepage/homepage"
import AdvantageCard from "../../../../components/advantage-card/AdvantageCard"
import styles from './advantages.module.scss';
import ContainerL from "../../../../layouts/ContainerL";

const AdvantagesSection: FC = () => {
  return (
    <section>
      <ContainerL>
        <div className={styles.advantages}>
          <h2 className={styles.advantages_title}>Чому саме електронні довідки</h2>
          <div className={styles.advantages_wrap}>
            {advantages?.map(advantage => (
              <AdvantageCard advantage={advantage} key={advantage.id} />
            ))}
          </div>
        </div>
      </ContainerL>
    </section>
  )
}

export default AdvantagesSection
