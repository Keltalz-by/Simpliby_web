import React from "react";
import Button from "../../components/button";
import OtpInput from "./OtpInput";
import Layout from "../../components/layout";

const Verify = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full gap-10 font-ERegular">
        <div className="text-center pb-3">
          <h1 className="text-2xl font-bold">Verification</h1>
          <span>
            <p className="text-[#434041] font-Esemi text-sm">
              We have sent you a code to verify your email
            </p>
          </span>
        </div>
        <form action="" className="w-full flex flex-col items-center gap-3">
          <OtpInput />
        </form>
        <div className="text-[#434041] text-center font-Esemi text-sm">
          <span>00 : 32 </span>
          <p>Resend OTP</p>
        </div>
        <div>
          <Button
            //   handleClick={createAccount}
            name="Continue"
            extraclass={`w-[25rem] h-[3rem] rounded-lg`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Verify;
