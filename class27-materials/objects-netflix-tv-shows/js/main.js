//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixShow{
    constructor(name, genre, rating, numOfEpisodes){
        this.name = name
        this.genre = genre
        this.rating = rating
        this.numOfEpisodes = numOfEpisodes
    }

    release(){
        console.log('This show is ready to be released')
    }

    premiere(){
        console.log('This is the premiere of the ' + this.name + ' show')
    }
    pilot(){
        console.log('this is the first episode of ' + this.name)
    }

}

let NCIS = new NetflixShow('NCIS','Crime Drama', '100%', '21')