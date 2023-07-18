import { FC, useState } from 'react';

import { EncrytpionAlgorithm, EncrytpionNameMap, EncrytpionNamesType } from '@customTypes/crypto';

import { encodingIdentifier } from '@utils/identify';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BsGearFill } from 'react-icons/bs';

const Identifier: FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [possibleAlgorithms, setPossibleAlgorithms] = useState<EncrytpionAlgorithm[]>([]);

  const inputTextChangeHanlder = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
  };

  const indentifyInput = () => {
    setPossibleAlgorithms(encodingIdentifier(inputText));
  };

  return (
    <>
      <div className="w-[900px] mx-auto flex flex-row">
        <div className="w-1/2 h-full flex flex-col px-4">
          <div className="h-[60px] w-full px-2 flex justify-between items-center">
            <span className="text-cccGrey text-2xl font-medium">Input</span>

            <div>
              <RiDeleteBinLine size={28} className="cursor-pointer" />
            </div>
          </div>

          <div className="flex-grow">
            <textarea
              className="w-full h-full px-2 py-2 bg-cccLightBlue text-lg"
              rows={8}
              placeholder="|"
              value={inputText}
              onChange={inputTextChangeHanlder}
            />
          </div>

          <div
            className="w-full py-3 flex justify-center items-center bg-cccVeryDarkBlue rounded-lg"
            onClick={indentifyInput}
          >
            <BsGearFill size={20} className="mr-3" />
            <span className="text-lg text-cccGrey">Identify</span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col">
          <div className="h-[60px] w-full px-6 flex justify-start items-center">
            <span className="text-cccGrey text-2xl font-medium">Possible Algorithm</span>
          </div>
          <div className="overflow-y-auto" style={{ height: 'calc(100vh - 170px)' }}>
            <div className="w-full px-4 py-4 flex flex-col gap-2">
              {possibleAlgorithms.map((algorithm) => {
                return (
                  <div
                    key={algorithm}
                    className="w-full h-12 px-4 bg-cccLightBlue rounded-md flex items-center justify-start"
                  >
                    <span className="text-cccGrey text-lg font-medium">
                      {Object.keys(EncrytpionNameMap).find(
                        (key) => EncrytpionNameMap[key as EncrytpionNamesType] === algorithm
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Identifier;
