import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

const albums = [
  [
    'https://www.w3schools.com/html/pic_trulli.jpg',
    'https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg',
    'https://static.onecms.io/wp-content/uploads/sites/37/2016/02/15230656/white-modern-house-curved-patio-archway-c0a4a3b3.jpg'
  ],
  [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
    'https://i.ytimg.com/vi/mb4irevK_Is/maxresdefault.jpg',
    'https://i.pinimg.com/originals/e1/00/8b/e1008bb7042afa30710abdd1a058130c.jpg',
    'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg'
  ],
  [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdiL8kK1woke8HDhehvrrgLGbhB472Hw0dYQ&usqp=CAU',
    'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&w=1000&q=80',
    'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg',
    'https://s3-production.bobvila.com/slides/8507/original/putty_house.jpg',
    'https://i.pinimg.com/originals/31/9a/e7/319ae7f04ff001d6dacdff45c39ee8ff.jpg',
    'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2017/10/yellow-open-houses-2.jpg'
  ]
];

const randAlbum = Math.floor(Math.random() * albums.length);

ReactDOM.render(<App images={albums[randAlbum]}/>, document.getElementById('carousel'));