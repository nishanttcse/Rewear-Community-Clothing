
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ImageUpload from './ImageUpload';
import ItemForm from './ItemForm';

export default function AddItemPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [itemData, setItemData] = useState({
    title: '',
    description: '',
    category: '',
    type: '',
    size: '',
    condition: '',
    tags: [],
    images: [],
    pointValue: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/dashboard?success=item-added');
    }, 2000);
  };

  const updateItemData = (data: any) => {
    setItemData({ ...itemData, ...data });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return itemData.images.length > 0;
      case 2:
        return itemData.title && itemData.description && itemData.category && itemData.condition;
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">List Your Item</h1>
              <p className="text-gray-600 mt-1">Share your preloved items with the community</p>
            </div>
            <Link href="/browse">
              <button className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg transition-colors cursor-pointer">
                <i className="ri-close-line mr-2"></i>
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        step <= currentStep
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {step < currentStep ? (
                        <i className="ri-check-line"></i>
                      ) : (
                        step
                      )}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-24 h-1 mx-4 ${
                          step < currentStep ? 'bg-emerald-500' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-sm font-medium text-gray-700">Upload Photos</span>
                <span className="text-sm font-medium text-gray-700">Item Details</span>
                <span className="text-sm font-medium text-gray-700">Review & Submit</span>
              </div>
            </div>

            {currentStep === 1 && (
              <ImageUpload
                images={itemData.images}
                onImagesChange={(images) => updateItemData({ images })}
              />
            )}

            {currentStep === 2 && (
              <ItemForm
                itemData={itemData}
                onDataChange={updateItemData}
              />
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Review Your Listing</h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-4">Photos</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {itemData.images.slice(0, 4).map((image, index) => (
                          <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`Item ${index + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">{itemData.title}</h4>
                        <p className="text-gray-600 text-sm">{itemData.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-gray-500">Category</span>
                          <p className="font-medium">{itemData.category}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Size</span>
                          <p className="font-medium">{itemData.size}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Condition</span>
                          <p className="font-medium">{itemData.condition}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Point Value</span>
                          <p className="font-medium text-emerald-600">{itemData.pointValue} pts</p>
                        </div>
                      </div>
                      
                      {itemData.tags.length > 0 && (
                        <div>
                          <span className="text-sm text-gray-500">Tags</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {itemData.tags.map((tag, index) => (
                              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <i className="ri-information-line text-blue-500 mr-3 mt-0.5 w-5 h-5 flex items-center justify-center"></i>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">Before Submitting</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• All photos clearly show the item</li>
                        <li>• Description accurately represents the condition</li>
                        <li>• Point value reflects the item's worth</li>
                        <li>• You'll be notified when someone shows interest</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Back
              </button>
              
              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className={`px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    isStepValid()
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </div>
                  ) : (
                    'Submit Listing'
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
