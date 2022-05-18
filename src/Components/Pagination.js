import React from 'react';

export const Pagination = (postsPerPage, totalPosts, paginate) => {
  console.log(Math.ceil(totalPosts / postsPerPage));
  const pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)
  return (
    <>
      {/* <h2>Pagination</h2> */}
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <a onClick={() => paginate(number)} href="!#" className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
