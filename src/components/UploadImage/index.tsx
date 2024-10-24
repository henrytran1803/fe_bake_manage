import React from 'react';
import { CloudUpload } from 'lucide-react';
import { UploadImageProps } from './types';


const UploadImage: React.FC<UploadImageProps> = ({ onClick }) => {
    return (
        <div>
        <button onClick={onClick}>
            <div className='w-full max-w-[300px] aspect-square bg-[#E7E6F1] rounded-2xl border-2 border-dashed border-[#384EB7] flex flex-col justify-center items-center hover:bg-[#D3D2E5] transition-colors duration-300'>
                <div className='flex flex-col items-center'>
                    <div className='p-5'>
                        <CloudUpload className='text-[#483EA8]' size={48}/>
                    </div>
                    <p className='text-gray-300 mt-2 p-4'>Supported formats: JPEG, PNG</p>
                </div>
            </div>
        </button>
        </div>
    );
};

export default UploadImage;