import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import Modaledit from './components/Modaledit';
import NewEntryForm from './components/NewEntryForm';

function App() {
  let [entries, setEntries] = useState(initialEntries);

  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setisExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  console.log("Run App.js");
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    console.log("totalIncomes ==>", totalIncomes);
    console.log("totalExpenses ==>", totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
    setTotal(totalIncomes - totalExpenses);
  }, [entries]);

  /* Store */
  // const payload_add = {
  //   id:5,
  //   description: 'hello from Redux',
  //   value: '9',
  //   isExpense: true
  // };

  // const payload_remove = {
  //   id:1
  // };

  // store.dispatch(addEntryRedux(payload_add));
  // store.dispatch(removeEntryRedux(payload_remove));

  /* console.log(store.getState()); */

  function deleteEntry(id) {
    let result = entries.filter((entry) => { return entry.id !== id });
    console.log("deleteEntry:before", entries);
    console.log("deleteEntry:result", result);
    setEntries(result);
    console.log("deleteEntry:After", entries);
  }

  function addEntry() {
    let id = entries.length + 1;
    const result = entries.concat({
      id,
      description,
      value,
      isExpense
    });
    console.log('addEntry:add result', result);
    console.log('addEntry:entries', entries);
    setEntries(result);
    resetEntry();
  }

  function editEntry(id) {
    console.log('editEntry:id', id);
    if (id) {
      let index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setisExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setisExpense(true);
  }

  return (
    <Container>
      <MainHeader title={'Budget'} style={{ marginTop: 20 }} ></MainHeader>

      <DisplayBalance size='small' title={'Your Balance:'} value={total} />

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title={'History'} type={'h3'}></MainHeader>

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title={'Add New Transaction'} type={'h3'}></MainHeader>

      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setisExpense={setisExpense}
      />
      <Modaledit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setisExpense={setisExpense}>
      </Modaledit>

    </Container>
  );
}

export default App;
var initialEntries = [
  {
      id: 1,
      description: "Work income",
      value: "1000.00",
      isExpense: false
  },
  {
      id: 2,
      description: "Water bill",
      value: "20.00",
      isExpense: true
  },
  {
      id: 3,
      description: "Rent",
      value: "300.00",
      isExpense: true
  },
  {
      id: 4,
      description: "Power bill",
      value: "20.00",
      isExpense: true
  }
]; 