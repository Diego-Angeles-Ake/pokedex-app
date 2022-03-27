import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import './PokemonList.css';

import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import PokemonCard from './PokemonCard';

// const items = [...Array(33).keys()];

function Items({ currentItems }) {
  // console.log(currentItems);

  return (
    <div className='items'>
      {currentItems &&
        currentItems.map((item, i) => (
          <div key={item.name || item.pokemon.name} className='card'>
            {/* <h3>Item #{item.name || item.pokemon.name}</h3>
            <h3>{pokemonsData.length > 0 && pokemonsData[i].name}</h3> */}
            {<PokemonCard item={item} />}
          </div>
        ))}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const items = useSelector((state) => {
    return state.pokedex.pokemons;
  });
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div className='pList'>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel='next'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel='prev'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default PaginatedItems;
