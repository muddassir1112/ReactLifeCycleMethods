import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import "../App.css";

export default class Constructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      flag: true,
      theme: {
        backgroundColor: "#28231D",
        color: "white",
        lineHeight: "1.5",
        marginTop: "-1.7%",
      },
      button: {
        borderStyle: "solid",
        backgroundColor: "blue",
        borderRadius: "6px",
        color: "white",
        cursor: "pointer",
        margin: "1% 0% 2% 43%",
        padding: "8px 14px 8px 14px",
      },
    };
  }
  // Task based on getDerivedStateFromProps is commmented as it is already committed
  //   static getDerivedStateFromProps(props, state) {
  //     console.log(props.theme1);
  //     return { theme: props.theme1 };
  //   }
   // Task based on componentDidMount is commmented as it is already committed
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ theme: this.props.theme1 });
  //     }, 5000);
  //   }
  shouldComponentUpdate() {
    return true;
  }
  // getSnapshotBeforUpdate called with componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState.theme);
    // console.log()
    return null;
  }
  //   After changing the theme console the updated value of state using above method.
  componentDidUpdate() {
    console.log(this.state.theme);
  }
  changeTheme = () => {
    if (this.state.flag === true) {
      this.setState({ theme: this.props.theme1 });
      this.setState({ flag: false });
    } else
      this.setState({
        theme: {
          backgroundColor: "#28231D",
          color: "white",
          lineHeight: "1.5",
          marginTop: "-1.7%",
        },
        flag: true,
      });
  };
  hideChildComponent = () => {
    this.setState({ show: false });
  };
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
            <a
              href="http://www.company.com/news.html"
              style={{ color: "darkBlue" }}
            >
              Latest News
            </a>{" "}
            newsstand sales, and advertising revenue. The journalism
            organizations that publish newspapers are themselves often
            metonymically called newspapers.{" "}
          </p>
          <button onClick={this.changeTheme} style={this.state.button}>
            Click Here
          </button>
        </div>
        {this.state.show === true ? <ChildComponent /> : null}
        <button onClick={this.hideChildComponent} className="btn">
          Hide Component
        </button>
      </div>
    );
  }
}
