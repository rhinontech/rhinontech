import profile from "../../assets/profile.png";
import Buttons from "../../utils/Buttons";
import TypewriterEffect from "./Typewriter";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center mt-14 pt-5 pb-16">
      <img
        className="w-[220px] rounded-full profile-shadow"
        src={profile}
        alt="profile"
      />

      <p className="poppins font-[400] mt-5">Hey</p>
      <p className="poppins font-bold mt-5 text-3xl md:text-4xl">
        I’m Prabhat Patra
      </p>
      <TypewriterEffect />
      <p className="poppins mt-2 w-[80%] md:w-[60%]">
        A highly motivated student studying Artificial Intelligence and Machine
        Learning. Actively seeking opportunities to apply my skills and
        knowledge to real-world projects and contribute to the advancement of
        the industry.
      </p>
      <div className="mt-7 w-[80%] md:w-[40%] flex flex-col md:flex-row items-center justify-evenly">
        <Buttons title="Learn More" width="140" />
        &nbsp;&nbsp;
        <Buttons title="Contact me" width="140" />
      </div>
    </div>
  );
}

export default Profile;
