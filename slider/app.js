const imageURL = ['https://p0.pikist.com/photos/451/548/away-shadow-landscape-forest-mood-light-nature-lane-tree.jpg',
    'https://cache.desktopnexus.com/thumbseg/1502/1502212-bigthumbnail.jpg',
    'https://w0.peakpx.com/wallpaper/420/153/HD-wallpaper-garden-birdhouse-pretty-grass-beautiful-nice-painting-path-flowers-art-forest-lovely-park-trees-birdhouse-garden-nature-lane-gazebo.jpg',
    'https://w0.peakpx.com/wallpaper/238/790/HD-wallpaper-garden-steps-pretty-beautiful-nice-painting-flowers-art-quiet-calmness-lovely-greenery-park-trees-serenity-paradise-summer-garden-nature-alley-steps.jpg',
    'https://w0.peakpx.com/wallpaper/420/153/HD-wallpaper-garden-birdhouse-pretty-grass-beautiful-nice-painting-path-flowers-art-forest-lovely-park-trees-birdhouse-garden-nature-lane-gazebo.jpg'];
let index = 0;

setInterval(() => {
    changeSlider(1);
}, 2500)

const changeSlider = position => {
    index += position;
    if (index === imageURL.length) index = 0;
    console.log(index);
    document.getElementById('slider').setAttribute('src', imageURL[index]);
}