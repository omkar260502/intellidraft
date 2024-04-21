import * as React from "react";
import "../assets/scss/Container4.scss";

function ServiceCard({ imageSrc, title, description }) {
  return (
    <div className="service-card">
      <img src={imageSrc} alt={title} className="service-icon" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}

const services = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/971809a51e9a33c4040930c720279dc4984f3e9a3ecc3df010c14c149401119e?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Immigration",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/374877fe4d55e0768b497479f1aac481f2cd9a9a70284393a1e48c5aec6f93b5?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Matrimonial",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/86aeca6151806a274609254724031c30473a60994474552a82cb15db6433707d?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Property",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb9e65f2318249e4492e0fc5f8e918fdaa6ff7343b9c471e9800a1e16349c42?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Personal",
    description:
      "Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.",
  },
];

function Container4() {
  return (
    <>
      <div className="services-container">
        <div className="intro-column">
          <div className="intro-content">
            <div className="intro-subtitle">Trust your future &</div>
            <h2 className="intro-title">Peaceful life</h2>
            <p className="intro-description">
              Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et
              nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem
              diam amet donec enim. Et viverra mauris.
            </p>
          </div>
        </div>

        <div className="services-column">
          <div className="services-grid">
            <div className="services-row">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  imageSrc={service.imageSrc}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container4;
