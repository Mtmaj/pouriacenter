import  Content  from "./content.jsx"
import  Navbar  from "./navbar.jsx"
export default ()=>{
    return(
        <>
            <section className="flex flex-col lg:flex-row px-6">
                <Navbar/>
                <Content/>

            </section>
        </>
    )
}
