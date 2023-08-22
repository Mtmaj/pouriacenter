import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import MainServices from "@/app/components/services/index"
const Services = ()=>{
    return (
        <>
            <Header />
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <PageTitle items={["خدمات"]} />
            <MainServices />
        </>
    )
}

export default Services