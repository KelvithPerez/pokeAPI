import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
    const view = `
     <div class="Characters-inner">
       <article class="Characters-card">
         <img src="${character.imege}" alt="${character.name}">
         <h2>${character.name}</h2>
       </article>
       <article class="Characters-card">
         <h3>Episodios: <span>${character.episodio.length}</span></h3>
         <h3>Tipo: <span>${character.tipo}</span></h3>
         <h3>Especies: <span>${character.especies}</span></h3>
         <h3>Genero: <span>${character.genero}</span></h3>
         <h3>Origen: <span>${character.origen.name}</span></h3>
         <h3>Localisación: <span>${character.localizacion.name}</span></h3>
       </article>
     </div>
    `;
    return view;
};

export default Character;