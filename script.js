const panoImage = document.querySelector('#panorama-container');
const pano = './img/1.jpg';

const panorama = new PANOLENS.ImagePanorama(pano);
const viewer = new PANOLENS.Viewer({
    container: panoImage
});

viewer.add(panorama);

// var panorama, viewer, container, infospot;

// container = document.querySelector('#panorama-container');

// panorama = new PANOLENS.ImagePanorama('img/.jpg');

// infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospot.position.set(0, 0, -5000);
// infospot.addHoverText('Hello Panolens', 30);
// panorama.add(infospot);

// viewer = new PANOLENS.Viewer({ container: container });
// viewer.add(panorama);