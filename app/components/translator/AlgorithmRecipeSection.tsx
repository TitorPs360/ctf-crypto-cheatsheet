import { FC, useCallback } from 'react';

import update from 'immutability-helper';

import AlgorithmCard from './AlgorithmCard';

import { EncrytpionAlgorithmItem } from '@customTypes/item';

import { RiDeleteBinLine } from 'react-icons/ri';

import { toast } from 'react-toastify';

interface AlgorithmRecipeSectionProps {
  selectedAlgorithms: EncrytpionAlgorithmItem[];
  setSelectedAlgorithms: any;
}

const AlgorithmRecipeSection: FC<AlgorithmRecipeSectionProps> = ({
  selectedAlgorithms,
  setSelectedAlgorithms,
}) => {
  {
    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setSelectedAlgorithms((prevCards: EncrytpionAlgorithmItem[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as EncrytpionAlgorithmItem],
          ],
        })
      );
    }, []);

    const removeCard = useCallback((index: number) => {
      setSelectedAlgorithms((prevCards: EncrytpionAlgorithmItem[]) =>
        update(prevCards, {
          $splice: [[index, 1]],
        })
      );
    }, []);

    const clearCard = () => {
      setSelectedAlgorithms([]);

      toast.success('Cleared All Recipe!', {
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

    const renderCard = useCallback((card: EncrytpionAlgorithmItem, index: number) => {
      return (
        <AlgorithmCard
          key={card.id}
          index={index}
          id={card.id}
          algorithm={card.algorithm}
          moveCard={moveCard}
          removeCard={removeCard}
        />
      );
    }, []);

    return (
      <>
        <div className="h-[60px] w-full px-6 flex justify-between items-center">
          <span className="text-cccGrey text-2xl font-medium">Recipe</span>

          <div className="">
            <RiDeleteBinLine size={28} className="cursor-pointer" onClick={clearCard} />
          </div>
        </div>
        <div className="overflow-y-auto" style={{ height: 'calc(100vh - 170px)' }}>
          <div className="w-full px-4 py-4 flex flex-col gap-2">
            {selectedAlgorithms.map((card, i) => renderCard(card, i))}
          </div>
        </div>
      </>
    );
  }
};

export default AlgorithmRecipeSection;
