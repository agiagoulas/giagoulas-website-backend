import { useEffect, useState } from "react";

export type GalleriesApiResponse = {
    galleries: any;
    loading: boolean;
};

export type GalleryApiResponse = {
    gallery: any;
    loading: boolean;
};


export const useGalleries = (): GalleriesApiResponse => {
    const url: string = "http://localhost:8000/api/galleries"
    const [galleries, setGalleries] = useState(null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setGalleries(data)
                setloading(false)
            })
    }, []);

    return { galleries, loading };
};

export const useGallery = (_id: string): GalleryApiResponse => {
    const url: string = `http://localhost:8000/api/galleries/${_id}`
    const [gallery, setGallery] = useState(null);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setGallery(data)
                setloading(false)
            })
    }, []);
    return { gallery, loading };
};
