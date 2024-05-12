import aboutme from "../../assets/aboutme.png";

function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 pb-10">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-[70%] rounded-lg profile-shadow"
          src={aboutme}
          alt="profile"
        />
      </div>
      <div className="poppins md:text-left w-[80%] md:self-center justify-self-center text-center mt-5">
        <p className="text-2xl font-semibold">About Me</p>
        <p className="mt-5">
          I am actively seeking opportunities to apply my acquired skills and
          knowledge to real-world projects. My educational background has
          equipped me with a solid foundation in AI and ML algorithms, data
          analysis, and programming languages such as Python. Additionally, I
          have gained practical experience through hands-on projects, both
          independently and collaboratively.
        </p>
      </div>
    </div>
  );
}

export default About;
