const car = {
    type: "Kia",
    model: "infinity",
    year: "2022",
    color: "Brown",

    drive: function(){
        console.log(`You are about to drive ${this.type} ${this.year}`)
    }
};

// class player{
//     score = 0;

//     pause(){
//         console.log(`You paused the game`);
//     }
//     exit(){
//         console.log(`Game exited`)
//     }
// }
// const player1 = new player();
//  player1.score += 1;
//  console.log(player1.score);
//  player1.pause();
//  player1.exit();

class player{
    constructor(name, position, nationality, age){
        this.name = name;
        this.position = position;
        this.nationality = nationality;
        this.age = Number(age);
    }
    playerData(){
        console.log(`${this.name} plays as a ${this.position}`)
    }
}
const Ney = new player(`Neymar`, `Left Wing Forward`, `Brazil`, 29);
// console.log(Ney.age)
// console.log(Ney.position)
Ney.playerData();


class athlete{
    constructor(gameType, age, name, position, nationality){
        this.name = name;
        this.gameType = gameType;
        this.age = age;
        this.position = position;
        this.nationality = nationality;
    }
    Details(){
        console.log(`${this.name} from ${this.nationality} plays ${this.gameType}`)
    }
}

const ron = new athlete(`Football`, 39, `Zlatan Ibrahimovic`, `Center forward`, `Swede`)
const roon = new athlete(`Footbal`, 37, `Cristiano Ronaldo`,
`Left Wing Forward`, `Portuguese`)
const root = new athlete("Tennis", "39", "Novan Jokovic", 'nil', "Czech Republic")
ron.Details();
console.log(ron.position);
console.log(roon.position)
roon.Details();
root.Details();