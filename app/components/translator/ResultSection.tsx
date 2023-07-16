import { FC, useEffect, useState } from 'react';

import { EncrytpionAlgorithmItem } from '@customTypes/item';
import { getEncryptionResult } from '@utils/crypto';

import { MdContentCopy } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

import { toast } from 'react-toastify';

interface ResultSectionProps {
  selectedAlgorithms: EncrytpionAlgorithmItem[];
}

const ResultSection: FC<ResultSectionProps> = ({ selectedAlgorithms }) => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');

  const handleInputTextChange = (event: { target: { value: string } }) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    let result = inputText;

    for (let i = 0; i < selectedAlgorithms.length; i++) {
      result = getEncryptionResult(result, selectedAlgorithms[i].algorithm);
      console.log(result, selectedAlgorithms[i].algorithm);
    }

    setOutputText(result);
  }, [inputText, selectedAlgorithms]);

  const cleatInputText = () => {
    setInputText('');

    toast.success('Cleared Input!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const copyOutputText = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      // console.log('Text copied to clipboard:', outputText);
      // toast('Copied!');

      toast.success('Copied!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      console.error('Failed to copy text:', error);

      toast.error('Error!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <>
      <div className="w-full h-full flex flex-col">
        {/* Input */}
        <div className="h-1/2 flex flex-col">
          <div className="h-[60px] w-full px-6 flex justify-between items-center">
            <span className="text-cccGrey text-2xl font-medium">Input</span>

            <div>
              <RiDeleteBinLine size={28} className="cursor-pointer" onClick={cleatInputText} />
            </div>
          </div>

          <div className="flex-grow">
            <textarea
              className="w-full h-full px-2 py-2 bg-cccLightBlue text-lg"
              value={inputText}
              onChange={handleInputTextChange}
              placeholder="|"
            />
          </div>
        </div>

        {/* Output */}
        <div className="h-1/2 flex flex-col">
          <div className="h-[60px] w-full px-6 flex justify-between items-center">
            <span className="text-cccGrey text-2xl font-medium">Output</span>

            <div>
              <MdContentCopy size={28} className="cursor-pointer" onClick={copyOutputText} />
            </div>
          </div>

          <div className="flex-grow">
            <textarea
              className="w-full h-full px-2 py-2 bg-cccLightBlue text-lg"
              value={outputText}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultSection;
