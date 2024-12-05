import React from 'react'

export interface CardProps {
    title: string;
    data1: number;
    data2: number;
    className?: string;
}

export default function Card(props: CardProps) {
    const data2m = props.data2 > 0 ? '+' + props.data2 : props.data2;
  return (
    <div className={`flex flex-col justify-between bg-indigo-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${props.className}`}>
        <div className='text-xl font-bold'>{props.title}</div>
        <div className='mt-8 flex justify-between items-center'>
            <span className='text-2xl'>{props.data1}</span>
            <span className={`${props.data2 > 0? "text-green-700":"text-red-700"}  text-xl font-bold`}>{data2m}</span>
        </div>
    </div>
  )
}
