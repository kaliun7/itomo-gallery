// only for the HOMEPAGE
import styles from "../styles/Home.module.css";
import Link from "next/link";
function Zanas({ categories }) {
  console.log(styles);

  return (
      
    <div className={styles.asdasd}>
      
        <img className="glavnaKartinka" src='/images/kartinka.jpg'></img>
        <img className={styles.background} src='/images/бацкгроунд.jpg'></img>
        <a className={styles.text}>Галерия " Итомо" отваря врати през 1994г. в София, България. Само за няколко години тя се развива и утвърждава като галерия със собствен стил и класа, и привлича все повече клиенти.
Ние предлагаме авторски бижута с оригинален дизайн и високо качество, изработени от български бижутери. Изделията са своеобразно съчетание на нетрадиционното с класическото. Това им придава модерно излъчване и внася доза екстравагантност.
Ще бъдем щастливи да изработим за вас бижута, които ще носите с удоволствие, и които съответстват напълно на вашия вкус.</a>
    </div>
    
  );
}

export default Zanas;
