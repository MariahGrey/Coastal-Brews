import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllBeers } from "./crud";
import { Button, Icon } from "semantic-ui-react";

class AllBeers extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
      onPage: 1
    };
  }

  collectBeers = page => {
    getAllBeers(page).then(data => {
      if (data === null) return;

      this.setState(state => {
        return {
          beers: data
        };
      });
    });
  };

  componentDidMount() {
    this.collectBeers(this.props.match.params.page);
  }

  nextList = () => {
    this.props.history.push(
      `/${Number(this.props.match.params.page || 1) + 1}`
    );
  };

  prevList = () => {
    this.props.history.push(
      `/${Number(this.props.match.params.page || 1) - 1}`
    );
  };
  componentWillReceiveProps(nextProps) {
    this.collectBeers(nextProps.match.params.page);
  }
  render() {
    let page = Number(this.props.match.params.page || 1);

    return (
      <div style={styles.container}>
        <div style={styles.h1}>All Beers</div>
        {page <= 2 && <Button onClick={this.nextList}>Next List</Button>}
        <br />
        {page > 1 && <Button onClick={this.prevList}>Previous List</Button>}
        <div style={styles.content}>
          {this.state.beers.map(beer => (
            <div style={styles.beer} key={beer.id}>
              <Link to={`/beer/${beer.id}`}>
                <div style={styles.label}>
                  {beer.name}{" "}
                  <img
                    style={styles.image}
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  beer: {
    padding: "30px"
  },
  label: {
    fontFamily: "Shadows Into Light",
    fontSize: "30px",
    lineHeight: 1.2,
    letterSpacing: 1
  },
  image: {
    maxHeight: "50px"
  },
  h1: {
    fontFamily: "Shadows Into Light",
    fontSize: "100px",
    textAlign: "center",
    lineHeight: "150px",
    padding: "20px"
  }
};
export default AllBeers;
