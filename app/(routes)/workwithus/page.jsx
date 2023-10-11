import Header from "@/app/components/header/index"
import Footer from '@/app/components/footer';
import MainWorkWithUs from "@/app/components/workwithus/index"
const WorkWithUsPage = () => {
    return (
        <>
            <Header />
            <div className="md:h-[130px] h-[100px] w-full"></div>
            <MainWorkWithUs />
            <Footer />
        </>
    )
}

export default WorkWithUsPage