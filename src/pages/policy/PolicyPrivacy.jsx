const PolicyPrivacy = () => {
  return (
    <section className="min-h-screen h-full  max-w-[1100px] mx-auto pt-5 text-white px-7">
      <div className="">
        <h2 className="md:text-[80px] text-[60px] font-extrabold text-white capitalize">
          privacy & policy
        </h2>
        {/* all contents */}
        <div className="">
          <h4 className="text-xl font-sans font-bold text-white pt-4">
            Last updated <span className="font-thin">16 may 2025</span>{" "}
          </h4>

          <div className="pt-10 flex flex-col gap-4 text-blue-50 text-[17px]">
            <span className="">
              At skymute, we’re committed to transparency about how we collect,
              use, and protect your personal information. This Privacy Notice
              explains our practices and outlines your rights regarding your
              information.
            </span>

            <span>
              We recommend that you read this Privacy Notice in full to ensure
              you are fully informed. However, if you only want to access a
              particular section of this Privacy Notice, then you can click on
              the relevant link below to jump to that section.
            </span>
          </div>

          {/* links */}

          <div className="py-4">
            <ul className="list-outside">
              <li className="">
                <a href="#whatskymutedo" className="underline text-indigo-200">
                  what does skymute do ?
                </a>
              </li>
            </ul>
          </div>

          {/* all texts */}
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default PolicyPrivacy;
