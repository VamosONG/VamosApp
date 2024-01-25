import React, { useState, useEffect } from 'react';
import { Button, Box } from '@chakra-ui/react';

const Pagination = ({ data, itemsPerPage, initialPage = 1, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    updateDataToShow();
  }, [currentPage, data]);

  const updateDataToShow = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newDataToShow = data.slice(startIndex, endIndex);
    setDataToShow(newDataToShow);

    if (onPageChange) {
      onPageChange(currentPage);
    }
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 1) return;

    setCurrentPage(prevPage);
  };

  const nextHandler = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const nextPage = currentPage + 1;

    if (nextPage > totalPages) return;

    setCurrentPage(nextPage);
  };

  return (
    <>
      <Button variant="outline" colorScheme="teal" onClick={prevHandler}>
        Anterior
      </Button>

      <Box as="span" marginLeft="1rem" marginRight="1rem">
        Página {currentPage}
      </Box>

      <Button variant="outline" colorScheme="teal" onClick={nextHandler}>
        Siguiente
      </Button>
    </>
  );
};

export default Pagination;


//Para usar esta vaina:

/* import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import Pagination from './Pagination';

function MyComponent() {
  const viajesReservados = 
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    
    console.log(`Página cambiada a: ${page}`);
  };

  return (
    <div>
      
      <Pagination
        data={viajesReservados}
        itemsPerPage={itemsPerPage}
        initialPage={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default MyComponent; */

export default Paginado
