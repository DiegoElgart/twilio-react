import { Component } from "react";
import Logo from "./Logo";
import User from "./User";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "50px",
    justifyContent: "space-between",
    padding: "30px 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    gap: "15px 150px",
  },
  li: {
    listStyle: "none",
  },
};

class Navbar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <div>
          <ul style={styles.ul}>
            <li style={styles.li}>שליחת וואטספים</li>
            <li style={styles.li}>Signin</li>
            <li style={styles.li}>Signup</li>
            <p>אלן, userName!</p>
            <li style={styles.li}>Logout</li>
          </ul>
        </div>
        <User />
      </nav>
    );
  }
}

export default Navbar;
