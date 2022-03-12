const imageURL = ['https://pixabay.com/get/gc6d7d6e0e00d043334ea288b2d1710391e6645a5beb6369885c4f738c09c179ac548ee8e3496918e360e2f2e693278aee71038ad8cd3cbfab9a18eabd16ca1d4_640.jpg',
    'https://pixabay.com/get/g99368cd0cfe36d2365e7be7d2e020d6035d9733360e05cda47970250eda4adbb0c3f0b6ded19d5eee87ef087ae4d1418_640.jpg',
    'https://pixabay.com/get/g10c89cf62cddae1d9852a419c9738f5eb600ce2edecbf6c2a3632944fad5e4f7cded74708a0da0b80b3f9c79cee36c56b5a07202c833da052687a7df503857d4_640.jpg',
    'https://pixabay.com/get/g915e22fd5acc143865b14fd4d4cc0c4c31c098cf4f47a61324193166b9818f529feb380319e77668f395235bd20ae32ceced768d8f249033fa5fd38cc459d50f_640.jpg',
    'https://pixabay.com/get/gb94359c8f3e838d2ace475e13a8cc6da85b43eba4db5db4fcbff8cb52b7d40420d3087457866b97fc0963d43f50de06867a557f5a3e97a968760bc7d2bf24736_640.jpg'];
let index = 0;

setInterval(() => {
    document.getElementById('slider').setAttribute('src', imageURL[index++]);
    if (index === imageURL.length) index = 0;
}, 1500)