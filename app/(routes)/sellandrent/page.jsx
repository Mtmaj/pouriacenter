import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import SellAndRentMain from "@/app/components/sellandrent/index"
import Footer from "@/app/components/footer"
const SellAndRent = ()=>{
    return (
        <>
            <Header />
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <PageTitle items={["واحد فروش و اجاره"]} />
            <SellAndRentMain />
            <Footer />
        </>
    )
}
export default SellAndRent