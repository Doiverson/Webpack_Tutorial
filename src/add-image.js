import Ayami from "./components/ayami-image/ayami.jpg";

export default function addImage() {
    const img = document.createElement('img');
    img.alt = 'Nakajo Ayami';
    img.width = 300;
    img.src = Ayami;
    const body = document.querySelector('body');
    body.appendChild(img);
}
