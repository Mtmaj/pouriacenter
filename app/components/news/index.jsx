import PageIndex from "@/app/components/pageindex/index"

const NewsItem = ()=>{
    return (
        <div className="w-full flex sm:flex-row gap-y-[15px] flex-col justify-start h-fit gap-x-[10px]" >
            <img className="h-[200px] border p-[5px] sm:w-[300px] w-full border-[rgba(0,0,0,0.2)] object-cover" src="https://lh5.googleusercontent.com/p/AF1QipPcnH579bHvrh3sAFqY3s4fxJ5MEtFSnc7l5GvU=w260-h175-n-k-no"/>
            <div className="flex flex-col sm:gap-y-[40px] gap-[10px] sm:p-0 px-[10px] ">
                <div className="flex flex-row gap-x-[30px] sm:justify-start  justify-between">
                    <span>کد : <span className="text-orange">127</span></span>
                    <span>تاریخ : <span className="text-orange">1402/5/29</span></span>
                </div>
                <div className="flex flex-col gap-y-[10px]">
                    <span className="font-bold text-[17px]">لورم ایپسوم</span>
                    <p className="max-h-[100%] sm:text-start  text-justify sm:line-clamp-3 line-clamp-2 ">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                
            </div>
        </div>
    )
}

const NewsMain = ()=>{
    return (
        <div className="w-full flex flex-col md:px-[100px] px-[20px] mt-[30px] gap-y-[30px]">
            <NewsItem />
            <div className="w-full bg-orange h-[1px] opacity-[0.2]"></div>
            <NewsItem />
            <div className="w-full bg-orange h-[1px] opacity-[0.2]"></div>
            <NewsItem />
            <div className="w-full bg-orange h-[1px] opacity-[0.2]"></div>
            <NewsItem />
            <div className="w-full bg-orange h-[1px] opacity-[0.2]"></div>
            <NewsItem />
            <PageIndex items={[1,2,3].reverse()} select={2} />
        </div>
    )
}

export default NewsMain