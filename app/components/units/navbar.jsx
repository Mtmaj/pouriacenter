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
    {title:"طبقات" , subsets:["همه","طبقه همکف","طبقه اول","طبقه دوم","طبقه سرم","بام"]},
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

const Search = (props)=>{
    const [search_input,set_search_input] = useState("")
    function handleSearch(){
        if(search_input == ""){
            props.set_search(null);
            props.set_data(null)
        }else{
            props.set_search(search_input)
            props.set_data(null)
        }
    }
    return(
        <>
            <div className='w-full flex justify-center gap-1 m-auto '>
                    <input value={search_input} onChange={(e)=>{set_search_input(e.currentTarget.value)}} className="px-3 py-[8px] w-[100%] outline-none bg-[#F1F1F1] rounded-[10px] text-[14px] h-fit" type="text" placeholder="جست و جو کنید..." />
                    <button onClick={handleSearch} className='bg-orange h-auto w-[47px] flex items-center justify-center rounded-md'><Image className=' min-w-[20px]' src={SearchIcon}/></button>
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
                    return <small className='bg-white hover:bg-orange hover:text-white cursor-pointer px-3 py-[2px] mt-2 flex items-center text-center rounded-2xl shadow-3xl'>{item}</small>

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

function page(props) {
    return(
        <>
            <section className="md:w-[300px] w-full">

                <nav className="flex flex-col gap-4 rounded-md border-[#989797] border py-5 px-[15px] ">
                    <Search set_search={props.set_search} set_data={props.set_data}/>
                    <Filters filters={props} />
                    <button className='w-full py-1 bg-orange text-[14px] text-white rounded-md'>حذف فیلتر ها</button>
                    
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
