import { useState } from "react";
// import Buttons from "../../utils/Buttons";
import Divider from "../../utils/Divider";
import contact from "../../assets/contact.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add code here to send the form data to your backend or perform any other action
  };
  return (
    <div className="mt-20 pb-10 mr-[10%] ml-[10%]">
      <p className="poppins text-2xl font-semibold text-right">Contact Me</p>
      <Divider />
      <div className="mt-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className=" flex items-center justify-center">
            <div className="w-[300px] rounded-lg profile-shadow flex items-center justify-center">
              <img
                className="w-[100px] md:w-[200px]"
                src={contact}
                alt="profile"
              />
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex-col self-center justify-center"
            >
              <div>
                <input
                  className="inputs h-[62px] w-[100%] rounded-lg poppins pl-5 p-3 text-white font-semibold text-xl bg-[#232732] outline-none"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <input
                  className="inputs h-[62px] w-[100%] rounded-lg poppins pl-5 p-3 text-white font-semibold text-xl bg-[#232732] outline-none"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email ID*"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <textarea
                  className="inputs h-[171px] w-[100%] rounded-lg poppins pl-5 p-3 text-white font-semibold text-xl bg-[#232732] outline-none"
                  id="message"
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#24272C] pr-5 pl-5 pt-2 pb-2 mt-10 rounded-[15px] font-semibold text-xl poppins button-shadow cursor-pointer hover:bg-[#7733FF] hover:text-white w-[140px]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
