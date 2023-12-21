import Button from "../Button";
import Subtitle from "../Subtitle";
import styles from "./index.module.scss";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function ImgCard({loading=true, imgUrl, title, dataId,PageUrl}) {
  return (
    <div className={styles["img-card"]}>
        <div>
          <img className={styles.img} src={require("../../img/news1.jpg")} alt="" />
          <div className={styles.intro}>
            <Subtitle size="2.4rem" color="var(--color-white)" capitalize>
              {title}
            </Subtitle>
            <Button link={`/products?page=${PageUrl}&itemId=${dataId}`}>СДЕЛАТЬ ЗАКАЗ</Button>
          </div>
        </div>
    </div>
  );
}

export default ImgCard;
