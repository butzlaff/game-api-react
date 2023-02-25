import React from 'react'
import CreateDeveloper from './CreateDeveloper';
import CreateDiscription from './CreateDiscription';
import CreateGameUrl from './CreateGameUrl';
import CreateThumbnail from './CreateThumbnail';
import CreateTitle from './CreateTitle';

const CreateDivGame = ({game, index}) => {
  const { title, thumbnail, short_description, developer, game_url } = game;
  return (
    <div key={index} className='game'>
      { <CreateTitle title={title} /> }
      { <CreateThumbnail title={title} thumbnail={thumbnail}/>}
      { <CreateDiscription short_description={short_description}/>}
      { <CreateDeveloper developer={developer}/>}
      { <CreateGameUrl game_url={game_url} title={title} />}
    </div>
  )
};

export default CreateDivGame;