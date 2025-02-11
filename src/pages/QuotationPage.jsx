import React, { useState } from 'react';
import { CameraIcon, ArrowUpTrayIcon, TruckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import SchedulePickupModal from '../components/SchedulePickupModal';

function QuotationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quotation, setQuotation] = useState({
    estimatedWeight: '50 kg',
    metalType: 'Mixed Metals',
    qualityGrade: 'Grade A',
    pricePerKg: 'RM 4.90/kg',
    totalPrice: 'RM 245.00'
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Recycle Scrap Metal, Effortlessly
          </h1>
          <p className="text-lg text-gray-600">
            Upload photos of your scrap metal, get instant quotes, and schedule pickup with
            digital payments. It's that simple.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-4">Upload Scrap Photos</h2>
            <p className="text-gray-600 mb-8">
              Take clear photos of your scrap metal for accurate quotation
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:border-primary transition-colors">
                <ArrowUpTrayIcon className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">Upload Photos</span>
              </button>
              <button className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:border-primary transition-colors">
                <CameraIcon className="w-8 h-8 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">Take Photo</span>
              </button>
            </div>
          </div>

          {/* Quotation Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-2xl font-semibold">Your Quotation</h2>
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900">{quotation.totalPrice}</div>
                <p className="text-sm text-gray-500">Based on your submitted photos</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Weight</span>
                <span className="font-medium">{quotation.estimatedWeight}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Metal Type</span>
                <span className="font-medium">{quotation.metalType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quality Grade</span>
                <span className="font-medium">{quotation.qualityGrade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price per KG</span>
                <span className="text-green-600 font-medium">{quotation.pricePerKg}</span>
              </div>
            </div>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-primary text-white py-3 rounded-lg font-medium mb-4 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <TruckIcon className="w-5 h-5" />
              Schedule Pickup
            </button>

            <button className="w-full bg-gray-500 text-white py-3 rounded-lg font-medium mb-4 hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
              <CurrencyDollarIcon className="w-5 h-5" />
              Payment Available After Pickup Confirmation
            </button>

            <p className="text-sm text-gray-500 text-center">
              Digital payment will be processed after pickup schedule is confirmed
            </p>
          </div>
        </div>
      </div>

      <SchedulePickupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        quotation={quotation}
      />
    </div>
  );
}

export default QuotationPage;