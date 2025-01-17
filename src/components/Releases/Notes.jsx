import React, { useEffect, useRef, useState } from 'react';
import ReleaseNoteItem from './Item';
import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa';

const ReleaseNotesWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
`;

const NotesContainer = styled.div`
  flex-grow: 1;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ProductFilter = styled.select`
  background-color: #0086FF;
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  margin: 8px 0px;
  -webkit-appearance: none; /* Remove o estilo padrão no Chrome/Safari */
  -moz-appearance: none; /* Remove o estilo padrão no Firefox */
  appearance: none; /* Remove o estilo padrão em navegadores compatíveis */
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center; /* Controla o espaçamento do ícone */
  padding-right: 30px; /* Espaço extra para o ícone */

  &:hover {
    background-color: #007BE6;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    border-color: #0056b3;
    background-color: #007BE6;
  }

  option {
    background-color: #fff;
    color: #333;
    padding: 8px;
    border-radius: 4px;
  }
`;


const ReleaseNotes = () => {
  const [releaseNotesData, setReleaseNotesData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('All');
  const notesRefs = useRef({});

  useEffect(() => {
    const fetchReleaseNotes = async () => {
      try {
        const response = await fetch('/release-notes.json', {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReleaseNotesData(data);
      } catch (error) {
        console.error('Failed to fetch release notes:', error);
      }
    };

    fetchReleaseNotes();
  }, []);

  const handleProductChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const filteredNotes = releaseNotesData.filter((note) =>
    selectedProduct === 'All' ? true : note.productName === selectedProduct
  );

  const uniqueProducts = [...new Set(releaseNotesData.map((note) => note.productName))];

  return (
    <ReleaseNotesWrapper>
      <FilterContainer>
        <FilterWrapper>
          <ProductFilter onChange={handleProductChange} value={selectedProduct}>
            <option value="All">Todas APIs</option>
            {uniqueProducts.map((product, index) => (
              <option key={index} value={product}>
                {product}
              </option>
            ))}
          </ProductFilter>
        </FilterWrapper>
      </FilterContainer>
      <NotesContainer>
        {filteredNotes.map((note, index) => (
          <div key={index} ref={(el) => (notesRefs.current[note.date] = el)}>
            <ReleaseNoteItem
              date={note.date}
              productName={note.productName}
              description={note.description}
              longDescription={note.longDescription} 
              category={note.category}
              link={note.link}
            />
          </div>
        ))}
      </NotesContainer>
    </ReleaseNotesWrapper>
  );
};

export default ReleaseNotes;
