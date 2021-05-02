function getPhoto(url, nombre) {
    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.setAttribute('alt', `Foto de ${nombre}`);
    return img;
}

async function getData(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

export { getPhoto, getData };
