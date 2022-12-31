function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">Cyber News</h1>
        <h2 className="mt-5 md:mt-2">
          Welcome to the{" "}
          <span className="underline decoration-4 decoration-[#39FF14]">
            best
          </span>{" "}
          cybersecurity blog
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Cybersecurity trends and best practices | Data breaches and cyber
        attacks | Vulnerabilities and patches
      </p>
    </div>
  );
}

export default Banner;
