import { useParams } from "react-router-dom";
import { useEffect,useState} from "react";
import Card from "../components/Card";

export default function Detalle() {

  const url_api ='https://pokeapi.co/api/v2/pokemon/';
  const [infoPokemon,setInfoPokemon] = useState({});
  const { nombre } = useParams();


    useEffect(() => {
      getInfoPokemon(nombre);
 }, [nombre]);

  const getInfoPokemon = async (nombre) =>{
    const resp = await fetch (url_api + nombre);

  if(resp.status !== 200) {
    console.log('error!!!');
  }else{
     const data = await resp.json();
     const obj_info_pokemon = {
                              name: data.name[0].toUpperCase() + data.name.slice(1),
                              img: data.sprites.other.dream_world.front_default,
                              hp: data.stats[0].base_stat,
                              stat_attack:data.stats[1].base_stat,
                              stat_defense:data.stats[2].base_stat,
                              stat_speed: data.stats[5].base_stat,
                              types:[]
    };
    let array_types = data.types;
    array_types.forEach((type) =>{
      obj_info_pokemon.types.push(type.type.name);
    });
    setInfoPokemon(obj_info_pokemon);
  }
    }

  return (
    <div className="container margen-top">
     {
     (!nombre)?
     <p>No hay valor</p>:
     <Card infoPokemon={infoPokemon}/>
     }

    </div>
  );
}
