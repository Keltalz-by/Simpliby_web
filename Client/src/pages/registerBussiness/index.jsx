import React from "react";
import Layout from "../../components/layout";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";

const Register = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center h-full w-full gap-10 font-ERegular">
        <div className="text-center pb-3">
          <h1 className="text-2xl font-bold">
            Let's know more about your bussiness
          </h1>
          <span>
            <p className="text-[#00398E] font-semibold">
              we want to verify that you own a store
            </p>
          </span>
        </div>
        <form action="" className="relative flex flex-col gap-3">
          <TextInput
            name="Business name"
            title="Business name"
            placeholder="e.g Simbi's enterprise"
            // value={inputData.full_name}
            // handleChange={(e) => handleChange(e, setInputData, inputData)}
            // error={error}
          />
          <TextInput
            name="Business Location"
            title="Business Location"
            placeholder="e.g Enugu Nigeria"
            // value={inputData.email}
            // handleChange={(e) => handleChange(e, setInputData, inputData)}
            // error={error}
          />
          {/* <TextInput
            name="Brief description about your business"
            placeholder="Brief description about your business"
            extraclass="h-[5rem] text-start"
            // value={inputData.password}
            // handleChange={(e) => handleChange(e, setInputData, inputData)}
            // error={error}
          /> */}
          <div className="flex flex-col items-start">
            <label htmlFor="descritpion" className="ml-2">
              Brief description about your business
            </label>
            <textarea
              name="descritpion"
              id=""
              cols="30"
              rows="10"
              placeholder="e.g we specialize in selling beauty saops"
              className="border-[1.5px] w-[25rem] border-[#64BCF4] rounded-lg focus:outline-none resize-none p-2"
            ></textarea>
          </div>
          <TextInput
            name="street address"
            title="street address"
            placeholder="e.g Plot 312 indpendence layout"
            // value={inputData.confirm_password}
            // handleChange={(e) => handleChange(e, setInputData, inputData)}
            // error={error}
          />

          <TextInput
            name="store city"
            title="store city"
            placeholder="e.g Enugu city"
            // value={inputData.confirm_password}
            // handleChange={(e) => handleChange(e, setInputData, inputData)}
            // error={error}
          />

          <TextInput
            name="country"
            title="country"
            placeholder="e.g Nigeria"
            // value={inputData.confirm_password}
            // handleChange={(e) => handleChange(e, setInputData, inputData)}
            // error={error}
          />
          <div className="flex flex-col items-start">
            <label htmlFor="image" className="ml-2">
              upload images of your store
            </label>
            <span className=" border-2 border-dotted border-[#64BCF4] flex items-center rounded-lg justify-center p-2 w-[25rem] h-[5rem]">
              <input type="file" className="border-dotted " name="image" />
            </span>
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="image" className="ml-2">
              upload your logo (or whatever you are known for)
            </label>
            <span className=" border-2 border-dotted border-[#64BCF4] flex items-center rounded-lg justify-center p-2 w-[25rem] h-[5rem]">
              <input type="file" className="border-dotted " name="image" />
            </span>
          </div>
        </form>
        <div>
          <Button
            // handleClick={(e) => createAccount(inputData, setError, navigate)}
            name="Submit"
            extraclass={`w-[25rem] h-[3rem] rounded-lg`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
