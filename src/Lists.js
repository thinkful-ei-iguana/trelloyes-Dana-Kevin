import React from 'react';
import List from './List';

function Lists (props) {
  return 
    props.lists.map(list =>{
      
    <List
      header={list.header}
      cards={list.cardIds.map(cardId => cards[cardId])}
    />

                    })
    
  

}

export default Lists;