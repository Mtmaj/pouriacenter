import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import MainContactUs from "@/app/components/contactus/index"
import Footer from "@/app/components/footer"
const ContactUS = ()=>{
    return (
        <>
            <Header/>
            <div className="md:h-[140px] lg:h-[130px] h-[100px] w-full"></div>
            <PageTitle items={["تماس با ما"]} />
            <MainContactUs />
            <Footer />
        </>
    )
}

export default ContactUS