import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title={'Budget'} style={{ marginTop: 20 }} ></MainHeader>

      <DisplayBalance size='small' title={'Your Balance:'} value='2,550.53' />

      <DisplayBalances />

      <MainHeader title={'History'} type={'h3'}></MainHeader>

      <EntryLines discription='income' value={'$10,00'} isExpense={false} />
      <EntryLines discription='expenses' value={'$5,00'} />

      <MainHeader title={'Add New Transaction'} type={'h3'}></MainHeader>

      <NewEntryForm />

    </Container>
  );
}

export default App;
