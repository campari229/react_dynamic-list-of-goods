import React from 'react';
import './App.css';

import { GoodsList } from './components/GoodsList/GoodsList';
import { Goods } from './components/Interfaces/Interfaces';
import { getGoods } from './api';

interface State {
  goods: Goods[];
  isLoading: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    goods: [],
    isLoading: true,
  };

  showAll = async () => {
    this.setState({
      isLoading: false,
    });
    const data = await getGoods<Goods>();

    this.setState({
      goods: data.data,
      isLoading: true,
    });
  };

  showFive = async () => {
    this.setState({
      isLoading: false,
    });
    const data = await getGoods<Goods>();

    const firstFive = data.data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);

    this.setState({
      goods: firstFive,
      isLoading: true,
    });
  };

  showRed = async () => {
    this.setState({
      isLoading: false,
    });
    const data = await getGoods<Goods>();

    const onlyRed = data.data.filter(good => good.color === 'red');

    this.setState({
      goods: onlyRed,
      isLoading: true,
    });
  };

  render() {
    const { goods, isLoading } = this.state;

    return (
      <div className="goods">
        <h1>List of goods</h1>
        <div className="goods__buttons">
          <button
            type="button"
            onClick={this.showAll}
            className="btn"
          >
            Show All
          </button>
          <button
            type="button"
            onClick={this.showFive}
            className="btn"
          >
            Show Five
          </button>
          <button
            type="button"
            onClick={this.showRed}
            className="btn"
          >
            Show Red
          </button>
        </div>
        {
          isLoading
            ? <GoodsList goods={goods} />
            : <p>Wait for it...</p>
        }
      </div>
    );
  }
}

export default App;
