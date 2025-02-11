import React, { useState } from 'react';
import { XMarkIcon, CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

function SchedulePickupModal({ isOpen, onClose, quotation }) {
  const [formData, setFormData] = useState({
    fullName: '',
    idType: 'nric',
    idNumber: '',
    phone: '',
    email: '',
    pickupLocation: '',
    pickupDate: '',
    preferredTime: 'morning',
    additionalNotes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Schedule Your Pickup</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">
            Review your quotation details and schedule a convenient pickup time.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Customer Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Identification Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    value={formData.idType}
                    onChange={(e) => setFormData({...formData, idType: e.target.value})}
                  >
                    <option value="nric">MyKad (NRIC)</option>
                    <option value="passport">Passport</option>
                    <option value="army">Army ID</option>
                    <option value="police">Police ID</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Identification Number
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    value={formData.idNumber}
                    onChange={(e) => setFormData({...formData, idNumber: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
            </div>

            {/* Pickup Details & Summary */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Schedule Your Pickup</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
                      placeholder="Enter pickup address"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Date
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      required
                      className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({...formData, pickupDate: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <ClockIcon className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    >
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 3PM)</option>
                      <option value="evening">Evening (3PM - 6PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    rows="3"
                    placeholder="Any special instructions for pickup?"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                  />
                </div>

                {/* Quotation Summary */}
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold mb-3">Quotation Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weight</span>
                      <span>{quotation.estimatedWeight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Metal Type</span>
                      <span>{quotation.metalType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quality Grade</span>
                      <span>{quotation.qualityGrade}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price per KG</span>
                      <span className="text-green-600">{quotation.pricePerKg}</span>
                    </div>
                    <div className="flex justify-between font-semibold pt-2 border-t">
                      <span>Total Amount</span>
                      <span>{quotation.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Schedule Pickup
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              Payment Available After Pickup Confirmation
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SchedulePickupModal;