"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const LazyMapIframe = dynamic(() => import("./MapIframe"), {
  loading: () => (
    <div className="flex h-[320px] w-[700px] items-center justify-center bg-gray-200 text-gray-500">
      Loading map...
    </div>
  ),
  ssr: false,
});

const ServiceLocation = () => {
  const [loadMap, setLoadMap] = useState(false);

  return (
    <section className="flex justify-center p-5">
      <button
        onClick={() => setLoadMap(true)}
        className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Show Map
      </button>
      {loadMap && <LazyMapIframe />}
    </section>
  );
};

export default ServiceLocation;
