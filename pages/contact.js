// only for the HOMEPAGE
import styles from "../styles/Contact.module.css";
import Link from "next/link";
function Contact({ categories }) {
  console.log(styles);

  return (
    <div >
    <img className="glavnaKartinka" src='/images/kartinka.jpg'></img>
    </div>
  );
}

export default Contact;
