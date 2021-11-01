import React from "react";

const styles = {
  label: {
    //display: "flex",
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "15px 15px",
    margin: "0px 15px 10px 10px",
    position: "relative",
    bottom: "200px",
    left: "250px",
    //border: "1px solid",
  },
  textarea: {
    //flexDirection: "space-between",
    //justifyContent: "center",
    position: "relative",
    top: "50px",
    height: "200px",
    width: "250px",
    resize: "none",
  },
};

const Textarea = ({ label, error, ...rest }) => {
  return (
    <React.Fragment>
      <label style={styles.label}>{label}</label>
      <textarea style={styles.textarea} required="true"></textarea>
    </React.Fragment>
  );
};

export default Textarea;
