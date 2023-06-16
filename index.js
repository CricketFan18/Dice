function rollDice(){

    var p1 = Math.random();
    var p2 = Math.random();
    p1 = Math.floor(p1*6)+1;
    p2 = Math.floor(p2*6)+1;

    switch(p1)
    {
        case 1: document.querySelector(".img1").setAttribute("src","images/dice1.png");
        break;

        case 2: document.querySelector(".img1").setAttribute("src","images/dice2.png");
        break;

        case 3: document.querySelector(".img1").setAttribute("src","images/dice3.png");
        break;

        case 4: document.querySelector(".img1").setAttribute("src","images/dice4.png");
        break;

        case 5: document.querySelector(".img1").setAttribute("src","images/dice5.png");
        break;

        case 6: document.querySelector(".img1").setAttribute("src","images/dice6.png");
        break;
    }

    switch(p2)
    {
        case 1: document.querySelector(".img2").setAttribute("src","images/dice1.png");
        break;

        case 2: document.querySelector(".img2").setAttribute("src","images/dice2.png");
        break;

        case 3: document.querySelector(".img2").setAttribute("src","images/dice3.png");
        break;

        case 4: document.querySelector(".img2").setAttribute("src","images/dice4.png");
        break;

        case 5: document.querySelector(".img2").setAttribute("src","images/dice5.png");
        break;

        case 6: document.querySelector(".img2").setAttribute("src","images/dice6.png");
        break;
    }

    if ( p1 === p2 )
    {
        document.querySelector("h1").textContent = "Draw! 🏳️";
    }
    else if ( p1 > p2 )
    {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    }
    else
    {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    }
}

rollDice();



