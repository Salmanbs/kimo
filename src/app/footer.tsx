"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../app/styles/footer.module.css";
import { fetchHighlights } from "./controlllers/highlights.controller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import Aloha from "../app/assets/AlohaW.png";

interface Highlight {
  title: string;
  description: string;
  image: string;
}

export default function Footer() {
  return (
    <div className={styles.container}>
      <Image src={Aloha} alt={`Image`} width={94} height={36} />
    </div>
  );
}
