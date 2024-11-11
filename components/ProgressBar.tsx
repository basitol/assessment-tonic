import React from 'react';

interface ProgressBarProps {
  progress: number;
  color: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({progress, color}) => {
  return (
    <div className='flex items-center max-w-full'>
      <div className='w-[54px] h-3 bg-gray-400 rounded-full mr-4' />

      <div className='flex-1 flex items-center w-[317px]'>
        <div
          className={`${color} h-3 rounded-full`}
          style={{
            width: `${progress}%`,
            // maxWidth: '317px',
            backgroundColor: color,
          }}
        />
        <span className='text-white ml-4'>{progress}%</span>
      </div>
    </div>
  );
};
