import styles from "../navbar.module.css";
import NavLink from "./navLink/NavLink";

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

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.nav}>
      {links.map((link, i) => (
        <NavLink item={link} key={i} />
      ))}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ name: "Admin", link: "/admin" }} />}
          <span className={styles.login}>Logout</span>
        </>
      ) : (
        <NavLink item={{ name: "Login", link: "/login" }} />
      )}
    </div>
  );
}

export default Links;
