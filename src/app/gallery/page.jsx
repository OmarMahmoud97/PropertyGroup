"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "../utils/modal";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // New state to manage current page

  const totalImages = 130;
  const imagesPerPage = 25; // Number of images per page
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const imagePath = "/assets/pictures";
  const imageFormat = ".jpg";

  const handlePrevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < totalImages - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const padWithZeros = (number, length = 3) => {
    return String(number).padStart(length, "0");
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Slicing the array of images to display only the ones for the current page
  const imagesToDisplay = Array.from({ length: totalImages }).slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <div className="flex flex-wrap justify-center lg:p-4">
        {imagesToDisplay.map((_, index) => {
          const actualIndex = (currentPage - 1) * imagesPerPage + index;
          return (
            <div key={actualIndex} className="m-2">
              <Image
                src={`${imagePath}/image${padWithZeros(
                  actualIndex + 1
                )}${imageFormat}`}
                alt={`Image ${actualIndex + 1}`}
                className="w-64 h-64 object-cover rounded shadow cursor-pointer"
                width={200}
                height={200}
                unoptimized={true}
                onClick={() => setSelectedImageIndex(actualIndex)}
              />
            </div>
          );
        })}

        {selectedImageIndex !== null && (
          <Modal
            onClose={() => setSelectedImageIndex(null)}
            onPrev={handlePrevImage}
            onNext={handleNextImage}
          >
            <Image
              src={`${imagePath}/image${padWithZeros(
                selectedImageIndex + 1
              )}${imageFormat}`}
              alt={`Image ${selectedImageIndex + 1}`}
              width={800}
              height={800}
            />
          </Modal>
        )}
      </div>
      <div className="mt-4">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="mx-4">{`${currentPage} / ${totalPages}`}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
