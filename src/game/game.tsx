import { createScene, createSprite, createText, isKeyPressed } from '../core/flora';

// Création de la scène
const scene = createScene('MainScene', { bgColor: '#222' });

// Ajout d'un sprite
const hero = createSprite({ x: 100, y: 200, imgSrc: 'hero.png' });
scene.addObject(hero);

// Ajout d'un texte
const label = createText({ x: 50, y: 50, text: 'Hello, Flora!', fontSize: '24px', color: 'white' });
scene.addObject(label);

// Exemple d'interaction clavier
document.addEventListener('keydown', () => {
  if (isKeyPressed('ArrowRight')) {
    hero.setPosition(hero.x + 10, hero.y);
  }
});
