import React from 'react';
import List from './List';

function Lists (props) {
  let lists = props.lists.map((list, index) =>  
    <List
      key={index}
      header={list.header}
      cards={list.cardIds.map(cardId => props.cards[cardId])}
    />)
    return <div>{lists}</div>
}

export default Lists;