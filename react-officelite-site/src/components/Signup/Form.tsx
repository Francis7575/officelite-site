import SelectionBox from './SelectionBox';
import arrowDown from '/assets/sign-up/icon-arrow-down.svg'
import arrowUp from '/assets/sign-up/icon-arrow-up.svg'
import crossIcon from '/assets/sign-up/icon-cross.svg'
import { useState } from 'react';
import { defaultOption, FormData } from '../../types/types';

const Form = () => {
   const [isSelectionBoxOpen, setIsSelectionBoxOpen] = useState<boolean>(false);
   const [selectedOption, setSelectedOption] = useState<defaultOption>({
      name: 'Basic Pack',
      price: 'Free',
   });
   const [fieldErrors, setFieldErrors] = useState<{ [key: string]: boolean }>({});
   const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      phoneNumber: '',
      company: ''
   });
   const inputFields = [
      { type: 'text', name: 'name', placeholder: 'Name', showError: true },
      { type: 'email', name: 'email', placeholder: 'Email Address', showError: true },
      { type: 'hidden', name: 'plan' },
      { type: 'number', name: 'phone number', placeholder: 'Phone Number', showError: true },
      { type: 'text', name: 'company', placeholder: 'Company' }
   ];
   const toggleSelectionBox = () => {
      setIsSelectionBoxOpen(prevState => !prevState);
   };

   const handleSelectOption = (option: defaultOption) => {
      setSelectedOption(option);
      setIsSelectionBoxOpen(false);
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const errors: { [key: string]: boolean } = {};

      inputFields.forEach((field) => {
         if (field.showError === true) {
            const formElement = e.currentTarget as HTMLFormElement;
            const inputElement = formElement.elements.namedItem(field.name) as HTMLInputElement | null;
            if (inputElement && !inputElement.value) {
               errors[field.name] = true;
            } else {
               errors[field.name] = false;
            }
         }
      });
      setFieldErrors(errors);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value
      }));
   };

   return (
      <section className="px-[1.5rem] mt-[4rem] md:mt-[6.5rem] flex justify-center lg:px-0 lg:mt-0 pb-[5.43rem]">
         <form onSubmit={handleSubmit} className="bg-white p-[1.5rem] rounded-[.813rem] shadow-form
                  max-w-[27.813rem] w-full md:pt-[2.5rem] md:px-[2.625rem] md:pb-[3.18rem] lg:min-w-[27.813rem]">
            <div className="flex flex-col gap-[1.5rem] w-full">
               {inputFields.map((field, index) => (
                  <div key={index} className={`relative w-full ${index === 4 && 'mb-[2rem]'}`}>
                     {field.type !== 'hidden' ? (
                        <>
                           <input
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              value={formData[field.name]}
                              onChange={handleChange}
                              className={`w-full border-b-[1px]  px-4 pb-[1.063rem]
                                          ${fieldErrors[field.name] ? 'border-error' : 'border-form-line'}`} />
                           {fieldErrors[field.name] && (
                              <img
                                 src={crossIcon}
                                 alt="error"
                                 className="absolute right-3 bottom-3" />
                           )}
                        </>
                     ) : (
                        <div className='relative'>
                           <input
                              name={field.name}
                              className="hidden"
                              onChange={handleChange}
                              value={`${selectedOption.name} ${selectedOption.price}`} />
                           <button
                              type="button"
                              aria-haspopup="listbox"
                              aria-expanded="true"
                              onClick={toggleSelectionBox}
                              className='flex justify-between items-center w-full border-b-[1px]
                                       border-form-line px-4 pb-[1.063rem]'>
                              <div className='flex items-center gap-[.5rem] font-bold'>
                                 <span className='text-slate-blue'>
                                    {selectedOption.name}
                                 </span>
                                 <span className='text-slate-blue-opacity-40'>
                                    {selectedOption.price}
                                 </span>
                              </div>
                              <img src={isSelectionBoxOpen ? arrowUp : arrowDown} alt="" />
                           </button>
                           <SelectionBox isOpen={isSelectionBoxOpen} onSelectOption={handleSelectOption} />
                        </div>
                     )}
                  </div>
               ))}
            </div>
            <div className="flex justify-center">
               <button type="submit" className="bg-royal-blue py-[.875rem] w-full rounded-[1.75rem] text-white 
                                    font-bold leading-[1.75rem] hover:bg-royal-blue-hover">
                  Get on the list
               </button>
            </div>
         </form>
      </section>
   );
};


export default Form;
