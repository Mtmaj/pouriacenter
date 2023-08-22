import Slider from "../slider/index"

const MainNewsPage = ()=>{
    return (
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-[20px] gap-x-[20px] lg:px-[90px] px-[40px] my-[40px]">
            <div className="col-span-2 flex lg:order-1 order-last">
                <div className="flex flex-col  md:gap-y-[30px] gap-y-[10px] w-full items-start">
                    <div className="flex flex-row gap-x-[30px] justify-between md:w-fit w-full">
                        <span>کد : <span className="text-green">127</span></span>
                        <span>تاریخ : <span className="text-green">1402/5/29</span></span>
                    </div>
                    
                    <span className="font-bold text-[20px]">لورم ایپسوم</span>
                    <p className="max-h-[100%] text-justify ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className="col-span-2 lg:order-last order-1">
                <Slider />
            </div>
        </div>
    )
}

export default MainNewsPage