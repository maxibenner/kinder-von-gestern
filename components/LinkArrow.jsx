import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import s from "../styles/LinkArrow.module.css";

const LinkArrow = ({ href = "/" }) => {
  return (
    <div className={s.container}>
      <Link href={href}>
        <div>
          <p>Mehr erfahren</p>
          <MdKeyboardArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default LinkArrow;
