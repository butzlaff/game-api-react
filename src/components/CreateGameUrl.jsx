import React from 'react'

const CreateGameUrl = ({ game_url, title }) => {
  return (
    <a className='' href={game_url}>{title}</a>
  )
};

export default CreateGameUrl;