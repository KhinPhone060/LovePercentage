import React, {Component} from 'react';
import MyContext from './context';

class MyProvider extends Component {
  state = {
    screen: 1,
    fname: 'Khin',
    sname: 'Kaung',
    percentage: '',
    result: '',
  };

  addName = (name1, name2) => {
    this.setState(() => ({
      screen: 2,
      fname: name1,
      sname: name2,
      percentage: '',
      result: '',
    }));
    this.getPercentage();
  };

  getPercentage = () => {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        headers: {
          'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
          'X-RapidAPI-Key':
            '378e416a3cmsh59cde3128b51ddbp1883b2jsndbe88d20ab06',
        },
      },
    )
      .then(data => data.json())
      .then(data =>
        this.setState({percentage: data.percentage, result: data.result}),
      );
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          getPercentage: this.getPercentage,
          addName: this.addName,
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
