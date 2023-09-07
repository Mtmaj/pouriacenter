import Units from '@/app/components/units/main';
import Header from "@/app/components/header/index"

function page() {
    return(
        <>
                    
        <Header/>
        <div className="md:h-[130px] h-[100px] w-full"></div>
        <Units/>
        </>
    )
}
export default page