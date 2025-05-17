import ids from "../../json/privacy.json";

const PolicyPrivacy = () => {
  return (
    <div className=" mx-auto py-4">
      {ids.sections.map((section) => (
        <div key={section.id} className="mb-8">
          <h2 className="text-3xl font-bold mb-4" id={section.id}>
            {section.title}
          </h2>

          {section.description && (
            <p className="text-gray-200 mb-5">{section.description}</p>
          )}

          {/* Voluntarily Provided */}
          {section.voluntarilyProvided && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">
                Voluntarily Provided:
              </h3>
              <ul className="list-disc list-inside text-gray-300 md:leading-10 leading-8">
                {Object.entries(section.voluntarilyProvided).map(
                  ([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">{key}:</span>{" "}
                      {Array.isArray(value) ? value.join(", ") : value}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Automatically Collected */}
          {section.automaticallyCollected && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">
                Automatically Collected:
              </h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {Object.entries(section.automaticallyCollected).map(
                  ([key, value]) => (
                    <li key={key}>
                      <span className="font-medium capitalize">{key}:</span>{" "}
                      {Array.isArray(value) ? value.join(", ") : value}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Purposes */}
          {section.purposes && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">Purposes:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.purposes.map((purpose, idx) => (
                  <li key={idx}>{purpose}</li>
                ))}
              </ul>
            </div>
          )}

          {/* User Control */}
          {section.userControl && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">User Control:</h3>
              <ul className="list-disc list-inside text-gray-200">
                {section.userControl.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Prohibited Content */}
          {section.prohibitedContent && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">
                Prohibited Content:
              </h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.prohibitedContent.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* NSFW Policy */}
          {section.nsfwPolicy && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">NSFW Policy:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.nsfwPolicy.conditions.map((cond, idx) => (
                  <li key={idx}>{cond}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Measures */}
          {section.measures && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">Security Measures:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.measures.map((measure, idx) => (
                  <li key={idx}>{measure}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Services Used */}
          {section.servicesUsed && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">Services Used:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.servicesUsed.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Rights */}
          {section.rights && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">Your Rights:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.rights.map((right, idx) => (
                  <li key={idx}>{right}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Features */}
          {section.features && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">Features:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Data Collected */}
          {section.dataCollected && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">Data Collected:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.dataCollected.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Consequences */}
          {section.consequences && (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-50">Consequences:</h3>
              <ul className="list-disc list-inside text-gray-200 md:leading-10 leading-8">
                {section.consequences.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact */}
          {section.email && (
            <p className="text-gray-200">
              Contact us at:{" "}
              <a
                href={`mailto:${section.email}`}
                className="text-blue-600 underline"
              >
                {section.email}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PolicyPrivacy;
