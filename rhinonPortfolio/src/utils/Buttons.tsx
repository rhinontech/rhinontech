function Buttons({ title, width }: { title: string; width: string }) {
  return (
    <div>
      <p
        className={`bg-[#24272C] pr-5 pl-5 pt-2 pb-2 rounded-[15px] font-medium poppins button-shadow cursor-pointer hover:bg-[#7733FF] hover:text-white min-w-[120px] w-[${width}px]`}
      >
        {title}
      </p>
    </div>
  );
}

export default Buttons;
