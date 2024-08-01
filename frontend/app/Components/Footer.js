const Footer = () => {
  return (
    <footer className="">
      <div className="mx-36 flex flex-row items-center justify-between bg-black py-6">
        <div>
          <p className="italic">
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
