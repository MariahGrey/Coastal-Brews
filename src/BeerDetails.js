import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBeerById } from "./crud";
import { Button, Icon } from "semantic-ui-react";

class BeerDetails extends Component {
  constructor() {
    super();

    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;

    getBeerById(id).then(data => {
      if (data === null) {
        return this.props.history.replace("/1");
      }

      this.setState(state => {
        return {
          beer: data[0]
        };
      });
    });
  }

  render() {
    let { id } = this.props.match.params;
    let { beer = {} } = this.state;
    let { ingredients = {}, food_pairing = [] } = beer;
    let { hops = [], malt = [], yeast = "" } = ingredients;
    return (
      <div style={styles.container}>
        <div style={styles.heading}>
          <Link to={`/1`}>All Beers</Link>
        </div>

        <div style={styles.beer}>
          <div style={styles.label4}>{this.state.beer.name}</div>
          <div style={styles.label5}>
            {this.state.beer.tagline}: {this.state.beer.description}
          </div>
          <br />
          <div style={styles.label}>Ingredients:</div>{" "}
          <div style={styles.label2}>
            {" "}
            Hops: {hops.map(hop => <div style={styles.label3}>{hop.name}</div>)}
          </div>
          <div style={styles.label2}>
            {" "}
            Malts:{" "}
            {malt.map(malt => <div style={styles.label3}>{malt.name}</div>)}
          </div>
          <div style={styles.label2}>
            {" "}
            Yeasts: <div style={styles.label3}>{yeast}</div>{" "}
          </div>
          <br />
          <div style={styles.label}>
            Food Pairing Suggestions:{" "}
            {food_pairing.map(food_pairing => (
              <div style={styles.label6}>{food_pairing}</div>
            ))}
          </div>
        </div>

        <div style={styles.image}>
          <img src={beer.image_url} alt="None Available" />
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    flexDirection: "row",
    display: "flex"
  },
  heading: {
    flex: 0.5,
    fontFamily: "Shadows Into Light",
    fontSize: "35px",
    padding: 10
  },
  beer: {
    flex: 2,
    padding: 20
  },
  image: {
    flex: 1,
    padding: 20
  },
  // Beer Name
  label4: {
    fontFamily: "Special Elite",
    fontSize: "50px",
    padding: 5,
    lineHeight: 1.25,
    textAlign: "center"
  },
  // Tagline, Description
  label5: {
    fontFamily: "Shadows Into Light",
    fontSize: "25px",
    padding: 10,
    letterSpacing: 1
  },
  // Ingredients, Food Pairings
  label: {
    fontFamily: "Special Elite",
    fontSize: "30px",
    padding: 20,
    letterSpacing: 1
  },
  // Ingredient List sub-categories
  label2: {
    fontFamily: "Shadows Into Light",
    fontSize: "30px",
    padding: 10,
    letterSpacing: 1
  },
  // actual ingredients inside list
  label3: {
    fontFamily: "Special Elite",
    fontSize: "20px",
    padding: 10,
    letterSpacing: 1,
    textAlign: "center"
  },
  label6: {
    fontFamily: "Shadows Into Light",
    fontSize: "25px",
    padding: 10,
    letterSpacing: 1
  }
};

export default BeerDetails;
