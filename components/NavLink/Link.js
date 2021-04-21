function Link({ active, name, value, onClick }) {
  return (
    <div
      className={`
        text-lg  p-1 sm:p-2 font-semibold 
        border-b-4 ${active ? "border-[#03056b]  " : "border-transparent"} 
        hover:border-[#35d4fb] cursor-pointer
        `}
      value={value}
      onClick={onClick}
    >
      {name}
    </div>
  );
}

export default Link;
