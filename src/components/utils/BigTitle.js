const BigTitle = ({
  imgUrl,
  title = "découvrir",
  marginTop,
  marginBottom = "3rem",
  width = "30%",
}) => {
  return (
    <div
      style={{
        fontFamily: "shrikhand",
        textShadow: "0 0 8px rgba(0,0,0,0.25)",
        fontSize: "24px",
        color: "#FFC000",
        letterSpacing: "1.5px",
        marginTop: { marginTop },
        marginBottom: { marginBottom },
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <h3
        style={{
          border: "none",
          borderRadius: "5px",
          width: { width },
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {" "}
        {imgUrl ? <img src={imgUrl} /> : ""} {title}
      </h3>
    </div>
  );
};

export default BigTitle;
