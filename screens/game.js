$(document).ready(function () {
    listChallengesip();
    listLeaderboardip();
    loadData();
})

let rank = 0;

let user = {
    id: 12,
    name: "Dory",
    totalWinnings: 520,
    completedTasksNos: 5,
    completedTaskIds: [2, 4],
    score: 2640,
    level: 26

};


let tasks = [
    {
        id: 1,
        name: "Order a dessert",
        points: 20
    },
    {
        id: 2,
        name: "Order a drink",
        points: 30
    },
    {
        id: 3,
        name: "Order an ice-cream",
        points: 40
    },
    {
        id: 4,
        name: "Order a pizza",
        points: 60
    }
];

let users = [
    {
        id: 12,
        name: "Dory",
        totalWinnings: 520,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 2640,
        level: 26

    },
    {
        id: 10,
        name: "Alvin",
        totalWinnings: 420,
        completedTasksNos: 5,
        completedTaskIds: [2, 4, 1],
        score: 3002,
        level: 30

    },
    {
        id: 5,
        name: "Scooby",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 1],
        score: 4203,
        level: 42
    },
    {
        id: 7,
        name: "Olaf",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 1103,
        level: 11
    },
    {
        id: 3,
        name: "Garfield",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 5003,
        level: 50
    },
    {
        id: 30,
        name: "Tom",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 2010,
        level: 20
    },
    {
        id: 28,
        name: "Jerry",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 3302,
        level: 33
    },
    {
        id: 11,
        name: "Harry",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 2940,
        level: 29
    },

];

function loadData(){
    $("#game-userName").text(user.name);
    $("#game-userLevel").text("LEVEL "+user.level);
    $("#game-userWinnings").text(user.totalWinnings);
    $("#game-userRank").text(rank);
    let progress = user.score%100;
    $("#game-userProgress").text(progress+ "/100");
    $("#game-progress").css('width', progress+'%');
    $("#leader-selfName").text(user.name);
    $("#leader-selfRank").text("My Rank : " +rank);
    $("#leader-selfLevel").text("Level : " +user.level);

};

function listChallengesip() {
    let output = '';
    $.each(tasks, function (index, task) {
        if (!(user.completedTaskIds.includes(task.id))) {
            output += `
            <li class="chal-item list-group-item-action">
                <span class="chal-name">${task.name}</span>
                <span class="chal-points">${task.points} coins</span>
            </li>
        `;
        }
    });

    $('#challenges-ip').html(output).listview('refresh');
}


function listLeaderboardip() {

    users.sort(function(a,b){
        return b.level-a.level
    });

    let output = '';
    rank=0;
    $.each(users, function (index, player) {
        rank++;
        if (player.id == user.id) {
            output += `
            <div class="row lead-item-self-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
        ${rank}
        </div>
        <div class="col-4">
            <span>${player.name}</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >${player.level}</span>
        </div>
    </div>
        `;
        } else {
            output += `

            <div class="row lead-item-ip">
            <div class="col-2" >
                <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                    </div>
                </div>
        
            <div class="col-2" style="font-weight:bold;">
                ${rank}
            </div>
            <div class="col-4">
                <span>${player.name}</span>
            </div>
            <div class="col-4" style="text-align:center">
                <span >${player.level}</span>
            </div>
        </div>
            `;
        }
    });

    $('#leaderboard-view-ip').html(output).listview('refresh');
}

