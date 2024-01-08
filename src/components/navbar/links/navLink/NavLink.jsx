"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../navbar.module.css";

function NavLink({ item }) {
  const pathName = usePathname();
  return (
    <Link
      href={item.link}
      className={`${styles.nav_item} ${
        pathName === item.link && styles.active
      }`}
    >
      {item.name}
    </Link>
  );
}

export default NavLink;
