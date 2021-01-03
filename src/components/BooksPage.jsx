import React, {useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import BookCard from './BookCard'
import SortField from './SortContainer'

const Body = styled.div`
	width: 100%;
	max-width: 1000px;
	margin: 0 auto;
	padding: 0;
`

const Books = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	list-style-type: none;
	margin: 0 auto;
	padding: 5px;
`

const Loading = styled.div`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	margin: 60px auto;
	position: relative;
	border-top: 5px solid rgba(0, 0, 0, 0.2);
	border-right: 5px solid rgba(0, 0, 0, 0.2);
	border-bottom: 5px solid rgba(0, 0, 0, 0.2);
	border-left: 5px solid black;
	transform: translateZ(0);
	animation: loading 1s infinite linear;
	
	&:after {
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

export default function BooksPage(props) {
	const {books, isReady, setBooks} = props

	useEffect(() => {
		axios.get('https://infret.github.io/online-store/books.json').then(response => {
			setBooks(response.data)
		})
	}, [setBooks])

	return (
			<Body>
				<SortField/>
				<Books>
					{isReady ? books.map((book,i) => <BookCard key={i} {...book}/>) : <Loading/>}
				</Books>
			</Body>
	)
}