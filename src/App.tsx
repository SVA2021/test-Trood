import React from 'react';
import './App.css';
import {TokenTable} from './components/TokenTable';
import {DescTableKeys, FilterType, TableKeys} from './components/TokenTable/TokenTable.types';
import {itemsForTable} from './data/data';

function App() {

  const [filters, setFilters] = React.useState<FilterType>({type: 'THC', status: 'green', active: 'status'})
  const [head, setHead] = React.useState<TableKeys | DescTableKeys>('conditions')

  return (
    <div className="App">
      <TokenTable
        items={itemsForTable}
        header={head}
        filters={filters}
        onBuy={console.log}
        onFilter={setFilters}
        onSort={setHead}
      />
    </div>
  );
}

export default App;
