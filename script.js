let cont = document.querySelector('.movie_box')

axios.get('https://api.themoviedb.org/3/movie/popular?api_key=74d340d193dcfd94013ed906df20ce98')
    .then(res => reload(res.data.results, cont))


function reload(arr,place) {
    place.innerHTML = ""
    console.log(arr);

    for(let item of arr) {
        place.innerHTML += `
            <div class="item">
                <img src="${"https://image.tmdb.org/t/p/original" + item.poster_path}" alt="">
                <a href="./userData.html">${item.original_title}</a>
            </div>
        `
    }
}