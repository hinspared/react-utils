import React from 'react';

type FlipcardProps = {
  isFlipped: boolean;
  front: React.ReactNode;
  back: React.ReactNode;
};

const FlipCard: React.FC<FlipcardProps> = ({ isFlipped, front, back }) => {
  return (
    <div className="relative h-full [transform-style:preserve-3d]">
      <div
        className={`absolute h-80 w-full transform rounded-xl bg-[#F2F5F7] shadow-md transition duration-500 ${
          isFlipped
            ? '[transform:rotateY(180deg)] [backface-visibility:hidden]'
            : '[backface-visibility:hidden]'
        }`}
      >
        <div className="inset-0 px-6 py-4">
          <div className="flex h-full flex-col justify-between">{back}</div>
        </div>
      </div>
      <div
        className={`absolute h-80 w-full transform rounded-xl bg-[#F2F5F7] shadow-md transition duration-500 ${
          isFlipped
            ? '[backface-visibility:hidden]'
            : '[transform:rotateY(180deg)] [backface-visibility:hidden]'
        }`}
      >
        <div className="inset-0 px-6 py-4">
          <div className="flex h-full flex-col justify-between">{front}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
