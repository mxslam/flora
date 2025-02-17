// @ts-nocheck
// Gestion des scènes
const scenes = {};
const keys = new Set();

document.addEventListener('keydown', (e) => keys.add(e.key));
document.addEventListener('keyup', (e) => keys.delete(e.key));

export function isKeyPressed(key) {
  return keys.has(key);
}

export function createScene(name, { bgColor = '#000', layers = [0] } = {}) {
  if (scenes[name]) return scenes[name];

  const sceneElement = document.createElement('div');
  sceneElement.style.position = 'relative';
  sceneElement.style.width = '100vw';
  sceneElement.style.height = '100vh';
  sceneElement.style.background = bgColor;
  document.body.appendChild(sceneElement);

  const scene = {
    name,
    element: sceneElement,
    objects: [],
    layers,
    addObject(obj) {
      this.objects.push(obj);
      this.element.appendChild(obj.element);
    },
  };

  scenes[name] = scene;
  return scene;
}

export function createSprite({ x = 0, y = 0, imgSrc = 'noimage.png' } = {}) {
  const imgElement = document.createElement('img');
  imgElement.src = imgSrc;
  imgElement.style.position = 'absolute';
  imgElement.style.left = `${x}px`;
  imgElement.style.top = `${y}px`;

  return {
    x,
    y,
    element: imgElement,
    setPosition(newX, newY) {
      this.x = newX;
      this.y = newY;
      this.element.style.left = `${newX}px`;
      this.element.style.top = `${newY}px`;
    },
  };
}

export function createText({ x = 0, y = 0, text = '', fontSize = '20px', color = '#fff' } = {}) {
  const textElement = document.createElement('div');
  textElement.innerText = text;
  textElement.style.position = 'absolute';
  textElement.style.left = `${x}px`;
  textElement.style.top = `${y}px`;
  textElement.style.color = color;
  textElement.style.fontSize = fontSize;

  return {
    x,
    y,
    element: textElement,
    setText(newText) {
      this.element.innerText = newText;
    },
    setPosition(newX, newY) {
      this.x = newX;
      this.y = newY;
      this.element.style.left = `${newX}px`;
      this.element.style.top = `${newY}px`;
    },
  };
}
