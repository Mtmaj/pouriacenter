import Shop from "./shop.jsx"
import Brands from "./brands.jsx"

function page() {
    return(
        <>
            <div className="grow md:max-w-[70%] flex flex-col gap-8 mb-4">
                <Brands maxEleman={12} slider={false}/>
                <Shop/>
                <Brands maxEleman={8} slider={true}/>


            </div>
        </>
    )
}
export default page