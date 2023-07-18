import { Dispatch, FC, SetStateAction, useCallback } from 'react';

import {
  EncrytpionAlgorithm,
  EncrytpionNameMap,
  EncrytpionNames,
  EncrytpionNamesType,
} from '@customTypes/crypto';

import { RiDeleteBinLine } from 'react-icons/ri';
import { BiSolidCheckbox, BiSolidCheckboxChecked } from 'react-icons/bi';

interface InputSectionProps {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  posibleAlgorithms: EncrytpionAlgorithm[];
  setPossibleAlgorithms: Dispatch<SetStateAction<EncrytpionAlgorithm[]>>;
}

const InputSection: FC<InputSectionProps> = ({
  inputText,
  setInputText,
  posibleAlgorithms,
  setPossibleAlgorithms,
}) => {
  const inputTextChangeHandler = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
  };

  const cleatInputText = () => {
    setInputText('');
  };

  const algorithmClickHandler = useCallback((algorithm: EncrytpionAlgorithm) => {
    setPossibleAlgorithms((prevArray) => {
      const backupArray = [...prevArray];

      if (prevArray.includes(algorithm)) {
        const index = prevArray.indexOf(algorithm);
        backupArray.splice(index, 1);
      } else {
        backupArray.push(algorithm);
      }

      return backupArray;
    });
  }, []);

  const selectAllAlgorithms = () => {
    const tempArray = EncrytpionNames.map((name) => EncrytpionNameMap[name as EncrytpionNamesType]);
    setPossibleAlgorithms(tempArray as EncrytpionAlgorithm[]);
  };

  const removeAllAlgorithms = () => {
    setPossibleAlgorithms([]);
  };

  return (
    <>
      <div className="w-full flex flex-col" style={{ height: 'calc(100vh - 110px)' }}>
        <div className="h-1/2 flex flex-col px-4">
          <div className="h-[60px] w-full px-2 flex justify-between items-center">
            <span className="text-cccGrey text-2xl font-medium">Input</span>

            <div>
              <RiDeleteBinLine size={28} className="cursor-pointer" onClick={cleatInputText} />
            </div>
          </div>

          <div className="flex-grow">
            <textarea
              className="w-full h-full px-2 py-2 bg-cccLightBlue text-lg"
              placeholder="|"
              value={inputText}
              onChange={inputTextChangeHandler}
            />
          </div>
        </div>

        <div className="h-1/2 flex flex-col">
          <div className="h-[60px] w-full px-6 flex justify-start items-center">
            <span className="text-cccGrey text-2xl font-medium">Algorithm</span>
          </div>
          <div className="overflow-y-auto" style={{ height: 'calc(100vh - 500px)' }}>
            <div className="w-full px-4 py-4 flex flex-col gap-2">
              <div className="w-full h-12 px-4 bg-cccLightBlue rounded-md flex items-center justify-start">
                {posibleAlgorithms.length == EncrytpionNames.length ? (
                  <BiSolidCheckboxChecked
                    size={24}
                    className="text-cccNeonGreen mr-4"
                    onClick={removeAllAlgorithms}
                  />
                ) : (
                  <BiSolidCheckbox
                    size={24}
                    className="text-cccGrey mr-4"
                    onClick={selectAllAlgorithms}
                  />
                )}
                <span className="text-cccGrey text-lg font-medium">All</span>
              </div>

              {EncrytpionNames.map((EncrytpionName) => {
                return (
                  <div
                    key={EncrytpionName}
                    className="w-full h-12 px-4 bg-cccLightBlue rounded-md flex items-center justify-start"
                  >
                    <div
                      onClick={() =>
                        algorithmClickHandler(
                          EncrytpionNameMap[
                            EncrytpionName as EncrytpionNamesType
                          ] as EncrytpionAlgorithm
                        )
                      }
                    >
                      {posibleAlgorithms.includes(
                        EncrytpionNameMap[
                          EncrytpionName as EncrytpionNamesType
                        ] as EncrytpionAlgorithm
                      ) ? (
                        <BiSolidCheckboxChecked size={24} className="text-cccNeonGreen mr-4" />
                      ) : (
                        <BiSolidCheckbox size={24} className="text-cccGrey mr-4" />
                      )}
                    </div>

                    <span className="text-cccGrey text-lg font-medium">{EncrytpionName}</span>
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

export default InputSection;
