"use client";
import { useCallback, useState } from "react";
import { CatImageData } from "../../data/catImages";
import { CatImage } from "../CatImage/CatImage";
import styles from "./CatImageGrid.module.css";

interface CatImageGridProps {
  images: CatImageData[];
}

export function CatImageGrid({ images }: CatImageGridProps) {
  const [catImages, setCatImages] = useState<CatImageData[]>(images);

  const removeImage = useCallback((id: string) => {
    setCatImages((prevImages) => prevImages.filter((image) => image.id !== id));
  }, []);

  return (
    <div className={styles.catImageGrid}>
      {catImages.map((image) => (
        <CatImage key={image.id} image={image} removeImage={removeImage} />
      ))}
    </div>
  );
}
