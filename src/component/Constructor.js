import React, { Component } from "react";

export default class Constructor extends Component {
  constructor() {
    super();
    this.state = {
      theme: {
        backgroundColor: "#28231D",
        color: "white",
        lineHeight: "1.5",
        marginTop:"-1.7%"
      },
      button: {
        borderStyle : "solid",
        backgroundColor : "blue",
        borderRadius : "6px",
        color:"white",
        cursor:"pointer",
        margin:"1% 0% 2% 43%",
        padding:"8px 14px 8px 14px"
      }
    };
  }
  render() {
    return (
      <div style={this.state.theme}>
        <div className="container__left">
          <h2>Newspaper</h2>
          <p>
            A newspaper is a periodical publication containing written
            information about current events and is often typed in black ink
            with a white or gray background.
          </p>
          <p>
            Newspapers can cover a wide variety of fields such as politics,
            business, sports and art, and often include materials such as
            opinion columns, weather forecasts, reviews of local services,
            obituaries, birth notices, crosswords, editorial cartoons, comic
            strips, and advice columns.
          </p>
          <p>
            Most newspapers are businesses, and they pay their expenses with a
            mixture of subscription revenue,{" "}
            <a href="http://www.company.com/news.html" style={{color:"lightblue"}}>Latest News</a> newsstand
            sales, and advertising revenue. The journalism organizations that
            publish newspapers are themselves often metonymically called
            newspapers.{" "}
          </p>
          <button style={this.state.button}>Click Here</button>
        </div>
      </div>
    );
  }
}
