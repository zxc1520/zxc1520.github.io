import "../App.css";
import React, { Component } from "react";
import ListItem from "../collection/ListItem";

class Card extends Component {
  state = {
    listItem: ListItem,
  };

  render() {
    return (
      <React.Fragment>
        {this.state.listItem.map((i) => (
          <article className="App-card">
            <img src={i.image} alt={i.title} className="Image" />
            <section className="App-section">
              <h2>{i.title}</h2>
              <p className="Paragraph">{i.body}</p>
              <a href={i.link} className="App-link">
                See Project
              </a>
            </section>
          </article>
        ))}
      </React.Fragment>
    );
  }
}

export default Card;
