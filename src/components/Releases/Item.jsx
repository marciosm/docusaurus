import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa ícones de seta
import CategoryButton from './Button';
import styled from 'styled-components';


const ReleaseNoteItemWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReleaseNoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ProductName = styled.h2`
  margin: 0;
  margin-right: 8px;
  font-size: 18px;
  font-weight: 500;
`;

const ReleaseDate = styled.p`
  margin: 0;
  color: #666;
  font-size: 14px;
`;

const Description = styled.p`
  margin: 12px 0;
  line-height: 1.5;
  color: #444;
`;

const LongDescription = styled.p`
  margin: 12px 0;
  line-height: 1.5;
  color: #444;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  margin-top: 8px;
  text-decoration: none; /* Remove o underline */
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  .icon {
    margin-left: 5px;
    transition: transform 0.3s ease;
    transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

const LinkButton = styled.a`
  padding: 4px 12px;  /* Diminuiu o padding para tornar o botão menor */
  font-size: 14px;  /* Diminuir o tamanho da fonte */
  background-color: #0086FF;
  color: white;
  border-radius: 6px;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: #007BE6;
    color: white;
    text-decoration: none;
  }
`;


// Função para formatar a data
const formatDate = (dateString) => {
  const [year, month, day] = dateString.split('-'); // Divide a string em ano, mês e dia
  const date = new Date(year, month - 1, day); // Cria a data ajustando o mês
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

const ReleaseNoteItem = ({ date, productName, description, longDescription, category, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ReleaseNoteItemWrapper>
      <ReleaseNoteHeader>
        <ProductInfo>
          <ProductName>{productName}</ProductName>
          <CategoryButton category={category}>{category}</CategoryButton>
        </ProductInfo>
        <ReleaseDate>{formatDate(date)}</ReleaseDate>
      </ReleaseNoteHeader>
      <Description>{description}</Description>
      {longDescription && (
        <>
          <LongDescription isOpen={isExpanded}>{longDescription}</LongDescription>
          <ToggleButton onClick={toggleDescription} isExpanded={isExpanded}>
            {isExpanded ? 'Ler menos' : 'Ler mais'}
            {isExpanded ? (
              <FaChevronUp className="icon" />
            ) : (
              <FaChevronDown className="icon" />
            )}
          </ToggleButton>
        </>
      )}
      {link && (
        <ButtonContainer>
          <LinkButton href={link} target="_blank" rel="noopener noreferrer">
            Saiba mais
          </LinkButton>
        </ButtonContainer>
      )}
    </ReleaseNoteItemWrapper>
  );
};

export default ReleaseNoteItem;
