# Image Gallery

![npm](https://img.shields.io/npm/v/@momopa/image-gallery)
![license](https://img.shields.io/npm/l/react-image-gallery)

Reactive image gallery component for React, designed to provide a seamless and customizable image viewing experience with thumbnails navigation.

## Aperçu

Un composant réactif qui permet d'afficher une galerie d'images avec navigation par vignettes et options de personnalisation avancées.

## Features

- **Thumbnails navigation** : Navigate through images with thumbnails.
- **Personnalisation** : Apparence customisation by the props.

## Installation

Install the package via npm :

```bash
npm install @sautiereqdev/react-image-gallery
```

## Utilisation

Import and use the Gallery component in your React application :

```jsx
import React from 'react';
import Gallery from '@sautiereqdev/react-image-gallery';

const images = [
  { src: 'image1.jpg', thumbnail: 'thumb1.jpg' },
  { src: 'image2.jpg', thumbnail: 'thumb2.jpg' },
//   other images...
];

function App() {
  return (
    <div>
      <h1>My image gallery</h1>
      <Gallery images={images} />
    </div>
  );
}

export default App;
```

## Contribution

Contributions are welcome, make pull requests to the `develop` branch and
 check the [contribution guidelines](CONTRIBUTING.md) for more details.

## Contributor

[Quentin Sautière](https://github.com/SautiereQDev) - Maintainer
