import { useState } from "react";
import { GalleryDetail } from "./components/galleryDetail";
import GalleryList from "./components/galleryList";
import { useGalleries, GalleriesApiResponse } from "./api/galleryApi";

function GalleryPage() {
  const [currentSelectedGallery, setCurrentSelectedGallery] =
    useState<string>();
  const galleries: GalleriesApiResponse = useGalleries();

  return (
    <div className="container mx-auto flex">
      <div className="basis-1/4 pr-2">
        <GalleryList
          setCurrentSelectedGallery={setCurrentSelectedGallery}
          galleries={galleries}
        />
      </div>
      <div className="mt-2 basis-3/4">
        {currentSelectedGallery && (
          <GalleryDetail
            gallery={galleries.galleries.find(
              (x: any) => x._id === currentSelectedGallery
            )}
          />
        )}
      </div>
    </div>
  );
}

export default GalleryPage;
