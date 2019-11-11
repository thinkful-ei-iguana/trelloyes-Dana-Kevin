import React from 'react';
import Lists from './Lists';

function App(props) {
  console.log(props.store);
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        <Lists
          lists= {props.store.lists}
          cards={props.store.allCards}
        />
      </div>
    </main>
  );
}

export default App;