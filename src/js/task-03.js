const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const listEl = document.querySelector('#gallery');
listEl.classList.add('gallery--flex');
const flexClass = document.querySelector('.gallery--flex');
flexClass.style.display = 'flex';


const elements = images.map((image) => {
  const imageEl = listEl.insertAdjacentHTML('afterbegin', `<li><img src = ${image.url} alt = '${image.alt}'></li>`);
  const addClassImage = document.querySelector('img')
  addClassImage.classList.add('gallery-img');
  const imgClass = document.querySelector('.gallery-img');
  imgClass.style.width = '30vw'
  return imageEl;
 })