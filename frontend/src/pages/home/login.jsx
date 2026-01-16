import {
  Box,
  Card,
  Flex,
  Inset,
  Button,
} from "@radix-ui/themes/dist/cjs/index.js";
import companylogo from "../../assets/icon/company-logo.png";
import "./login.css";

{
  /* NOTE: THIS IS WEB APP IS INTENDED TO BE USED ONLY ON PC/LAPTOP VIEWPORT SO MINIMAL RESPONSIVENESS OPTIMIZATION IS ONLY DONE*/
}

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
                <div className="flex gap-2 items-center">
                  <img src={companylogo} className="w-7 h-7" />
                  <h1 className="poppins text-xl font-semibold text-[#213448]">Osairus.inc</h1>
                </div>
              </div>
              <div className="w-[80%] h-[75%]  ml-[10%] p-5 flex flex-col gap-3 ">
                <div>
                  <h1 className="inter text-sm text-[#213448]">Login with your details</h1>
                  <h1 className="poppins text-2xl font-bold text-[#213448]">Welcome Back!</h1>
                </div>
                <form>
                  <div className="inter flex flex-col gap-5">
                    {/* ------ EMAIL ------- */}
                    <fieldset className="pl-5 border border-[#82858C] rounded-md">
                      <legend className="text-sm pl-2 pr-2 text-[#82858C]">Email</legend>
                      <input
                        type="text"
                        className="text-xs w-[90%] h-full -ml-2 outline-none mb-3"
                        placeholder="Enter your account email"
                      ></input>
                      
                    </fieldset>
                    {/* ------ PASSWORD ------- */}
                    <fieldset className="pl-5 border border-[#82858C] rounded-md ">
                      <legend className="text-sm pl-2 pr-2 text-[#82858C]">Password</legend>
                      <input
                        type="password"
                        className="text-xs w-full h-full -ml-2 outline-none mb-3"
                        placeholder="Enter your account password"
                      ></input>
                    </fieldset>
                    <button size="3" className="w-full h-11 rounded-md bg-[#3078FF] transition hover:bg-white hover:border-2 hover:border-[#3078FF] hover:text-[#3078FF] text-white">
                      <h1 className="poppins font-semibold tracking-wider  text-md">
                        Login
                      </h1>
                    </button>
                    <div className="flex items-center justify-center gap-3 mt-2">
                      <hr className="w-[43%] text-[#82858C]" />
                      <h1 className="text-[#82858C] text-md">or</h1>
                      <hr className="w-[43%] text-[#82858C]" />
                    </div>
                    <div className="flex gap-5 justify-center">
                      <div className="w-15 h-15 border-2"></div>
                      <div className="w-15 h-15 border-2"></div>
                      <div className="w-15 h-15 border-2"></div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex gap-1  ml-5 mt-5">
                <h1 className="text-sm">Forgot your account?</h1>
                <h1 className="text-sm font-bold text-blue-700">Click here!</h1>
              </div>
            </div>
            {/* ------- RIGHT BOX */}
            <div className="w-[500px] h-[600px]" id="right-box"></div>
          </Flex>
        </Inset>
      </Card>
    </div>
  );
}
