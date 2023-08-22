import Header from "@/app/components/header/index"
import PageTitle from "@/app/components/titlepage/index"
import MainAboutUs from "@/app/components/aboutus/index"
const AboutUs = ()=>{
    return (
        <>
            <Header />
            <div className="h-[130px] w-full"></div>
            <PageTitle items={["درباره ما"]} />
            <MainAboutUs />
        </>
    )
}

export default AboutUs