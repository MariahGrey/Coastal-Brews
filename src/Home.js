import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Coastal Brews</h1>
          <img
            src="https://www.cruxfermentation.com/wp-content/uploads/2016/11/cropped-crux-fermentation-project-bend-oregon-brewery.png"
            alt="Oh No! It's Not Here!"
          />
        </div>
        <div style={styles.Button}>
          <Button basic color={"black"}>
            <Link to={`/1`}>Are You 21?</Link>
          </Button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "#E4F1FE",
    height: "100vh"
  },
  content: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    fontSize: "100px",
    fontFamily: "Special Elite"
  },
  Button: {
    textAlign: "center"
  }
};
export default Home;
