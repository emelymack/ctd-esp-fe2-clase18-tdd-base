import {FC} from "react";
import {Character} from "../../types/character.types";

export type CardProps = {
    character: Character
}

const Card:FC<CardProps> = ({character}: CardProps) => {
   return <div>
        <h2>{character.name}</h2>
        {character.image && <img src={character.image} alt={character.name} />}
        {character.followers > 0 ? 
            <p>{character.followers} followers</p> : 
            <p>No followers yet</p>
        }
    </div>
}

export default Card;