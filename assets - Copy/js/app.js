let cl = console.log;

let movie_array = document.getElementById('movie_array');


let result = " ";



    for(var i =0; i < movieArray.length; i++){
        result += `
        <div class="col-md-4">
        <div class="card">
            <figure class="movieCard">
                <img src="https://image.tmdb.org/t/p/w1280/${movieArray[i].backdrop_path}" alt="">
                <figcaption>
                    <div class="movieTitle">
                        <div class="row">
                            <div class="col-10">
                                <h3 class="m-0">
                                ${movieArray[i].title}
                                </h3>
                            </div>
                            <div class="col-2 rating text-center">
                                <span class="bg-warning">
                                ${movieArray[i].vote_average}
                                </span>
                            </div>
                        </div>
                    </div>    
                        <div class="movieOverView">
                            <h3>
                            ${movieArray[i].title}
                            </h3>
                            <h4>
                                <em>Overview</em>
                            </h4>
                           <p class="m-0">
                           ${movieArray[i].overview}

                           </p>
                        </div>
                </figcaption>
            </figure>
        </div>
    </div>
        `
    };

    movie_array.innerHTML = result;




