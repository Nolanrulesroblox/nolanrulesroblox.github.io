function flyerrandom() {
    const flyer = ["flyer0", "flyer1", "flyer2", "flyer3"];
    flyer.flyer0 = {
        flyer_css: "yes", // Yes or url to css
        flyer_show: 'vid', //img/vid/frm
        flyer_aid: '', // Unused
        flyer_title: 'A Word From Our Sponfffffsor: <br>Dad', // title
        flyer_title_link: 'http://exmaple.com', //title link
        flyer_frame_src: '/src/ad.html', // src to iframe, if iframe is set
        flyer_frame_rp: 'unsafe-url', // if url is on another server, change
        flyer_desc:'your ad desc1', // Bottom text
        flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
        flyer_img_title: 'my cool image', // title of image, if image is set
        flyer_img_src: "https://via.placeholder.com/500x375", // image src, if image is set
        flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
        flyer_ajax1: "",
        flyer_ajax2: "",
        flyer_useid: "TBD", // Random MD5
        flyer_userandom: "true", // use random flyer config WIP
       }
       flyer.flyer1 = {
        flyer_css: "yes", // Yes or url to css
        flyer_show: 'vid', //img/vid/frm
        flyer_aid: '', // Unused
        flyer_title: 'A Word From Our Sponwfwfwsor: <br>Dad', // title
        flyer_title_link: 'http://exmaple.com', //title link
        flyer_frame_src: '/src/ad.html', // src to iframe, if iframe is set
        flyer_frame_rp: 'unsafe-url', // if url is on another server, change
        flyer_desc:'your ad desc1', // Bottom text
        flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
        flyer_img_title: 'my cool image', // title of image, if image is set
        flyer_img_src: "https://via.placeholder.com/500x375", // image src, if image is set
        flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
        flyer_ajax1: "",
        flyer_ajax2: "",
        flyer_useid: "TBD", // Random MD5
        flyer_userandom: "true", // use random flyer config WIP
       }
       flyer.flyer2 = {
        flyer_css: "yes", // Yes or url to css
        flyer_show: 'vid', //img/vid/frm
        flyer_aid: '', // Unused
        flyer_title: 'A Word From Our Sponaaaaaaaaaasor: <br>Dad', // title
        flyer_title_link: 'http://exmaple.com', //title link
        flyer_frame_src: '/src/ad.html', // src to iframe, if iframe is set
        flyer_frame_rp: 'unsafe-url', // if url is on another server, change
        flyer_desc:'your ad desc1', // Bottom text
        flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
        flyer_img_title: 'my cool image', // title of image, if image is set
        flyer_img_src: "https://via.placeholder.com/500x375", // image src, if image is set
        flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
        flyer_ajax1: "",
        flyer_ajax2: "",
        flyer_useid: "TBD", // Random MD5
        flyer_userandom: "true", // use random flyer config WIP
       }
    flyer.flyer3 = {
        flyer_css: "yes", // Yes or url to css
        flyer_show: 'vid', //img/vid/frm
        flyer_aid: '', // Unused
        flyer_title: 'A Word From Our Sponswwwwwwwwwor: <br>Dad', // title
        flyer_title_link: 'http://exmaple.com', //title link
        flyer_frame_src: '/src/ad.html', // src to iframe, if iframe is set
        flyer_frame_rp: 'unsafe-url', // if url is on another server, change
        flyer_desc:'your ad desc1', // Bottom text
        flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
        flyer_img_title: 'my cool image', // title of image, if image is set
        flyer_img_src: "https://via.placeholder.com/500x375", // image src, if image is set
        flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
        flyer_ajax1: "",
        flyer_ajax2: "",
        flyer_useid: "TBD", // Random MD5
        flyer_userandom: "true", // use random flyer config WIP
       }

       const random = Math.floor(Math.random() * flyer.length);
       console.log (random)
}
flyerrandom();
$(".text").append(flyer.flyer_title);