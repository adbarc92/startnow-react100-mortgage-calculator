import React from 'react';

// https://reactjs.org/docs/forms.html
// https://getbootstrap.com/docs/3.3/css/
// https://reactjs.org/docs/rendering-elements.html

export default class App extends React.Component {
  constructor() {
    super(); // Needed?
    this.state = {
      balance: '0',
      rate: '0',
      term: '15',
      output: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleChange(e) {
    console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCalculate(e) {
    e.preventDefault();
    var balance = parseFloat(this.state.balance);
    var rate = (parseFloat(this.state.rate) / 1200);
    console.log(rate);
    var term = parseFloat(this.state.term) * 12;
    var value = balance * (rate * (1 + rate) ** term) / (((1 + rate) ** term) - 1);
    this.setState({
      output: `$${value.toFixed(2)} is your payment.`
    })
  }

  render() {
    return (
      //{/* Insert JSX here */}
      <div className='container'>
        <form className='form-horizontal'>
          <div className='form-group'>
            <label for='balance' className='col-sm-2 control-label'>Balance</label>
            <div className='col-sm-10'>
              <input type='number' name='balance' className="form-control" placeholder='Balance' value={this.state.balance} onChange={this.handleChange} />
            </div>
          </div>
          <div className='form-group'>
            <label for='rate' className='col-sm-2 control-label'>Rate</label>
            <div className='col-sm-10'>
              <input type='number' name='rate' className="form-control" step='0.01' placeholder='Rate' value={this.state.rate} onChange={this.handleChange} />
            </div>
          </div>
          <div className='form-group'>
            <label for='term' className='col-sm-2 control-label'>Term</label>
            <div className='col-sm-10'>
              <select className='form-control' value={this.state.term} name='term' onChange={this.handleChange}>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className="col-sm-offset-2 col-sm-10">
              <button name='submit' className='btn btn-default' onClick={this.handleCalculate}>Submit</button>
            </div>
          </div>
          <div className='form-group'>
            <div className="col-sm-offset-2 col-sm-10">
              <div name='output' id='output' value='output' className='form-group'>
                {this.state.output}
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}



