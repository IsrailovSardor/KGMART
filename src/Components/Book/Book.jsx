import React from 'react';

const Book = ({product}) => {
    return (
        <div className='bg-red-400 mr-4 p-4 rounded-2xl'>
            <p className="text-2xl">Книги</p>
           <p>{product.title}</p> 
           <p>{product.author}</p> 
        </div>
    );
};

export default Book;