'use client';
import Shop from "./shop.jsx"
import Brands from "./brands.jsx"
import {useCallback, useEffect, useRef, useState} from "react";

const useGetDevice = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : null);
    const devices = useRef({sm: 576, md: 768, lg: 1024, xl: 1080, xxl: 1536});

    const getDevice = useCallback(() => {
        switch (true) {
            case width >= devices.current.xxl:
                return "xxl";
            case width >= devices.current.xl:
                return "xl";
            case width >= devices.current.lg:
                return "lg";
            case width >= devices.current.md:
                return "md";
            case width < devices.current.sm:
                return "sm";
            default:
                return "lsm"
        }
    }, [width]);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return {devices, getDevice, width};
};

function page(props) {
    const get_devices = useGetDevice()
    const [open_shop,set_open_shop] = useState(null)
    const [col_len,set_col_len] = useState(4)
    useEffect(()=>{
        if(get_devices.getDevice() == "sm"){
            set_col_len(2)
        }else{
            set_col_len(4)
        }
    })
    return(
        <>
            <div className="grow md:max-w-[70%] flex flex-col mb-4">
                <Brands set_open_shop={set_open_shop} data={props.data} startElement={0} maxEleman={open_shop == null?20:(parseInt(open_shop.index / col_len) + 1) * col_len} slider={true}/>
                <Shop set_open_shop={set_open_shop} open_shop={open_shop} class_show={open_shop == null?"invisible absolute opacity-[0]":""} />
                <Brands set_open_shop={set_open_shop} data={props.data} startElement={open_shop == null? 20:(parseInt(open_shop.index / col_len) + 1) * col_len} maxEleman={open_shop == null?0:20-((parseInt(open_shop.index / col_len) + 1) * 4)} slider={true}/>
            </div>
        </>
    )
}
export default page