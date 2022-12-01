import logo from './logo.svg';
import './App.css';
import { DropdownMenuContainer } from './containers/DropdownMenuContainer';

function App() {
  // customize list of options here
  const options = [
    { id: 1, name: 'option 1' },
    { id: 2, name: 'option 2' },
    { id: 3, name: 'option 3' },
    { id: 4, name: 'option 4' },
    { id: 5, name: 'option 5' },
    // testing the case when there is an option with a very long name
    { id: 6, name: 'asdgwPUGHSOIFUGHAIDSJFNALSKDHFBLkjdnf;j;'}
  ]

  return (
    <div className="App">
      {/*pass in the menu title, whether or not to allow multiple selections, and the list of options*/}
      <h3>Multi-Select Dropdown</h3>
      <DropdownMenuContainer menuTitle='Choose several options' multipleSelect={true} options={options}/>
      <h3>Single-Select Dropdown</h3>
      <DropdownMenuContainer menuTitle='Choose only one option' multipleSelect={false} options={options}/>
    </div>
  );
}

export default App;
