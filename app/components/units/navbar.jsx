'use client'
import SearchIcon from '@/public/icons/search.svg';
import Square from "@/public/icons/square.svg"
import arrowDown from "@/public/icons/arrowDown.svg"
import Image from 'next/image';
import { use, useState } from 'react';
import { get_category } from '@/app/utils/network/shop';

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
    var text = ""
    if(props.floor == true){
        if(props.text == 0){
            text="طبقه همکف"
        }
        if(props.text == 1){
            text="طبقه اول"
        }
        if(props.text == 2){
            text="طبقه دوم"
        }
        if(props.text == 3){
            text="طبقه سوم"
        }
        if(props.text == 4){
            text="بام"
        }
    }
    return(
        <>
            <small className='bg-[#F1F1F1] flex items-center text-center rounded-2xl px-2'>{props.floor?text:props.text}</small>
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
                    <input value={search_input} onChange={(e)=>{set_search_input(e.currentTarget.value)}} className="px-3 py-[8px] w-[100%] outline-none bg-[#F1F1F1]  rounded-[10px] text-[14px] h-fit" type="text" placeholder="جست و جو کنید..." />
                    <button onClick={handleSearch} className='bg-orange h-auto w-[47px] flex items-center justify-center rounded-md'><Image className=' min-w-[20px]' src={SearchIcon}/></button>
                </div>

        </>
    )
}

const Filters =(props)=>{
    return(
        <div className='flex flex-col gap-6'>
            <div className='flex gap-3'>
                <p className='whitespace-nowrap'>دسته بندی ها :</p>
                <div className='flex flex-wrap gap-2 gap-y-[10px]'>
                    {props.filters.categorys == null?<SingleTag text={"همه"} />: props.filters.categorys.map((tag,index)=>{ return <div onClick={()=>{removeCtaegory(index)

                    }} ><SingleTag text={tag} /></div>})}   
                </div>
            </div>
            <div className='flex gap-3'>
                <p className='whitespace-nowrap'>تگ ها :</p>
                <div className='flex flex-wrap gap-2 gap-y-[10px]'>
                    {props.filters.tags == null?<SingleTag text={"همه"} />:props.filters.tags.map((tag,index)=>{ return <div onClick={()=>{props.filters.set_tags(toggle(props.filters.tags,tag));props.filters.set_data(null)}}> <SingleTag text={"#"+tag} /> </div>})}   
                </div>
            </div>
            <div className='flex gap-3'>
                <p className='whitespace-nowrap'>طبقات :</p>
                <div className='flex flex-wrap gap-2 gap-y-[10px]'>
                    {props.filters.floor == null?<SingleTag text={"همه"} />:props.filters.floor.map((tag,index)=>{ return <div onClick={()=>{
                        var list_change = [...props.filters.floor]
                        list_change.splice(index,1)
                        if(list_change.length == 0){
                            props.filters.set_floor(null)
                        }else{
                            props.filters.set_floor([...list_change])
                        }
                        props.filters.set_data(null)
                        
                    }}><SingleTag text={tag} floor={true} /></div>})}   
                </div>
            </div>
        </div>
    )
    function removeCtaegory(index){
        var query = new URLSearchParams(window.location.search)
        var categorys = query.get("category")
        var list_category = [...categorys.split(",")]
        list_category.splice(index,1)
        if(list_category.length == 0){
            query.delete("category")
        }else{
            query.set("category",list_category.toString())
        }
        window.location.search = query.toString()
    }
}

const CategoriesMainPart =({object,status})=>{

    let [display,setDisplay]=useState("hidden")
    let [rotate,setRotate] = useState("rotate-0")
    
    return(
        <section  className='flex flex-col select-none'>
            <div onClick={changeDisplay} className='cursor-pointer flex justify-between'>
                <p  className='flex gap-2'><Image width={18} src={Square}/>بخش های اصلی</p>
                <Image width={15} src={arrowDown} className={`${rotate} duration-200`} />
            </div>

            <ul className={`pr-7 flex flex-col ${display}`}>
                    <a className='mt-2 cursor-pointer hover:text-green transition-all' href='/shops'>واحد های تجاری</a>
                    <a className='mt-2 cursor-pointer hover:text-green transition-all' href='/shops?is_brand=true'>برند ها</a>
                    <a className='mt-2 cursor-pointer hover:text-green transition-all' href='/shops?category=کافی شاپ'>کافی شاپ</a>
                    <a className='mt-2 cursor-pointer hover:text-green transition-all' href='/shops?category=بورس طلا'>بورس طلا</a>
            </ul>

        </section>
    )

    function changeDisplay(params) {
        display == "hidden" ? setDisplay("block") : setDisplay("hidden")
        rotate == "rotate-0" ? setRotate("rotate-180") : setRotate("rotate-0")
    }
}


const CtaegoryFloor =(props)=>{

    let [display,setDisplay]=useState("hidden")
    let [rotate,setRotate] = useState("rotate-0")
    
    return(
        <section  className='flex flex-col select-none'>
            <div onClick={changeDisplay} className='cursor-pointer flex justify-between'>
                <p  className='flex gap-2'><Image width={18} src={Square}/>طبقات</p>
                <Image width={15} src={arrowDown} className={`${rotate} duration-200`} />
            </div>

            <ul className={`pr-7 flex flex-col ${display}`}>
                {categories_info[1].subsets.map((item,index)=>{
                    return <span className={'mt-2 cursor-pointer hover:text-green transition-all ' + (props.filters.floor == null?"": props.filters.floor.indexOf(index-1) != -1?"text-green":"")} href='/shops' onClick={()=>{
                        if(index == 0){
                            props.filters.set_floor(null)
                            props.filters.set_data(null)
                            return
                        }
                        var list_change = null
                        if(props.filters.floor == null){
                            list_change = []
                        }else{
                            list_change = [...props.filters.floor]
                        }
                        if(list_change.indexOf(index-1) == -1){
                            list_change.push(index-1)
                        }else{
                            list_change.splice(list_change.indexOf(index-1),1)
                            if(list_change.length == 0){
                                props.filters.set_floor(null)
                                props.filters.set_data(null)
                                return
                            }
                        }
                        props.filters.set_floor([...list_change])
                        props.filters.set_data(null)
                    }}>{item}</span>
                })}
            </ul>

        </section>
    )

    function changeDisplay(params) {
        display == "hidden" ? setDisplay("block") : setDisplay("hidden")
        rotate == "rotate-0" ? setRotate("rotate-180") : setRotate("rotate-0")
    }
}
function toggle(list,item){
    var change_list = null
    if(list == null){
        change_list = []
    }else{
        change_list = [...list]
    }
    if(change_list.indexOf(item) == -1){
        change_list.push(item)
    }else{
        change_list.splice(change_list.indexOf(item),1)
    }
    if(change_list.length == 0){
        return null
    }
    return [...change_list]
    
}
const CategoryTags = ({title,data,filters})=>{
    let [display,setDisplay]=useState("hidden")
    let [rotate,setRotate] = useState("rotate-0")

    return(
        <section  className='flex flex-col select-none'>
            <div onClick={changeDisplay} className='cursor-pointer flex justify-between'>
                <p  className='flex gap-2'><Image width={18} src={Square}/> {title}</p>
                <Image width={15} src={arrowDown} className={`${rotate} duration-200`} />
            </div>

            {
                <ul className={`flex flex-wrap gap-2 ${display}`}>
                    <small onClick={selectAll} className={'hover:bg-green hover:text-white cursor-pointer px-3 py-[2px] mt-2 flex items-center text-center rounded-2xl shadow-3xl ' + (filters.categorys == null?"text-black bg-white": filters.categorys.indexOf(title) != -1?"text-white bg-orange":"text-black bg-white")}>همه</small>
                    {data.map((item,inxed)=>{
                        return <small className={'hover:bg-green hover:text-white cursor-pointer px-3 py-[2px] mt-2 flex items-center text-center rounded-2xl shadow-3xl '+(filters.tags == null?"text-black bg-white" : filters.tags.indexOf(item) == -1?"text-black bg-white":"text-white bg-orange")} onClick={()=>{filters.set_tags(toggle(filters.tags,item));filters.set_data(null)}}>{item}</small>

                    })}
                </ul>
            }

        </section>
    )

    function changeDisplay(params) {
        display == "hidden" ? setDisplay("block") : setDisplay("hidden")
        rotate == "rotate-0" ? setRotate("rotate-180") : setRotate("rotate-0")
    }
    function selectAll(){
        var query = new URLSearchParams(window.location.search)
        var categorys = query.get("category")
        if(categorys == null){
            list_category = []
        }else{
            var list_category = [...categorys.split(",")]
        }
        if(list_category.indexOf(title) == -1){
            list_category.push(title)
        }else{
            list_category.splice(list_category.indexOf(title),1)
        }
        if(list_category.length == 0){
            query.delete("category")
        }else{
            query.set("category",list_category.toString())
        }
        window.location.search = query.toString()
    }
}

const Tags = (props)=>{
    const [tags,set_tags] = useState(null)
    if(tags == null){
        get_category().then((data)=>{
            console.log(data.data)
            if(data.status == 200){
                set_tags(data.data)
            }
        })
    } 
    return(
        <section className='w-full bg-[#EFEFEF] rounded-xl p-4 pb-5 flex flex-col gap-3'>
            
            {tags == null?<></>:
            tags.map(
                (item)=>{
                    return (
                        <CategoryTags title={item.name} data={item.tags} filters={props.filters} />
                    )
                }
            )}
            

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
                    <button className='w-full py-1 bg-orange text-[14px] text-white rounded-md' onClick={()=>{
                        var query = new URLSearchParams(window.location.search)
                        var categorys = query.delete("category")
                        window.location.search = query.toString()
                    }} >حذف فیلتر ها</button>
                    
                    <CategoriesMainPart/>
                    <CtaegoryFloor filters={props} />
                    <p className='font-bold mt-5'>تگ ها</p>
                    <Tags filters={props} />

                </nav>
            </section>
        </>
    )
}
export default page
