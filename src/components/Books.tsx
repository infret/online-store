import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Book } from '../types'
import BookCard from './BookContainer'
import SortField from './FilterContainer'

const Body = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1000px;
  min-height: 90vh;
`

const StyledUl = styled.ul`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fill, 180px);
  list-style-type: none;
  justify-content: space-evenly;
  position: relative;
`

const Loading = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 30vh;
  left: calc(50% - 27px);
  border: 5px solid gainsboro;
  border-left: 5px solid var(--accent-color);
  animation: loading 1s infinite linear;

  :after {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const MoreButton = styled.a`
  background-color: var(--accent-color);
  color: white;
  display: block;
  border-radius: 4px;
  padding: 10px;
  font-size: 18px;
  width: 250px;
  text-align: center;
  margin: 20px auto;
  border: var(--accent-color) solid 2px;
  transition: ease 0.4s;

  :hover {
    color: var(--accent-color);
    background-color: white;
  }
`

const Placeholder = styled.p`
  height: 30px;
  width: 130px;
  display: block;
  font-weight: bold;
  color: var(--accent-color);
  margin: 100px auto;
  font-size: 18px;
`

interface Props {
  books: Book[]
  isReady: boolean
  showBooks: (books: Book[]) => void
}

export default function Books({ books, isReady, showBooks }: Props) {
  useEffect(() => {
    fetch(
      'https://secret-ocean-49799.herokuapp.com/https://infret.github.io/book-store/books.json',
      {
        method: 'GET'
      }
    )
      .then((res) => res.json())
      .then((data) => {
        showBooks(data)
        console.log(data)
      })
  }, [showBooks])

  return (
    <Body>
      <SortField />
      {isReady ? (
        <div>
          <StyledUl>
            {books.map((book, i) => (
              <BookCard key={i} {...book} />
            ))}
            {books.length === 0 && <Placeholder>Nothing found</Placeholder>}
          </StyledUl>
          <MoreButton>Browse more books</MoreButton>
        </div>
      ) : (
        <Loading />
      )}
    </Body>
  )
}
