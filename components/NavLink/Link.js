function Link({ active, name, value, onClick }) {
  return (
    <div
      className={`
        text-lg  p-1 sm:p-2 text-lg font-semibold 
        p-2 border-b-4 ${
          active ? "border-border-[#7703ef]  " : "border-transparent"
        } 
        hover:border-[#03056b] cursor-pointer
        `}
      value={value}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default Link;
