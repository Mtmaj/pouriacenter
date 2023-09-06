import  Content  from "./content.jsx"
import  Navbar  from "./navbar.jsx"
export default ()=>{
    return(
        <>
            <section className="flex flex-col md:flex-row px-6 gap-10">
                <Navbar/>
                <Content/>

            </section>
        </>
    )
}
