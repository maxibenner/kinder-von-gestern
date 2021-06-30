import React from "react";
import s from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Link href="/kontakt">Kontakt</Link>
      <Link href="/satzung">Satzung</Link>
      <Link href="/impressum">Impressung</Link>
      <Link href="/datenschutz">Datenschutz</Link>
    </footer>
  );
};

export default Footer;
