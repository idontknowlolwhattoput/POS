import { Box, Card, Flex, Inset} from "@radix-ui/themes/dist/cjs/index.js"
import companylogo from "../../assets/icon/company-logo.png"
import "./login.css"

{/* NOTE: THIS IS WEB APP IS INTENDED TO BE USED ONLY ON PC/LAPTOP VIEWPORT SO MINIMAL RESPONSIVENESS OPTIMIZATION IS ONLY DONE*/}

export default function Login() {
    return (
       <div className="w-screen h-screen bg-[#D9E4FF] flex items-center justify-center">
         <Card>
          {/* ------- REMINDER FOR FUTURE SELF! SEARCH BOX-SIZING FOR INSET REFERENCE */}
           <Inset>
             <Flex>
               {/* ------- SEPARATE THE CARD INTO DIV (LEFT BOX FOR FORMS & RIGHT FOR BACKGROUND IMAGE) */}
               {/* ------- LEFT BOX */}
               <div className="w-[500px] h-[600px] flex-col">
                 <div className="w-full h-[15%] flex items-center pl-5 ">
                   <div className="flex gap-1 items-center">
                     <img src={companylogo} className="w-9 h-9"/>
                     <h1 className="poppins text-2xl font-semibold">Osairus.inc</h1>
                   </div>
                 </div>
                 <div className="w-[80%] h-[75%] bg-green-500 ml-[10%]">

                 </div>
               </div>
               {/* ------- RIGHT BOX */}
               <div className="w-[500px] h-[600px]" id="right-box">
                 
               </div>
             </Flex>
           </Inset>
         </Card>
       </div>
    )
}