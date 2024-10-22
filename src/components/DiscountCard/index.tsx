import React from 'react';
import { Tag, Clock, CheckCircle, XCircle } from 'lucide-react';
import {DiscountCardProps} from './types'
const Divider = () => {
    return (
        <hr className="border-t-2 border-gray-300 my-4 w-full" />
    );
}
const DiscountCard: React.FC<DiscountCardProps> = ({
  name,
  discount,
  dateStart,
  dateEnd,
  code,
  isAvailable
}) => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg max-w-[350px] hover:shadow-xl transition-all duration-300 border border-gray-100 min-w-[270px]">
      {/* Header with Name and Discount */}
      <div className="flex justify-between items-start mb-6">
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-wider text-gray-500">Name</div>
          <div className="font-semibold text-lg text-gray-800">{name}</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-xs uppercase tracking-wider text-gray-500">Discount</div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-indigo-600">{discount}</span>
            {isAvailable ? (
              <div className="flex items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            ) : (
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            )}
          </div>
        </div>
      </div>
      <Divider />
      {/* Dates Section */}
      <div className="flex justify-between mb-6 bg-gray-50 p-4 rounded-xl">
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500 flex items-center gap-1 mb-1">
            <Clock size={14} className="text-gray-400" />
            Start
          </div>
          <div className="font-medium text-gray-700">{dateStart}</div>
        </div>
        <div className="border-l border-gray-200"></div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500 flex items-center gap-1 mb-1">
            <Clock size={14} className="text-gray-400" />
            End
          </div>
          <div className="font-medium text-gray-700">{dateEnd}</div>
        </div>
      </div>

      {/* Code Section */}
      <div className="relative">
        <div className="text-xs uppercase tracking-wider text-gray-500 flex items-center gap-1 mb-2">
          <Tag size={14} className="text-gray-400" />
          Discount Code
        </div>
        <div className="flex items-center justify-between bg-indigo-50 p-3 rounded-lg border border-indigo-100">
          <code className="font-mono font-medium text-indigo-600">{code}</code>
          <div className="flex items-center gap-1">
            {isAvailable ? (
              <CheckCircle size={18} className="text-green-500" />
            ) : (
              <XCircle size={18} className="text-gray-400" />
            )}
          </div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="mt-4 flex justify-end">
        <span className={`text-xs px-2 py-1 rounded-full ${
          isAvailable 
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-600'
        }`}>
          {isAvailable ? 'Available' : 'Unavailable'}
        </span>
      </div>
    </div>
  );
};

// Example usage
const ExampleUsage: React.FC = () => {
  const discountData: DiscountCardProps = {
    name: "Giảm giá",
    discount: "30%",
    dateStart: "10/10/2024",
    dateEnd: "20/10/2024",
    code: "AB223KJ",
    isAvailable: true
  };

  return (
    <div className="">
      <DiscountCard {...discountData} />
    </div>
  );
};

export default ExampleUsage;