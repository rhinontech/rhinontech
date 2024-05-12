import Typewriter from "typewriter-effect";

const TypewriterEffect = () => {
  return (
    <p className="poppins font-[500] mt-2 text-2xl">
      <Typewriter
        onInit={(typewriter: any) => {
          typewriter
            .typeString("Full Stack ")
            .typeString("<span style='color: #b91c1c;'>Engineer</span>")
            .pauseFor(1000)
            .deleteChars(8)
            .pauseFor(1000)
            .typeString("<span style='color: #b91c1c;'>Developer</span>")
            .pauseFor(1000)
            .deleteChars(9)
            .pauseFor(1000)
            .start();
        }}
        options={{
          loop: true, // Optional
        }}
      />
    </p>
  );
};

export default TypewriterEffect;
