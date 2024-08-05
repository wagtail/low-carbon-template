const Footer = () => {
  return (
    <footer className="">
      <div className="lg:mx-36 mx-6 flex md:flex-row flex-col items-center justify-between bg-[#0C0E0A] md:py-6 py-4">
        <div>
          <p className="italic text-center mb-5 md:mb-0">
            Wagtail, A step towards Sustainable Development.
          </p>
        </div>
        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-base mr-10 font-bold"
          >
            LinkedIn
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-base mr-10 font-bold"
          >
            GitHub
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
