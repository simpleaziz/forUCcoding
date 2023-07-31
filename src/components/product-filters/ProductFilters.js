import React, {useState} from "react"
import {Category} from "./Category"
import {Price} from "./Price"
import {Rating} from "./Rating"

export function ProductFilters() {
    const [toggleFilters, setToggleFilters] = useState(false)

   

    return (
        <>
            <div>
                <div className='mt-[20px] border-b pb-[15px] w-full'>
                    <p className='pb-[20px] text-lg font-medium'>Category</p>
                    <Category />
                </div>
                <div className='w-full mt-[20px] border-b pb-[15px]'>
                    <p className='pb-[20px] text-lg font-medium'>Price</p>
                    <Price />
                </div>
                <div className='w-full mt-[20px] border-b pb-[15px]'>
                    <p className='pb-[20px] text-lg font-medium'>Rating</p>
                    <div className='flex flex-col'>
                        <Rating />
                    </div>
                </div>
            </div>
        </>
    )
}
