import React from 'react'

export default function Header() {
  return (
    <div className='border-b mb-4 mt-2 pb-4 border-stone-300'>
        <button className='flex p-0.5 items-center rounded hover:bg-stone-200 transition-colors relative gap-2 w-full'>
            <div className='size-8 bg-violet-400 rounded-full'></div>
            <div className='text-start'>
                <span className='block text-sm font-bold'>Kai Wang</span>
                <span className='block text-sm text-stone-500'>wkai@microsoft.com</span>
            </div>
        </button>
    </div>
  )
}
