import TravelBenefit from "@/components/home/benefit-section/benefits-section";
import FooterReveal from "@/components/home/footer-reveal";
import { benefits } from "@/data/become-a-rep";
import { footerReveal } from "@/data/site2";
import "swiper/css";


export default function Home() {
    return (

        <>
            <div className="pt-32 bg-[#ebebe6]"></div>
            <TravelBenefit data={benefits} images={benefits.images}/>
            <FooterReveal data={footerReveal} />
        </>
    );
}



