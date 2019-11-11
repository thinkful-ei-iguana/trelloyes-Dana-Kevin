import React from 'react';
import Card from './Card';

function List(props) {
    return (
        <section className='List'>
            <header className="App-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards">
                {props.cards.map((card, index) =>
                    <Card
                        key={index}
                        title={card.title}
                        content={card.content}
                    />
                    )}
            </div>
        </section>
    )
}

export default List