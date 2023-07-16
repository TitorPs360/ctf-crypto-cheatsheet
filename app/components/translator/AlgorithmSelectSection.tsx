import { FC } from 'react';

import {
  EncrytpionAlgorithm,
  EncrytpionNameMap,
  EncrytpionNames,
  EncrytpionNamesType,
} from '@customTypes/crypto';

interface AlgorithmSelectSectionProps {
  algorithmClickHandler: (newAlgorithm: EncrytpionAlgorithm) => void;
}

const AlgorithmSelectSection: FC<AlgorithmSelectSectionProps> = ({ algorithmClickHandler }) => {
  return (
    <>
      <div className="h-[60px] w-full px-6 flex justify-start items-center">
        <span className="text-cccGrey text-2xl font-medium">Algorithm</span>
      </div>
      <div className="overflow-y-auto" style={{ height: 'calc(100vh - 170px)' }}>
        <div className="w-full px-4 py-4 flex flex-col gap-2">
          {EncrytpionNames.map((EncrytpionName) => {
            return (
              <div
                key={EncrytpionName}
                className="w-full h-12 px-4 bg-cccLightBlue rounded-md flex items-center justify-start"
                onClick={() =>
                  algorithmClickHandler(
                    EncrytpionNameMap[EncrytpionName as EncrytpionNamesType] as EncrytpionAlgorithm
                  )
                }
              >
                <span className="text-cccGrey text-lg font-medium">{EncrytpionName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AlgorithmSelectSection;
