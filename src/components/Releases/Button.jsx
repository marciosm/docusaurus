import styled from 'styled-components';

const CategoryButton = styled.button`
  padding: 6px 12px;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  margin: 4px;
  background-color: white;
  border-color: ${({ category }) => {
    switch (category) {
      case 'Feature':
        return 'green';
      case 'Announcement':
        return 'blue';
      case 'Fixed':
        return 'orange';
      case 'Changed':
        return 'red';
      default:
        return 'grey';
    }
  }};
 color: ${({ category }) => {
    switch (category) {
      case 'Feature':
        return 'green';
      case 'Announcement':
        return 'blue';
      case 'Fixed':
        return 'orange';
      case 'Changed':
        return 'red';
      default:
        return 'grey';
    }
  }};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); // sombra leve para um efeito delicado
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15); // aumenta a sombra ao passar o mouse
    transform: translateY(-2px); // eleva levemente o botão ao hover
  }
`;

export default CategoryButton;
