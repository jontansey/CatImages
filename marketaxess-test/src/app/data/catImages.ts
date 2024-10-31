const CAT_IMAGE_URL = "https://api.thecatapi.com/v1/images/search?limit=10";

export type CatImageData = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export async function fetchCatImages(): Promise<Array<CatImageData>> {
  const response = await fetch(CAT_IMAGE_URL);
  const images: Array<CatImageData> = await response.json();

  if (!images) return [];
  return images;
}
