import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    let dateObj = date._d;
    let dateNum = dateObj.getDate();
    let monthNum = dateObj.getMonth() + 1;
    let num = monthNum + dateNum / 100;
    let yearNum = dateObj.getFullYear();

    if(yearNum == 2017 && (num > 3.27 && monthNum < 9)){
    	this.setState({ date });
    }else{    	
    	window.location.reload();
    }
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker ref="ipt" onChange={value => this.handleChange(value)} />
      </div>
    );
  }
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
)

