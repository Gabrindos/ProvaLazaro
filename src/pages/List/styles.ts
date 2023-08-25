import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto ;
  padding-top: 1rem;
  gap: 5rem;
  p{
    font-size: xx-large;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
    font-size: 0.9rem;
    gap: 1rem;
    p{
      font-size: x-large;
    }
  }
`
