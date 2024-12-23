fetch("https://api.themoviedb.org/3/movie/now_playing").then(function (response){
   return response.json();
})
.then(function (data){
   const container = document.querySelector(".container");
   console.log(data)
   const movies = data.data
   for (let movie of movies){
      const box = document.createElement("div");
      box.classList.add("box");
      const h1 = document.createElement("h1")
      h1.textContent = movie.title;
      box.appendChild(h1)
      container.appendChild(box);
    //   const image = document.createElement("img");
    //   image.classList.add("image");
    //   image.setAttribute("src", movie.poster);
    //   box.appendChild(image);
      const video = document.createElement("video");
      video.classList.add("video");
      video.setAttribute("src", movie.trailer);
      box.appendChild(video);
   }
});