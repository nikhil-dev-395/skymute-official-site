import terms from "../../json/terms.json";

const TermsConditions = () => {
  const data = terms.terms_and_conditions;

  return (
    <div className="mx-auto py-6 px-4 md:px-5 text-gray-200 max-w-[1100px]">
      <h1 className="md:text-[80px] text-[60px] font-extrabold text-white capitalize">
        Terms and Conditions
      </h1>

      {/* Effective Date */}
      {data?.effective_date && (
        <p className="mb-6 text-sm text-gray-400">
          <span className="font-medium text-gray-300">Effective Date:</span>{" "}
          {data.effective_date}
        </p>
      )}

      {/* Introduction */}
      {data?.introduction && (
        <p className="mb-10 text-gray-300">{data.introduction}</p>
      )}

      {/* Sections */}
      {data?.sections?.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">
            {section.title}
          </h2>

          {/* Content Paragraphs */}
          {section.content && (
            <div className="space-y-4 text-gray-300 leading-relaxed">
              {section.content.map((para, index) => (
                <p key={index}>
                  {" "}
                  <span className="font-extrabold pr-2">{index + 1}.</span>{" "}
                  {para}
                </p>
              ))}
            </div>
          )}

          {/* Subsections */}
          {section.subsections && (
            <div className="mt-6 space-y-6">
              {section.subsections.map((sub, subIdx) => (
                <div key={subIdx} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-100 mb-2">
                    {sub.title}
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-gray-300">
                    {sub.content.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Acknowledgment */}
      {data?.acknowledgment && (
        <p className="mt-10 italic text-gray-400">{data.acknowledgment}</p>
      )}

      {/* contact */}
      <div className="pt-9">
        <h3>contact information</h3>
        <p>
          If you have questions, contact:{" "}
          <a href="mailto:skymute@skymute.com" className="text-blue-500">
            skymute@skymute.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
