import { Component } from "react";
const styles = {
  layout: {
    backgroundColor: "#fff",
    color: "#0A283E",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    padding: "50px",
    margin: "20px",
    border: "2px solid",
  },
  container: {
    width: "1200px",
  },
};
class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
