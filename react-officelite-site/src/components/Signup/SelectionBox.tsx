import checkIcon from '/assets/sign-up/icon-check.svg'
import { useState } from 'react';
import { SelectionBoxProps } from '../../types/types';

const options = [
  { name: 'Basic Pack', price: 'Free' },
  { name: 'Pro Pack', price: '$9.99' },
  { name: 'Ultimate Pack', price: '$19.99' }
];

const SelectionBox = ({ isOpen, onSelectOption }: SelectionBoxProps) => {
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const handleOptionClick = (index: number) => {
    const option = options[index];
    setSelectedOption(index);
    onSelectOption(option);
  };

  return (
    <>
      {isOpen && (
        <section className="absolute flex flex-col gap-4 z-10 w-full bg-white border border-gray-300 
            rounded-[.5rem] mt-[.5rem] py-[1.5rem] px-[2rem] shadow-selection-box">
          {options.map((option, index) => (
            <div key={index} className={`flex justify-between items-center cursor-pointer
                ${index !== options.length - 1 && 'border-b border-form-line-2 pb-[1rem]'}`}
              onClick={() => handleOptionClick(index)}
            >
              <div className='font-bold flex gap-[.5rem]'>
                <span className="text-slate-blue">
                  {option.name}
                </span>
                <span className="text-slate-blue-opacity-40">
                  {option.price}
                </span>
              </div>
              {selectedOption === index && <img src={checkIcon} alt="Selected Icon" />}
            </div>
          ))}
        </section >
      )}
    </>
  )
}

export default SelectionBox