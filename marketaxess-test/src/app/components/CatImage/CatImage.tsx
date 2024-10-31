import Image from "next/image";
import { CatImageData } from "../../data/catImages";
import styles from "./CatImage.module.css";

interface CatImageProps {
  image: CatImageData;
  removeImage(id: string): void;
}

const HEIGHT = 250;

export function CatImage({ image, removeImage }: CatImageProps) {
  const width = (HEIGHT / image.height) * image.width;

  return (
    <div className={styles.imageContainer}>
      <Image
        src={image.url}
        alt="Cat image"
        width={width}
        height={HEIGHT}
        priority
      />
      <button
        className={styles.deleteButton}
        onClick={() => removeImage(image.id)}
        aria-label="Remove image"
      >
        ✕
      </button>
    </div>
  );
}
