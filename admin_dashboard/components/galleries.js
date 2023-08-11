"use client";

import { useState, useEffect } from "react";

export default function Galleries() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/galleries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log(data);
  if (data) {
    return (
      <div>
        {data.map(({ _id, title, cover_image, updated_on, description }) => (
          <div key={_id}>
            <p>{_id}</p>
            <p>{title}</p>
            <p>{updated_on}</p>
            <p>{description}</p>
            <img src={cover_image.url}/>
            </div>

        ))}
      </div>
    );
  }
}
