function gameObject() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson" : {
                number: "0",
                shoe: "16",
                points: "22",
                rebounds: "12",
                assists: "12",
                steals: "3",
                blocks: "1",
                slamDunks: "1",
                },
                "Reggie Evans" : {
                number: "30",
                shoe: "14",
                points: "12",
                rebounds: "12",
                assists: "12",
                steals: "12",
                blocks: "12",
                slamDunks: "7",
                },
                "Brook Lopez": {
                number: "11",
                shoe: "17",
                points: "17",
                rebounds: "19",
                assists: "10",
                steals: "3",
                blocks: "1",
                slamDunks: "16",
                },
                "Mason Plumlee": {
                number: "1",
                shoe: "19",
                points: "26",
                rebounds: "12",
                assists: "6",
                steals: "3",
                blocks: "8",
                slamDunks: "5",
                },
                "Jason Terry": {
                number: "31",
                shoe: "15",
                points: "19",
                rebounds: "2",
                assists: "2",
                steals: "4",
                blocks: "11",
                slamDunks: "1",
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise, Purple"],
            players: {
                "Jeff Adrien": {
                number: "4",
                shoe: "18",
                points: "10",
                rebounds: "1",
                assists: "1",
                steals: "2",
                blocks: "7",
                slamDunks: "2",
                },
                "Bismak Biyombo": {
                number: "0",
                shoe: "16",
                points: "12",
                rebounds: "4",
                assists: "7",
                steals: "7",
                blocks: "15",
                slamDunks: "10",
                },
                "DeSagna Diop": {
                number: "2",
                shoe: "14",
                points: "24",
                rebounds: "12",
                assists: "12",
                steals: "4",
                blocks: "5",
                slamDunks: "5",
                },
                "Ben Gordon": {
                number: "8",
                shoe: "15",
                points: "33",
                rebounds: "3",
                assists: "2",
                steals: "1",
                blocks: "1",
                slamDunks: "0",
                },
                "Brendan Haywood": {
                number: "33",
                shoe: "15",
                points: "6",
                rebounds: "12",
                assists: "12",
                steals: "22",
                blocks: "5",
                slamDunks: "12",
            }
        }
    }
}

return obj
}

console.log(gameObject());

//generic functions used later
function allPlayers() {
    const fullList = gameObject()
    return {...fullList.home.players, ...fullList.away.players }
}

function homeTeam() {
    return gameObject().home
}

function awayTeam () {
    return gameObject().away
}

//numPointsScored function
function numPointsScored(name) {
    return allPlayers()[name].points;
}

//shoeSize function
function shoeSize(name) {
 return allPlayers()[name].shoe;
}

//teamColors function
function teamColors(teamNameInput) {
    const result = gameObject();
    for (let team in result) {
        let teamResult = result[team]
        if (teamResult.teamName === teamNameInput) {
            return teamResult.colors;
        }
    }
}

//teamNames function
function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName]
}

//playerNumbers function

function playerNumbers(teamNameInput) {
    const jerseyNumberArray = []
    let chosenTeamPlayers = null 
    if (homeTeam().teamName === teamNameInput) {
        chosenTeamPlayers = homeTeam().players
    }
    else {
        chosenTeamPlayers = awayTeam().players
    }
    for (player in chosenTeamPlayers) {
        jerseyNumberArray.push(chosenTeamPlayers[player].number)
    }
    return jerseyNumberArray
}

//playerStats

function playerStats(name) {
    return allPlayers()[name]
}

//bigShoeRebounds

function bigShoeRebounds() {
    let largestShoeSize = 0;
    let largestShoePlayer = "";
    const allPlayerList = allPlayers();
    let arrayOfPlayers = [];
    for (let player in allPlayerList){
        arrayOfPlayers.push(allPlayerList[player]);
    }
    arrayOfPlayers.sort((a,b) => a.shoe - b.shoe)
    return arrayOfPlayers[arrayOfPlayers.length -1].rebounds;
}

//Testing
console.log(numPointsScored("Brendan Haywood"));

console.log(shoeSize("Brendan Haywood"));

console.log(teamColors("Brooklyn Nets"));

console.log(teamNames());

console.log(playerNumbers("Brooklyn Nets"))

console.log(playerStats("Brendan Haywood"))

console.log(bigShoeRebounds())