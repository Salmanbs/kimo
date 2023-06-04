"use client";

import Image from "next/image";
import styles from "../app/styles/landing.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Aloha from "../app/assets/Aloha.png";

import React, { useEffect, useState } from "react";

import { fetchActivities } from "./controlllers/landingPage.controller";

interface Activity {
  title: string;
  description: string;
  image: string;
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);

  const toggleMenu = () => {
    console.log("hi");
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetchActivities();
      setActivities(data);
    }
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ""}`}>
        <div
          className={`${styles.navbarleft} ${isMenuOpen ? styles.open : ""}`}
        >
          {" "}
          <div className={`${styles.logo} ${isMenuOpen ? styles.hide : ""}`}>
            <Image src={Aloha} alt={`Image`} width={94} height={36} />
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.navContainer}>
            <ul
              className={`${styles.navlinks} ${
                isMenuOpen ? styles.open : styles.hide
              }`}
            >
              <li>
                <a href="/page1">Home</a>
              </li>
              <li>
                <a href="/page2">Surfing</a>
              </li>
              <li>
                <a href="/page3">Hula</a>
              </li>
              <li>
                <a href="/page3">Vulcano</a>
              </li>
            </ul>
          </div>
        </div>

        <button className={`${styles.button} ${isMenuOpen ? "" : styles.hide}`}>
          Book a trip
        </button>

        <button
          className={` ${styles.closeButton} ${
            isMenuOpen ? styles.show : styles.hide
          }`}
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </nav>
      <main className={styles.main}>
        <div className={styles.textOverlay}>
          <h1 className={styles.welcomeText}>Welcome to Hawaii</h1>
        </div>
      </main>
    </div>
  );
}
