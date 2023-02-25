import React from 'react'

const CreateThumbnail = ({title, thumbnail}) => {
  return (
    <img src={thumbnail} alt={`Image of game: ${title}`}></img>
  )
}

export default CreateThumbnail;