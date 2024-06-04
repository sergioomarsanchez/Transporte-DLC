import React from "react";
import LoaderTruck from "./LoaderTruck";

function Loader() {
  return (
    <div className="w-full h-full bg-gray-900 bg-opacity-80 flex items-center justify-center fixed bottom-6 md:bottom-0 md:absolute">
      <LoaderTruck />
    </div>
  );
}

export default Loader;
