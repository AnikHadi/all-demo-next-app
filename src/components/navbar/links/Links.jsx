import Link from "next/link";

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
    <div>
      {links.map((link, i) => (
        <Link href={link.link} key={i}>
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default Links;
