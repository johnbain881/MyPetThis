let pet = {
    name: "Casey",
    species: "Blue Heeler",
    nicknames: ["Case", "Casey Baby"],
    age: 1,
    bark: function (){
        window.alert("WOOF")
    },
    whine: function (){
        window.alert("WHINE")
    },
    growl: function (){
        window.alert("GRRRRR")
    },
    favortieToys: [],
    play: function(toy){
        if (toy.includes("bone")){
            this.favortieToys.push(toy);
        }
    }
}
console.log(pet.favortieToys);
pet.play("ham bone");
console.log(pet.favortieToys);
pet.play("cat toy")
console.log(pet.favortieToys);
