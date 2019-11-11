import React from 'react';
import STORE from 'store';

function List(props) {
    return (
        <section className='List'>
            <header className="App-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map(card =>
                    <Card
                        title={card.title}
                        content={card.content}
                    />
                    )}
            </div>
        </section>
    )
}

export default {
    List
}