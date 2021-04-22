function Upload() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center border-2 max-w-2xl w-[90%] h-3/4 border-[#03056b] text-[#03056b] rounded-md p-2 sm:p-5">
        <img
          src="./images/logos.png"
          alt="logo"
          className="h-20 w-20 object-contain"
        />
        <h2 className="  text-2xl font-bold">Explicitely Upload Content</h2>
      </div>
    </div>
  );
}

export default Upload;
