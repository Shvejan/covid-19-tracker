import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";
import covdimg from "./images/covd.png";
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data: data });
  }

  handleCountryChange = async (c) => {
    const data = await fetchData(c);
    this.setState({ data: data, country: c });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={covdimg} alt="COVID-19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
