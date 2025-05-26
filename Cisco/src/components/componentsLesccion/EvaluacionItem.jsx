import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegCircle } from "react-icons/fa6";

export default function EvaluacionItem() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <div className="w-[23rem]">
            <div className="bg-white/20 rounded-xl px-4 py-3 mb-4 w-full">
                <div className='flex justify-between'>
                    <h2 className="font-bold mb-2 text-lg">Evaluación 1</h2>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <IoIosArrowDown size={30} className="text-white" />
                        ) : (
                            <IoIosArrowDown size={30} className="text-white" />
                        )}
                    </button>
                </div>

            {isOpen && (
                <div className="px-4 py-3 text-white">
                    <p className="text-xs leading-tight mt-2">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit torquent ated:
                    </p>

                    <p className='text-xs leading-tight mt-2 font-semibold'>
                        1. ¿Lorem ipsum dolor sit amet consectetur adipiscing?
                        <div className='flex flex-col gap-2 ml-4 mt-2'>
                        <FaRegCircle/>
                        <FaRegCircle/>
                        <FaRegCircle/>
                        </div>
                    </p>

                    <p className='text-xs leading-tight mt-2 font-semibold'>
                        1. ¿Lorem ipsum dolor sit amet consectetur adipiscing elit torquent?
                        <div className='flex flex-col gap-2 ml-4 mt-2'>
                        <FaRegCircle/>
                        <FaRegCircle/>
                        <FaRegCircle/>
                        </div>
                    </p>

                    <p className='text-xs leading-tight mt-2 font-semibold'>
                        1. ¿Lorem ipsum dolor sit amet consectetur adipiscing elit torquent?
                        <div className='flex flex-col gap-2 ml-4 mt-2'>
                        <FaRegCircle/>
                        <FaRegCircle/>
                        <FaRegCircle/>
                        </div>
                    </p>
                </div>   
            )}
            </div>
        </div>
        </>
    )
} 