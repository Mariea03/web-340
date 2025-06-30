//video-store.js
const EventEmitter = require("events");

class GameStore extends EventEmitter {
    constructor(){
        super();
        this.preorders =[];
    }

    preorderGame(game,customer){
        this.preorders.push({game,customer});
        this.emit("gamePreordered",game,customer);
    }

    releaseGame(game){
        const customersToNotify=this.preorders.filter(preorder=> preorder.game === game);
        this.emit("gameAvailable",game,customersToNotify);
    }
}

const gameStore = new GameStore();

//Set up listeners
gameStore.on("gamePreordered",(game,customer)=>{
 console.log(`Game preordered:${game}by${customer}`);
 //Reserve a copy of the fame for the customer
 //Charge the customer's account for the price of the game
});

gameStore.on("gameAVailable",(game,customersToNotify)=>{
    console.log(`Game available: ${game}`);
    customersToNotify.forEach(({customer})=>{
        console.log(`Notify${customer} that${game}is ready for pickup`);
        // Send a text message or email to the customer
    });
});

//Preorder some games
gameStore.preorderGame("Marvel Spider-Man 2", "Wolfgang Mozart");
gameStore.preorderGame("Marvel Spiderman-2", "Richard Wagner");

//Release a game
gameStore.releaseGame("Marvel Spider-Man 2");