import { FC } from 'react';

import { EncrytpionAlgorithm, EncrytpionNameMap, EncrytpionNamesType } from '@customTypes/crypto';
import { BiSolidChevronRight } from 'react-icons/bi';

interface ResultCardProps {
  algorithms: EncrytpionAlgorithm[];
  result: string;
}

const ResultCard: FC<ResultCardProps> = ({ algorithms, result }) => {
  return (
    <>
      <div className="w-[320px] bg-cccLightBlue py-4 px-4">
        <div className="w-full flex flex-row items-center flex-wrap text-cccGrey text-sm">
          <span>Original Text</span>
          <BiSolidChevronRight />

          {algorithms.map((algorithm, index) => {
            if (index == algorithms.length - 1) {
              return (
                <>
                  <span>
                    {Object.keys(EncrytpionNameMap).find(
                      (key) => EncrytpionNameMap[key as EncrytpionNamesType] === algorithm
                    )}
                  </span>
                </>
              );
            } else {
              return (
                <>
                  <span>
                    {Object.keys(EncrytpionNameMap).find(
                      (key) => EncrytpionNameMap[key as EncrytpionNamesType] === algorithm
                    )}
                  </span>
                  <BiSolidChevronRight />
                </>
              );
            }
          })}
        </div>

        <div className="h-[1px] mr-4 my-2 bg-cccNeonGreen"></div>

        <div>
          <textarea
            className="text-lg bg-cccLightBlue w-full h-full"
            rows={20}
            value={result}
            readOnly
          />
        </div>

        {/* <div className="max-w-full overflow-x-hidden">
          <p className="text-lg overflow-ellipsis whitespace-normal">{result.toString()}</p>
        </div> */}
      </div>
    </>
  );
};

export default ResultCard;
