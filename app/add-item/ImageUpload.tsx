'use client';

import { useState } from 'react';

interface ImageUploadProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
}

const sampleImages = [
  "https://readdy.ai/api/search-image?query=Stylish%20clothing%20item%20photographed%20on%20clean%20white%20background%2C%20professional%20fashion%20photography%2C%20high%20quality%20garment%20presentation%2C%20minimal%20styling&width=400&height=500&seq=upload-1&orientation=portrait",
  "https://readdy.ai/api/search-image?query=Fashion%20item%20detail%20shot%20on%20white%20background%2C%20professional%20product%20photography%2C%20clothing%20texture%20and%20fabric%20visible%2C%20clean%20presentation&width=400&height=500&seq=upload-2&orientation=portrait",
  "https://readdy.ai/api/search-image?query=Clothing%20item%20laid%20flat%20on%20white%20background%2C%20professional%20fashion%20photography%2C%20full%20garment%20view%2C%20minimal%20clean%20styling&width=400&height=500&seq=upload-3&orientation=portrait",
  "https://readdy.ai/api/search-image?query=Fashion%20garment%20on%20hanger%20against%20white%20background%2C%20professional%20clothing%20photography%2C%20retail%20style%20presentation%2C%20clean%20minimal%20setup&width=400&height=500&seq=upload-4&orientation=portrait"
];

export default function ImageUpload({ images, onImagesChange }: ImageUploadProps) {
  const [dragOver, setDragOver] = useState(false);

  const handleFileUpload = () => {
    const newImages = [...images, ...sampleImages.slice(images.length, images.length + 1)];
    onImagesChange(newImages.slice(0, 5));
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const reorderImages = (fromIndex: number, toIndex: number) => {
    const newImages = [...images];
    const [removed] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, removed);
    onImagesChange(newImages);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Photos</h3>
        <p className="text-gray-600">Add up to 5 high-quality photos of your item. The first photo will be the main image.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={image}
                alt={`Upload ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => removeImage(index)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors cursor-pointer"
              >
                <i className="ri-delete-bin-line w-4 h-4 flex items-center justify-center"></i>
              </button>
            </div>
            {index === 0 && (
              <div className="absolute bottom-2 left-2">
                <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                  Main Photo
                </span>
              </div>
            )}
          </div>
        ))}

        {images.length < 5 && (
          <div
            className={`aspect-[4/5] border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors ${
              dragOver
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-300 hover:border-emerald-400 hover:bg-gray-50'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              handleFileUpload();
            }}
            onClick={handleFileUpload}
          >
            <i className="ri-upload-cloud-line text-4xl text-gray-400 mb-4"></i>
            <p className="text-sm font-medium text-gray-700 mb-1">Click to upload</p>
            <p className="text-xs text-gray-500 text-center px-4">
              or drag and drop<br />
              PNG, JPG up to 10MB
            </p>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <i className="ri-lightbulb-line text-blue-500 mr-3 mt-0.5 w-5 h-5 flex items-center justify-center"></i>
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Photo Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Use natural lighting for best results</li>
                <li>• Show different angles and any flaws</li>
                <li>• Keep backgrounds clean and simple</li>
                <li>• The first photo should be the best overview shot</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}