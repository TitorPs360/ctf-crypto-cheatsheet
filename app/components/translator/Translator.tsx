import { FC, useState } from 'react';

import { EncrytpionAlgorithm } from '@customTypes/crypto';
import { EncrytpionAlgorithmItem } from '@customTypes/item';

import AlgorithmSelectSection from './AlgorithmSelectSection';
import AlgorithmRecipeSection from './AlgorithmRecipeSection';
import ResultSection from './ResultSection';

import { uuid } from 'uuidv4';

const Translator: FC = () => {
  const [selectedAlgorithms, setSelectedAlgorithms] = useState<EncrytpionAlgorithmItem[]>([]);

  const algorithmClickHandler = (newAlgorithm: EncrytpionAlgorithm) => {
    setSelectedAlgorithms([
      ...selectedAlgorithms,
      {
        id: uuid(),
        algorithm: newAlgorithm,
      },
    ]);
  };

  return (
    <>
      <div className="w-full h-full grid grid-cols-10">
        <div className="col-span-2 border-r-4 border-cccGrey">
          <AlgorithmSelectSection algorithmClickHandler={algorithmClickHandler} />
        </div>

        <div className="col-span-2 border-r-4 border-cccGrey">
          <AlgorithmRecipeSection
            selectedAlgorithms={selectedAlgorithms}
            setSelectedAlgorithms={setSelectedAlgorithms}
          />
        </div>

        <div className="col-span-6">
          <ResultSection selectedAlgorithms={selectedAlgorithms} />
        </div>
      </div>
    </>
  );
};

export default Translator;
