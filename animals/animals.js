import { findById } from '../utils.js';
import { animals } from '../data.js';

// Collect parameters from the query and summon the animal object
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const animal = findById(id, animals);
const body = document.querySelector('body');

// Create elements to render animal details
const container = document.createElement('div');
container.classList.add('container');

const heading = document.createElement('h2');
heading.textContent = animal.name;

const p = document.createElement('p');
p.textContent = `"${animal.says}"`;

const image = document.createElement('img');
image.classList.add('animalImage');
image.src = `../assets/${animal.type}.svg`;

container.append(heading, image, p);

// Create a link back to home
const a = document.createElement('a');
a.href = '../index.html';
a.textContent = 'Back to Farm';
body.append(container, a);


