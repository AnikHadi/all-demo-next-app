import styles from "../navbar.module.css";
import NavLink from "./navLink/navLink";

function Links() {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];
  return (
    <div className={styles.nav}>
      {links.map((link, i) => (
        <NavLink item={link} key={i} />
      ))}
    </div>
  );
}

export default Links;
