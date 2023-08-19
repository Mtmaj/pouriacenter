import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import FilterCategory from "@/app/components/sellandrent/filters/index"

const SellAndRent = ()=>{
    return (
        <>
            <Header />
            <div className="h-[130px] w-full"></div>
            <PageTitle items={["واحد فروش و اجاره"]} />
            <FilterCategory />
        </>
    )
}
export default SellAndRent