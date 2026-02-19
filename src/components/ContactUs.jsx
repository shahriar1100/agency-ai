import React from "react";
import Title from "./Title";
import allAssets from "../assets/asset";
import toast from "react-hot-toast";

const ContactUs = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "5ee0ae5b-9827-4d38-89cd-d9a61a3f08cb");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
    //   setResult("Form Submitted Successfully");
    toast.success('thank you for your sy=ubmission')
      event.target.reset();
    } else {
      toast.error(data.message)
    }
        
    } catch (error) {
        toast.error(error.message)
    }

    
    }

  return (
    <div
      id="contactUs"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
        <div>
            <p className="mb-2 text-sm font-medium">Your name</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:bordergray-600">
                <img src={allAssets.avatar} alt="" /> 
                <input type="text"placeholder="Enter your name" name='name' className="w-full p-3 text-sm outline-none" required/>
            </div>
        </div>


        <div>
            <p className="mb-2 text-sm font-medium">Your email</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:bordergray-600">
                <img src={allAssets.mail} alt="" />
                <input type="text"placeholder="Enter your email" name='email' className="w-full p-3 text-sm outline-none" required/>
            </div>
        </div>

        <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Your email</p>
            <textarea name='messege' rows={8} placeholder="Enter your messege" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600" required/>
        </div>

        <button type="submit" className="text-sm w-max flex gap-2 bg-primary text-white px-6 py-3 rounded-full cursor-pointer hover:scale-103 transition-all">
            Submit <img src={allAssets.arrowIcon} alt="" className="w-4"/>
        </button>


      </form>
    </div>
  );
};

export default ContactUs;
