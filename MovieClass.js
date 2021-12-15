class Movie {
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
}

var movie1 = new Movie("madras","nelam","PG13");
var movie2 = new Movie("Karnan","V Creation","R");
var movie3 = new Movie("Casino Royale","Eon Productions","PG13");

console.log(movie1);
console.log(movie2);
console.log(movie3);
