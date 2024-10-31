import { fetchCatImages } from "./data/catImages";
import { CatImageGrid } from "./components/CatImageGrid/CatImageGrid";

export default async function Home() {
  const images = await fetchCatImages();

  return (
    <div>
      <main>
        <h1> Cat Images </h1>
        <CatImageGrid images={images} />
      </main>
    </div>
  );
}
