# Bigger Number App Example - Web

I give you here the code example for comparison needs and a way to understand how it acts.
In case you'd like to play around with it you may copy the snippet to any online editor (such as [codesandbox.io](https://codesandbox.io/s/dawn-wood-lvcm7))

```javascript
import React from 'react';

const LEFT = 'LEFT'
const RIGHT = 'RIGHT'

function Result(props) {
  return props.value ? (
    <span style={{ color: 'green' }}>Good</span>
  ) : (
    <span style={{ color: 'red' }}>Bad</span>
  )
}

function Number(props) {
  return (
    <div>
      <div style={{ fontSize: 30 }}>{props.number}</div>
      <button onClick={props.onClick}>This is Bigger</button>
    </div>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isCorrect: true,
      showResult: false,
      leftNumber: Math.floor(Math.random() * 100),
      rightNumber: Math.floor(Math.random() * 100)
    }
  }

  checkUserClick(side) {
    if (side === LEFT && this.state.leftNumber >= this.state.rightNumber) {
      this.setState({ showResult: true, isCorrect: true })
    } else if (
      side === RIGHT &&
      this.state.rightNumber >= this.state.leftNumber
    ) {
      this.setState({ showResult: true, isCorrect: true })
    } else {
      this.setState({ showResult: true, isCorrect: false })
    }
  }

  render() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Number
            number={this.state.leftNumber}
            onClick={() => this.checkUserClick(LEFT)}
          />
          {this.state.showResult && <Result value={this.state.isCorrect} />}
          <Number
            number={this.state.rightNumber}
            onClick={() => this.checkUserClick(RIGHT)}
          />
        </div>
      </div>
    );
  }
}

export default App
```
