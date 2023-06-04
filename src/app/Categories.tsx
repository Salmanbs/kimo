"use client";
import Image from "next/image";
import styles from "../app/styles/categories.module.css";
import Ellipse from "../app/assets/Ellipse 10.png";

import React, { useEffect, useState } from "react";

import { fetchCategories } from "./controlllers/categories.controller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Category {
  name: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCategories();
      setCategories(data);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.categoryList}>
        <div className={styles.categoryHeading}>Categories</div>
        {categories.map((category) => (
          <div className={styles.categoryItem}>
            <div> {category.name}</div>
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#008080" }} />
          </div>
        ))}
      </div>
      <div className={styles.cardSection}>
        <div className={`${styles.categoryHeading} + ${styles.travelHeading}`}>
          Tour Guide
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <div>
              <h3 className={styles.heading}>Hadwin Malone</h3>
              <p className={styles.description}>Guide since 2012</p>
            </div>
            <div className={styles.contactButton}>Contact</div>
          </div>
          <div className={styles.imageContainer}>
            <Image src={Ellipse} alt="Card Image" width={300} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
}
