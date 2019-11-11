import React from 'react';
import List from './List';

function App(props) {
  return (
    <main className='App'>
      <header class='App-header'>
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