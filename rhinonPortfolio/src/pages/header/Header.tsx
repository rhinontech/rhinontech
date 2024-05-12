import Buttons from "../../utils/Buttons";

function Header() {
  return (
    <div className="justify-between hidden md:flex pl-16 pr-16 p-10">
      <Buttons title="Contact" width="100" />
      <Buttons title="Resume" width="100" />
      <Buttons title="About" width="100" />
      {/* <Buttons title="Certificate" /> */}
      <Buttons title="Projects" width="100" />
    </div>
  );
}

export default Header;
