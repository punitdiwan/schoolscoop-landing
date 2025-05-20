"use client";
import ModuleContent from '../../../components/Modules/ModuleContent';

import NavBar from "@/components/Header/NavBar";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import Footer from "@/components/Footer/Footer";
import StudentPromotionContent from "./ModuleContent"
import PromotionFeatureCardsSection from "./FeatureCard"

const StudentPromotion = () =>{
    return (
        <>
              <div>
        <NavBar />

         
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />

            <div className="mx-auto p-2 ">
     <img src="/modules/promotion.png"
                    className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] lg:mt-1 object-fit"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
            <StudentPromotionContent></StudentPromotionContent>
            <PromotionFeatureCardsSection></PromotionFeatureCardsSection>
              {/* <SectionSix />s */}

              <Footer />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default StudentPromotion