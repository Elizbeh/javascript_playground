class Show {
    constructor(title, numberOfSeasons) {
       this.title = title
       this.numberOfSeasons = numberOfSeasons
       this.ratings = []
       this.averageRating = 0
    }

    addRating(ratingNum) {
        this.ratings.push(ratingNum)
        let total = 0
        for (let rating of this.ratings) {
            total += rating
    }
     this.averageRating = total/this.ratings.length
}
}

const myShow = new Show("Afro Juju", 4)
myShow.addRating(4)
myShow.addRating(2)
myShow.addRating(3)
myShow.addRating(1)
console.log(myShow)