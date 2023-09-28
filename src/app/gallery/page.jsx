"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "../utils/modal";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const totalImages = 50;
  const imagePath = "/assets/";
  const imageFormat = ".jpg";

  const handlePrev = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex < totalImages - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <div className="flex flex-wrap justify-center p-4">
        {Array.from({ length: totalImages }).map((_, index) => (
          <div key={index} className="m-2">
            <Image
              src={`${imagePath}image${index + 1}${imageFormat}`}
              alt={`Image ${index + 1}`}
              className="w-64 h-64 object-cover rounded shadow cursor-pointer"
              width={200}
              height={200}
              onClick={() => setSelectedImageIndex(index)}
            />
          </div>
        ))}

        {selectedImageIndex !== null && (
          <Modal
            onClose={() => setSelectedImageIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          >
            <Image
              src={`${imagePath}image${selectedImageIndex + 1}${imageFormat}`}
              alt={`Image ${selectedImageIndex + 1}`}
              width={800}
              height={800}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Gallery;
