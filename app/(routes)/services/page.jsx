import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import MainServices from "@/app/components/services/index"
import Footer from "@/app/components/footer"
const Services = ()=>{
    return (
        <>
            <Header />
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <PageTitle items={["خدمات"]} />
            <MainServices />
            <Footer />
        </>
    )
}

export default Services