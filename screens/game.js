$(document).ready(function () {
    listChallengesip();
    listLeaderboardip();
    loadData();
})

let myrank = 0;

let user = {
    id: 12,
    name: "Jane Doe",
    totalWinnings: 520,
    completedTasksNos: 5,
    completedTaskIds: [],
    score: 2640,
    level: 26,
    img: "https://i.pinimg.com/736x/9c/91/e0/9c91e06b6538e8bb941314a25207835f.jpg"


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
        name: "Jane Doe",
        totalWinnings: 520,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 2640,
        level: 26,
        img: "https://i.pinimg.com/736x/9c/91/e0/9c91e06b6538e8bb941314a25207835f.jpg"

    },
    {
        id: 10,
        name: "Alvin Thomas",
        totalWinnings: 420,
        completedTasksNos: 5,
        completedTaskIds: [2, 4, 1],
        score: 3002,
        level: 30,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmNdSL0wetARyMZVIRgtl2yPZyzXSJQx4EzA&usqp=CAU"

    },
    {
        id: 5,
        name: "Bob Peterson",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 1],
        score: 4203,
        level: 42,
        img: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"
    },
    {
        id: 7,
        name: "Olaf milton",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 1103,
        level: 11,
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id: 3,
        name: "Brenda Dun",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 5003,
        level: 50,
        img: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
    },
    {
        id: 30,
        name: "Florence Pugh",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 2010,
        level: 20,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI3t-yr1FcF9xzZOdFaHc-9T9KZHwANaEwpdyKQAT_xGGwzDmS"
    },
    {
        id: 28,
        name: "Salma Hayek",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 3302,
        level: 33,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsdekenlI_nPJ15H2NIWtD3TMI5Suq-YKaUpszI4ibgrE6-fsV"
    },
    {
        id: 11,
        name: "Harry Styles",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 2940,
        level: 29,
        img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRTLO6mzbNcykX9Eh-lcYRhv7aaPmGfSha2ti2tp6rEa2hpPsC0"
    },
    {
        id: 11,
        name: "Nick Fury",
        totalWinnings: 500,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 2940,
        level: 29,
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nick-fury-eye-1552397861.jpg?crop=0.488xw:0.976xh;0,0&resize=480:*"
    },
    {
        id: 13,
        name: "James Franco",
        totalWinnings: 200,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 1010,
        level: 10,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgH_fHEjWiPOMyZKGF1cooyoCJQSEXyoipGxMHM7n6bMg19cjh"
    },
    {
        id: 14,
        name: "James Franco",
        totalWinnings: 200,
        completedTasksNos: 5,
        completedTaskIds: [2, 4],
        score: 1010,
        level: 10,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgH_fHEjWiPOMyZKGF1cooyoCJQSEXyoipGxMHM7n6bMg19cjh"
    },

];

function loadData(){
    $("#game-userName").text(user.name);
    $("#game-userLevel").text("LEVEL "+user.level);
    $("#game-userWinnings").text(user.totalWinnings);
    $("#game-userRank").text(myrank);
    let progress = user.score%100;
    $("#game-userProgress").text(progress+ "/100");
    $("#game-progress").css('width', progress+'%');
    $("#leader-selfName").text(user.name);
    $("#leader-selfRank").text("My Rank : " +myrank);
    $("#leader-selfLevel").text("Level : " +user.level);

};

function listChallengesip() {
    let output = '';
    $.each(tasks, function (index, task) {
        if (!(user.completedTaskIds.includes(task.id))) {
            output += `
            <a href="#popup-task-description" data-rel="popup" data-transition="pop">
            <li class="chal-item list-group-item-action">
                <span class="chal-name">${task.name}</span>
                <span class="chal-points">${task.points} coins</span>
            </li>
            </a>

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
            myrank = rank;
            output += `
            <div class="row lead-item-self-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('${player.img}'); padding:0">
                </div>
            </div>
    
        <div class="col-1" style="font-weight:bold;">
        ${rank}
        </div>
        <div class="col-5">
            <span>${player.name}</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >${player.level}</span>
        </div>
    </div>
        `;
        } else {
            output += `

            <div class="row lead-item-ip">
            <div class="col-2" >
                <div class="lead-img-ip" style="background-image:url('${player.img}'); padding:0">
                    </div>
                </div>
        
            <div class="col-1" style="font-weight:bold;">
                ${rank}
            </div>
            <div class="col-5">
                <span>${player.name}</span>
            </div>
            <div class="col-3" style="text-align:center">
                <span >${player.level}</span>
            </div>
        </div>
            `;
        }
    });

    $('#leaderboard-view-ip').html(output).listview('refresh');
}

