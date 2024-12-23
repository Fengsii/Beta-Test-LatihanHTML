// fetch("https://kangzbredz-movie-api.vercel.app/api/movie/get-all").then(function (response){
//    return response.json();
// })
// .then(function (data){
//    const container = document.querySelector(".container");
//    console.log(data)
//    const movies = data.data
//    for (let movie of movies){
//       const box = document.createElement("div");
//       box.classList.add("box");
//       // const h1 = document.createElement("h1")
//       // h1.textContent = movie.title;
//       // box.appendChild(h1)
//       // container.appendChild(box);
//       // const image = document.createElement("img");
//       // image.classList.add("image");
//       // image.setAttribute("src", movie.poster);
//       // box.appendChild(image);
//       // const video = document.createElement("video");
//       // video.classList.add("video");
//       // video.setAttribute("src", movie.trailer);
//       // box.appendChild(video);

//       let trailerUrl = movie.trailer;
//          if (trailerUrl.includes('youtu.be')) {
//             const videoId = trailerUrl.split('/').pop().split('?')[0];
//             trailerUrl = `https://www.youtube.com/embed/${videoId}`;
//          } else if (trailerUrl.includes('watch?v=')) {
//             const videoId = trailerUrl.split('watch?v=').pop().split('&')[0];
//             trailerUrl = `https://www.youtube.com/embed/${videoId}`;
//          }

//          const iframe = document.createElement("iframe");
//          iframe.setAttribute("src", trailerUrl);
//          iframe.setAttribute("frameborder", "0");
//          iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
//          iframe.setAttribute("allowfullscreen", true);
//          box.appendChild(iframe);

//          container.appendChild(box);
//       }
// });


//Swiper
const swiper = new Swiper('.bannerSwiper', {
   spaceBetween: 0,
   effect: "fade",

   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   }
 });



 
 