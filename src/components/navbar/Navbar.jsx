import Links from "./links/Links";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>Logo</div>
      <div className={styles.nav_1}>
        <Links />
        <span className={styles.login}>Logout</span>
      </div>
    </div>
  );
}

export default Navbar;
