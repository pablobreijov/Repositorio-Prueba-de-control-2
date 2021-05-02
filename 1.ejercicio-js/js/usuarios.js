'use strict';
import { getData, getPhoto } from './helpers.js';

//Pedir al usuario un número (prompt), luego, pedir a la api
//(https://randomuser.me/api/?results=??) el numero de personas correspondiente
//por cada persona, creamos la siguiente estructura:
/* 

<article>
    <header>
      <img src="..." alt="..." />
      <h1>nombre apellido</h1>
    </header>
    <p>Lugar de nacimiento, Año</p>
  </article>

*/

const main = document.querySelector('main');

function buildUsers(userList) {
    const fragment = document.createDocumentFragment();
    for (const user of userList) {
        const article = document.createElement('article');
        const header = document.createElement('header');
        const nombre = `${user.name.first} ${user.name.last}`;
        const sexo = `${user.gender}`;
        const img = getPhoto(user.picture.large, nombre);
        const h1 = document.createElement('h1');
        const h4 = document.createElement('h4');
        h1.textContent = nombre;
        h4.textContent = sexo;
        const dob = new Date(user.dob.date);

        const p = document.createElement('p');
        p.textContent = `${user.nat}, ${user.email}, ${user.picture.large}`;

        header.append(img);
        header.append(h1);
        header.append(h4);
        article.append(header);
        article.append(p);

        fragment.append(article);
    }

    main.append(fragment);
}

async function mainFunc() {
    const quant = prompt('Introduce un numero');

    const url = `https://randomuser.me/api/?results=${quant}`;

    const data = await getData(url);

    const users = data.results;

    buildUsers(users);
}

mainFunc();
