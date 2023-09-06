'use client'
import SearchIcon from '@/public/icons/search.svg';
import Square from "@/public/icons/square.svg"
import arrowDown from "@/public/icons/arrowDown.svg"
import Image from 'next/image';
import { use, useState } from 'react';

let filters_info = [
    {title:"دسته بندی ها:" , tags:["#پوشاک","#پوشاک"]},
    {title:"تگ ها:" , tags:["پوشاک"]},
    {title:"طبقه:" , tags:["پوشاک"]},

];
let categories_info = [
    {title:"بخش های اصلی" , subsets:["کافی شاپ","واحد های تجاری","برند","بورس طلا"]},
    {title:"بخش های اصلی" , subsets:["کافی شاپ","واحد های تجاری","برند","بورس طلا"]},
    {title:"بخش های اصلی" , subsets:["کافی شاپ","واحد های تجاری","برند","بورس طلا"]},
];
let tags_info = [
    {title:"پوشاک" , subsets:["#تی شرت","#تی شرت","#لباس مردانه","#لباس مجلسی"]},
    {title:"پوشاک" , subsets:["#تی شرت","#تی شرت","#لباس مردانه","#لباس مجلسی"]},
    {title:"پوشاک" , subsets:["#تی شرت","#تی شرت","#لباس مردانه","#لباس مجلسی"]},
];

const SingleTag = (props)=>{
    return(
        <>
            <small className='bg-[#F1F1F1] flex items-center text-center rounded-2xl shadow-lg px-2'>{props.text}</small>
        </>
    )
}

const Search = ()=>{
    return(
        <>
            <div className='w-full flex justify-center gap-3 m-auto '>
                    <input className="px-3 py-2 w-[80%] outline-none bg-[#F1F1F1] rounded-md" type="text" placeholder="جست و جو کنید..." />
                    <button className='bg-[#FF4545] p-[5px] rounded-md'><Image className=' min-w-[25px]' src={SearchIcon}/></button>
                </div>

        </>
    )
}

const Filters =()=>{
    return(
        <div className='flex flex-col gap-6'>
             {
        filters_info.map(
            (item,index)=>{
                return (
                <div className='flex gap-3'>
                    <p className='whitespace-nowrap'>{item.title}</p>
                    <div className='flex flex-wrap gap-2'>
                        {item.tags.map(tag=>{ return <SingleTag text={tag} />})}   
                    </div>
                </div>
                )
            }
        )
    }
        </div>
    )
}

const Categories =({object,status})=>{

    let [display,setDisplay]=useState("hidden")
    let [rotate,setRotate] = useState("rotate-0")
    
    return(
        <section  className='flex flex-col select-none'>
            <div onClick={changeDisplay} className='cursor-pointer flex justify-between'>
                <p  className='flex gap-2'><Image width={18} src={Square}/> {object.title}</p>
                <Image width={15} src={arrowDown} className={`${rotate} duration-200`} />
            </div>

            {
                status == "tags"? <ul className={`flex flex-wrap gap-2 ${display}`}>
                {object.subsets.map((item,inxed)=>{
                    return <small className='bg-white hover:bg-[#FF4545] hover:text-white cursor-pointer px-3 py-[2px] mt-2 flex items-center text-center rounded-2xl shadow-3xl'>{item}</small>

                })}</ul> 
                : <ul className={`pr-7 ${display}`}>
                    {object.subsets.map((item,inxed)=>{
                        return <li className='mt-2 cursor-pointer'>{item}</li>
                    })}
                </ul>
            }

        </section>
    )

    function changeDisplay(params) {
        display == "hidden" ? setDisplay("block") : setDisplay("hidden")
        rotate == "rotate-0" ? setRotate("rotate-180") : setRotate("rotate-0")
    }
}

const Tags = ()=>{
    return(
        <section className='w-full bg-[#EFEFEF] rounded-xl p-4 pb-5 flex flex-col gap-3'>
            {
                tags_info.map(
                    (item)=>{
                        return <Categories object={item} status={"tags"}/>
                    }
                )
            }

        </section>

    )
}

function page(params) {
    return(
        <>
            <section className="lg:w-[25vw] w-full ">

                <nav className="flex flex-col gap-4 rounded-md shadow-3xl py-3 px-7 ">
                    <Search/>
                    <Filters/>
                    <button className='w-full py-2 bg-[#FF4545] font-bold text-white rounded-md'>حذف فیلتر ها</button>
                    
                    {categories_info.map((item)=>{
                        return <Categories object={item}/>
                    })}

                    <p className='font-bold mt-5'>تگ ها</p>
                    <Tags/>

                </nav>
            </section>
        </>
    )
}
export default page
