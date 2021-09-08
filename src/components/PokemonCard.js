import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ id, name, hp, sprites }) {
  const [isSpriteToggled, setSprite] = useState(false);

  function handleSprites(e){
    setSprite(previousIsSpriteToggled => !previousIsSpriteToggled);
  };

  return (
    <Card>
      <div id={id} onClick={e => handleSprites(e)}>
        <div className="image">
          <img src={isSpriteToggled ? sprites.back : sprites.front} alt={name} id={id} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
