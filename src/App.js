import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  let [entries, setEntries] = useState(initialEntries);
  function deleteEntry(id) {
    let result = entries.filter((entry) => { return entry.id !== id });
    console.log("before", entries);
    console.log("result", result);
    setEntries(result);
    console.log("After", entries);
  }

  function addEntry(discription, value, isExpense) {
    let id = entries.length + 1;
    const result = entries.concat({
      id,
      discription,
      value,
      isExpense
    });
    console.log('add result', result);
    console.log('entries', entries);
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title={'Budget'} style={{ marginTop: 20 }} ></MainHeader>

      <DisplayBalance size='small' title={'Your Balance:'} value='2,550.53' />

      <DisplayBalances />

      <MainHeader title={'History'} type={'h3'}></MainHeader>

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title={'Add New Transaction'} type={'h3'}></MainHeader>

      <NewEntryForm addEntry={addEntry} />

    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    discription: "Work income",
    value: "$1000,00",
    isExpense: false
  },
  {
    id: 2,
    discription: "Water bill",
    value: "$20,00",
    isExpense: true
  },
  {
    id: 3,
    discription: "Rent",
    value: "$300,00",
    isExpense: true
  },
  {
    id: 4,
    discription: "Power bill",
    value: "$20,00",
    isExpense: true
  }
];