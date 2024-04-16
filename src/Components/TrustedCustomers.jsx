import ClientsSlider from "./ClientsSlider";

const TrustedCustomers = () => {
  return (
    <div>
      <div className="trusted-by-wrapper ">
        <p className="trusted-title">
          Trusted By <span className="underlined"></span>
        </p>
        <div className="user-description trusted-by-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </div>
      </div>
      <div className="mb-fixed">
        <ClientsSlider />
      </div>
    </div>
  );
};

export default TrustedCustomers;
