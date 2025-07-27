'use client';

import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
        <img 
          src={images[selectedImage]}
          alt="Item image"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Thumbnail Images */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-1 aspect-square rounded-xl overflow-hidden transition-all ${
                selectedImage === index 
                  ? 'ring-2 ring-emerald-500 ring-offset-2' 
                  : 'hover:opacity-80'
              }`}
            >
              <img 
                src={image}
                alt={`Item view ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Counter */}
      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
        <i className="ri-image-line w-4 h-4 flex items-center justify-center"></i>
        <span>{selectedImage + 1} of {images.length}</span>
      </div>
    </div>
  );
}