import Ayami from './ayami.jpg';
import './ayami-image.scss';

export default class AyamiImage {
    render() {
        const img = document.createElement('img');
        img.src = Ayami;
        img.alt = 'Ayami'
        img.classList.add('ayami-image');

        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}
