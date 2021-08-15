import Image from "next/image";
const _Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container footer">
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Conditions générales</p>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Règlement Intérieur</p>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Braine-l'Alleud</p>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={"/assets/images/logo-braine-nav.svg"}
              alt={"logo-braine-nav.svg"}
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default _Footer;
