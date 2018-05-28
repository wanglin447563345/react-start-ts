import { Button, Input, Select } from 'antd';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Button type="primary">Button</Button>
          <Input/>
          <Select/>
      </div>
    );
  }
}

export default App;
