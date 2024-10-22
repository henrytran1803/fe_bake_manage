import React, { useState } from 'react';
import { X, Trash, Pen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AlertCustomProps } from './types';



const AlertCustom: React.FC<AlertCustomProps> = ({ 
  title = "OIL CAKE", 
  subtitle = "EDIT OR Delete", 
  isHidden = false,
  editPath = "/edit",
  deletePath = "/delete",
  onClose,
  onEdit,
  onDelete
}) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClose = (): void => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const handleEdit = (): void => {
    if (onEdit) {
      onEdit();
    } else {
      navigate(editPath);
    }
    handleClose();
  };

  const handleDelete = (): void => {
    if (onDelete) {
      onDelete();
    } else {
      navigate(deletePath);
    }
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-full max-w-sm bg-white rounded-lg shadow-md p-4 animate-fadeIn">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>
        
        {/* Content */}
        <div className="space-y-1 mb-3">
          <h3 className="text-gray-800 font-medium">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button 
            onClick={handleEdit}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <Pen size={16} />
            <span className="text-sm">EDIT</span>
          </button>
          
          <button 
            onClick={handleDelete}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isHidden 
                ? 'bg-orange-500 text-white hover:bg-orange-600' 
                : 'bg-red-400 text-white hover:bg-red-500'
            }`}
          >
            {isHidden ? <X size={16}/>:<Trash size={16} /> }
            <span className="text-sm">{isHidden ? 'Hidden' : 'DELETE'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertCustom;