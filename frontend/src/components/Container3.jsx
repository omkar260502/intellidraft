import * as React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <img src={icon} alt={title} className="service-icon" />
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/096baa1fa8926cc830d2564676dc77542d7807b59f3a9ffcef3159b248f0ee24?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Immigration assistance",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c52431ad4b679f2cd2f90bcee32ef956a0e29b4e68db5715c487aaed654f86f?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Intellectual property",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc1f26c19013c6556cce7c68bb99da5e30fe05f92ea4502bc290b786d0e0a326?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Complaince lawyer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d7568cffbe602489e940249bfdb944e7fe7fa5dd66360693ec498b83c05af65?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Making a will",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41538c00554f3262c0a24ec0a5a14355d63240c41310264670c662cb2da0ba7c?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Legal documentation",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e330311f461ca17c0f57514a07ef583dce5661f98778dcb1238b3c2dae57738a?apiKey=04351964dd7545f89dcab8564e56e924&",
    title: "Estate planning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vel mattis vel quam at.",
  },
];

function Container3() {
  return (
    <>
      <style jsx>{`
        .container {
          background-color: #d3e5ff;
          display: flex;
          flex-direction: column;
          padding: 30px 30px;
        }

        .heading {
          color: #dc1f27;
          text-align: center;
          align-self: center;
          font: 300 40px Poppins, sans-serif;
        }

        .heading strong {
          font-weight: 700;
        }

        .services-grid {
          display: flex;
          gap: 20px;
          margin-top: 41px;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          color: #000;
          width: 33%;
        }

        .service-icon {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 6px;
        }

        .service-title {
          margin-top: 24px;
          font: 500 16px Poppins, sans-serif;
        }

        .service-description {
          margin-top: 12px;
          font: 400 14px Poppins, sans-serif;
        }

        .cta-button {
          border-radius: 4px;
          background-color: #dc1f27;
          align-self: center;
          margin-top: 78px;
          color: #fff;
          padding: 15px 30px;
          font: 500 18px Roboto, sans-serif;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .container {
            padding: 0 20px;
          }

          .heading {
            max-width: 100%;
          }

          .services-grid {
            flex-direction: column;
            gap: 40px;
            margin-top: 40px;
          }

          .service-card {
            width: 100%;
          }

          .cta-button {
            margin-top: 40px;
            padding: 0 20px;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="heading">
          Experience a smarter <br />
          <strong>legal solution platform in your hand</strong>
        </h2>

        <div className="services-grid">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="services-grid">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Container3;
