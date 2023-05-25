import Layout from "../../components/layout";
import TextInput from "../../components/TextInput";
import Button from "../../components/button";
import Upload from "../../components/upload";

const Register = ({ setIsOpen }) => {
  const toggleModal = () => {
    setIsOpen(true);
  };
  return (
    <Layout>
      <div className="flex flex-col items-center w-full gap-10 font-ERegular pb-5">
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
          />
          <TextInput
            name="Business Location"
            title="Business Location"
            placeholder="e.g Enugu Nigeria"
          />
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
          />

          <TextInput
            name="store city"
            title="store city"
            placeholder="e.g Enugu city"
          />

          <TextInput name="country" title="country" placeholder="e.g Nigeria" />
          <Upload title="upload images of your store" />
          <Upload title="upload your logo (or whatever you are known for)" />
        </form>
        <div>
          <Button
            name="Submit"
            extraclass={`w-[25rem] h-[3rem] rounded-lg`}
            handleClick={() => toggleModal()}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
