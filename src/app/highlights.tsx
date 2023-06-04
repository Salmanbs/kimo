"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../app/styles/highlights.module.css";
import { fetchHighlights } from "./controlllers/highlights.controller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Highlight {
  title: string;
  description: string;
  image: string;
}

export default function HighLights() {
  const [highlights, setHighlights] = useState<Highlight[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchHighlights();
      setHighlights(data);
    }
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.containerHeading}> Highlights </div>
      <div className={styles.scrollableContainer}>
        {highlights.map((highlight, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={highlight.image}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.heading}>{highlight.title}</h3>
              <p className={styles.description}>{highlight.description}</p>
            </div>
            <div className={styles.arrowContainer}>
              <span
                className={styles.circleArrow}
                style={{
                  color: "#E6F2F2",
                  backgroundColor: "#008080",
                }}
              >
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
