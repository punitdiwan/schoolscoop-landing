"use client";

import NavBar from "@/components/Header/NavBar";
import WhatsappForm from "@/components/whatsapp/WhatsappForm";
import Footer from "@/components/Footer/Footer";
import SupportTicketContent from "./ModuleContent";
import SupportTicketFeatureCardsSection from "./FeatureCard";



const TicketSupport = () =>{
    return (
        <>
              <div>
        <NavBar />

         
        <div className="p-[20px]">
          <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]  overflow-auto scrollbar-hide ">
            <WhatsappForm />

            <div className="mx-auto p-2 ">
    
             <img src="/modules/support.png"
                    className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[550px] lg:mt-1 object-fit"
                    alt="Best School management software | Best school software company | Best software company in Bhopal | Online software service provider."
                    />
             <SupportTicketContent></SupportTicketContent>
              <SupportTicketFeatureCardsSection></SupportTicketFeatureCardsSection>
              <Footer />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default TicketSupport