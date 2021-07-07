import React, { useEffect, useState } from "react";
import router from "next/router";
import Link from "next/link";
import s from "../styles/Navbar.module.css";
import { FiGift } from "react-icons/fi";
import Button from "../components/Button";
import useWidth from "../hooks/useWidth";

const Menu = ({ open, onClick }) => {
  return (
    <div
      className={open ? s.menu_open : s.menu}
      style={{
        transform: open ? "translateY(365px)" : "translateY(0px)",
      }}
    >
      <Link href="about">
        <a
          onClick={onClick}
          className={router.pathname == "/about" ? s.navLink_active : s.navLink}
        >
          Wer wir sind
        </a>
      </Link>
      <Link href="angebot">
        <a
          onClick={onClick}
          className={
            router.pathname == "/angebot" ? s.navLink_active : s.navLink
          }
        >
          Angebot
        </a>
      </Link>
      <Link href="neuigkeiten">
        <a
          onClick={onClick}
          className={
            router.pathname == "/neuigkeiten" ? s.navLink_active : s.navLink
          }
        >
          Neugkeiten
        </a>
      </Link>
      <Link href="/veranstaltungen">
        <a
          onClick={onClick}
          className={
            router.pathname == "/veranstaltungen" ? s.navLink_active : s.navLink
          }
        >
          Veranstaltungen
        </a>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const innerWidth = useWidth();
  const [open, setOpen] = useState(false);

  // Close mobile menu when going to desktop size
  useEffect(() => {
    if (innerWidth >= 1027) {
      setOpen(false);
    }
  }, [innerWidth]);

  if (innerWidth) {
    return (
      <div className={s.container}>
        {innerWidth >= 1027 ? (
          <div className={s.bar}>
            <div style={{ width: "138px" }}>
              <Link href="/">
                <img src="/logo.png" style={{ cursor: "pointer" }} />
              </Link>
            </div>
            <Menu />
            <Button accent src={<FiGift />} text="Helfen" />
          </div>
        ) : (
          <>
            <div className={s.bar}>
              <div>
                <Link href="/">
                  <img src="/logo.png" style={{ cursor: "pointer" }} />
                </Link>
              </div>
              <Button
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                accent
                src={<FiGift />}
                text="Helfen"
              />
              <h3
                onClick={() => setOpen((prev) => !prev)}
                style={{ cursor: "pointer" }}
              >
                Menü
              </h3>
            </div>
            <Menu
              open={open}
              onClick={() =>
                setTimeout(() => {
                  setOpen(false);
                }, 300)
              }
            />
          </>
        )}
      </div>
    );
  } else {
    return <div className={s.container} />;
  }
};

export default Navbar;
