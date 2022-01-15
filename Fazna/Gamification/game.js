$(document).ready(function () {
    listChallenges();
    listLeaderboard();
    listChallengesip();
    listLeaderboardip();



})

function listChallenges() {
    let challenges = `
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
       
       
    
    `
    $('#challenges').html(challenges).listview('refresh');
}

function listChallengesip() {
    let challenges = `
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
        <li class="chal-item-ip list-group-item-action">
            <span class="chal-name">Order a Desert</span>
            <span class="chal-points">200 coins</span>
        </li>
      
    `
    $('#challenges-ip').html(challenges).listview('refresh');
}

function listLeaderboard() {
    let leaderboard = `

    <div class="row lead-item">
    <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
    </div>
    <div class="col-1" style="font-weight:bold; font-size:20px">
        1
    </div>
    <div class="col-3">
    <span>Kate Wilson</span>
    </div>
    <div class="col-3" style="text-align:center">
    <span >20</span>
    </div>
    <div class="col-3" style="text-align:center">
        <span >200</span>
    </div>
</div>

    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>

    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>


    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>


    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>


    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>


    <div class="row lead-item-self">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>


    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>


    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>


    <div class="row lead-item">
        <div class="col-1 lead-img m-2" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg')">
        </div>
        <div class="col-1" style="font-weight:bold; font-size:20px">
            1
        </div>
        <div class="col-3">
        <span>Kate Wilson</span>
        </div>
        <div class="col-3" style="text-align:center">
        <span >20</span>
        </div>
        <div class="col-3" style="text-align:center">
            <span >200</span>
        </div>
    </div>

        
    `
    $('#leaderboard-view').html(leaderboard).listview('refresh');
}

function listLeaderboardip() {
    let leaderboard = `

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-self-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    <div class="row lead-item-ip">
        <div class="col-2" >
            <div class="lead-img-ip" style="background-image:url('https://www.semidelicatebalance.com/wp-content/uploads/2019/06/kal-visuals-592091-unsplash.jpg'); padding:0">
                </div>
            </div>
    
        <div class="col-2" style="font-weight:bold;">
            1
        </div>
        <div class="col-4">
            <span>Kate Wilson</span>
        </div>
        <div class="col-4" style="text-align:center">
            <span >20</span>
        </div>
    </div>

    
    `
    $('#leaderboard-view-ip').html(leaderboard).listview('refresh');
}