import React, { useState, useEffect } from 'react'
import Square from './Square'

const BingoIndex = (props) => {
  let [bingo, setBingo] = useState({
    name: "",
    squares: []
  })

  useEffect(() => {
    fetch('/api/v1/bingos')
    .then((response) => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status}: ${response.statusText}`
        let error = new Error(errorMessage)
        throw(error)
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      setBingo(body[0])
    })
    .catch((error) => {
      console.error(`Error fetching bingo boards: ${error.message}`)
    })
  }, [])

  let certainSquare = 0;
  let squares = bingo.squares.map((square) => {
    certainSquare++
    if (certainSquare == 1) {
      return (
        <div className="small-2 small-offset-1">
          <Square description={square.description} />
        </div>)
    }
    else if (certainSquare == 5) {
      certainSquare = 0
      return (
        <div className="small-2 end">
          <Square description={square.description} />
        </div>)
    } else {
      return (
        <div className="small-2">
          <Square description={square.description} />
        </div>)
    }
  })

  return (
    <div className="grid-container">
      <h1>{bingo.name}</h1>
      <div className="grid-y">
        <div className="grid-x">
          {squares}
        </div>
      </div>
    </div>
  )
}

export default BingoIndex
