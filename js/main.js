function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 33.7835277, lng: -84.3884959},
    zoom: 14
  });
    var marker = new google.maps.Marker({
    position: {lat: 33.777494, lng: -84.396150},
    map: map,
    title: 'BOLD Delta Kappa'
  });
}

$(document).ready(function(){
  $("#names1,#names2,#names3,#names4,#names5,#names6,#names7,#names8,#names9,#names10,#names11,#names12,#names13,#names14,#names15,#names16,#names17,#names18,#names19,#names20,#names21,#names22,#names23,#names24,#names25,#names26,#names27,#names28,#names29,#names30,#verses1,#verses2,#verses3,#verses4,#verses5,#verses6,#verses7,#verses8,#verses9,#verses10,#verses11,#verses12,#verses13,#program1,#program2,#program3,#program4,#program5,#program6,#program7,#program8,#program9,#program10").hide();
    $("#line1").click(show1);
    $("#line2").click(show2);
    $("#line3").click(show3);
    $("#line4").click(show4);
    $("#line5").click(show5);
    $("#line6").click(show6);
    $("#line7").click(show7);
    $("#line8").click(show8);
    $("#line9").click(show9);
    $("#line10").click(show10);
    $("#line11").click(show11);
    $("#line12").click(show12);
    $("#line13").click(show13);
    $("#line14").click(show14);
    $("#line15").click(show15);
    $("#line16").click(show16);
    $("#line17").click(show17);
    $("#line18").click(show18);
    $("#line19").click(show19);
    $("#line20").click(show20);
    $("#line21").click(show21);
    $("#line22").click(show22);
    $("#line23").click(show23);
    $("#line24").click(show24);
    $("#line25").click(show25);
    $("#line26").click(show26);
    $("#line27").click(show27);
    $("#line28").click(show28);
    $("#line29").click(show29);
    $("#line30").click(show30);
    $("#poem1").click(showverses1);
    $("#poem2").click(showverses2);
    $("#poem3").click(showverses3);
    $("#poem4").click(showverses4);
    $("#poem5").click(showverses5);
    $("#poem6").click(showverses6);
    $("#poem7").click(showverses7);
    $("#poem8").click(showverses8);
    $("#poem9").click(showverses9);
    $("#poem10").click(showverses10);
    $("#poem11").click(showverses11);
    $("#poem12").click(showverses12);
    $("#poem13").click(showverses13);
    $("#mandated1").click(showprogram1);
    $("#mandated2").click(showprogram2);
    $("#mandated3").click(showprogram3);
    $("#mandated4").click(showprogram4);
    $("#mandated5").click(showprogram5);
    $("#mandated6").click(showprogram6);
    $("#mandated7").click(showprogram7);
    $("#mandated8").click(showprogram8);
    $("#mandated9").click(showprogram9);
    $("#mandated10").click(showprogram10);
});

function show1(){
  $("#names1").slideToggle();
}

function show2(){
  $("#names2").slideToggle();
}

function show3(){
  $("#names3").slideToggle();
}

function show4(){
  $("#names4").slideToggle();
}

function show5(){
  $("#names5").slideToggle();
}

function show6(){
  $("#names6").slideToggle();
}
function show7(){
  $("#names7").slideToggle();
}

function show8(){
  $("#names8").slideToggle();
}

function show9(){
  $("#names9").slideToggle();
}

function show10(){
  $("#names10").slideToggle();
}

function show11(){
  $("#names11").slideToggle();
}

function show12(){
  $("#names12").slideToggle();
}

function show13(){
  $("#names13").slideToggle();
}

function show14(){
  $("#names14").slideToggle();
}

function show15(){
  $("#names15").slideToggle();
}

function show16(){
  $("#names16").slideToggle();
}

function show17(){
  $("#names17").slideToggle();
}

function show18(){
  $("#names18").slideToggle();
}

function show19(){
  $("#names19").slideToggle();
}

function show20(){
  $("#names20").slideToggle();
}

function show21(){
  $("#names21").slideToggle();
}

function show22(){
  $("#names22").slideToggle();
}

function show23(){
  $("#names23").slideToggle();
}

function show24(){
  $("#names24").slideToggle();
}

function show25(){
  $("#names25").slideToggle();
}

function show26(){
  $("#names26").slideToggle();
}

function show27(){
  $("#names27").slideToggle();
}

function show28(){
  $("#names28").slideToggle();
}

function show29(){
  $("#names29").slideToggle();
}

function show30(){
  $("#names30").slideToggle();
}

function showverses1(){
  $("#verses1").slideToggle();
}

function showverses2(){
  $("#verses2").slideToggle();
}

function showverses3(){
  $("#verses3").slideToggle();
}

function showverses4(){
  $("#verses4").slideToggle();
}

function showverses5(){
  $("#verses5").slideToggle();
}

function showverses6(){
  $("#verses6").slideToggle();
}

function showverses7(){
  $("#verses7").slideToggle();
}

function showverses8(){
  $("#verses8").slideToggle();
}

function showverses9(){
  $("#verses9").slideToggle();
}

function showverses10(){
  $("#verses10").slideToggle();
}

function showverses11(){
  $("#verses11").slideToggle();
}

function showverses12(){
  $("#verses12").slideToggle();
}

function showverses13(){
  $("#verses13").slideToggle();
}

function showprogram1(){
  $("#program1").slideToggle();
}

function showprogram2(){
  $("#program2").slideToggle();
}

function showprogram3(){
  $("#program3").slideToggle();
}

function showprogram4(){
  $("#program4").slideToggle();
}

function showprogram5(){
  $("#program5").slideToggle();
}

function showprogram6(){
  $("#program6").slideToggle();
}

function showprogram7(){
  $("#program7").slideToggle();
}

function showprogram8(){
  $("#program8").slideToggle();
}

function showprogram9(){
  $("#program9").slideToggle();
}

function showprogram10(){
  $("#program10").slideToggle();
}

// angular.module("mainApp", [])
//     .controller("MainController", ["$scope","$http",function($scope,$http) {
//
//     //CONSTANTS
//         var ITEM_LABEL = " items per page";
//
//     //Initialize variables
//         $scope.maxItemArray = [
//             {"name":"10"+ITEM_LABEL,"value":10},
//             {"name":"20"+ITEM_LABEL,"value":20},
//             {"name":"50"+ITEM_LABEL,"value":50}
//         ];
//
//         $http.get("js/state-data.json").success(function(response){
//             $scope.stateArray = response;
//         });
//         $http.get("js/sample-data.json").success(function(response){
//
//             //run for loop on JSON data and add a "name" property containing first and last name for easy filtering
//             angular.forEach(response, function(element,index){
//                 response[index].name = element.first_name + " " + element.last_name;
//             });
//             $scope.memberList = response;
//         });
//         $scope.custom = true;
//         $scope.currentPage = 1;
//         $scope.offset = 0;
//         $scope.searchMember = "";
//         $scope.updatePages = function(memberResults){
//             if(memberResults !== undefined){
//                  $scope.numberOfPages = Math.ceil(Object.keys(memberResults).length/$scope.resultLimit);
//                  console.log("Number of pages: "+$scope.numberOfPages);
//                // $scope.currentPage = 1;
//             }
//         };
//
//         $scope.goBack = function(){
//             /*
//             if($scope.currentPage != 1){
//                // $scope.currentPage--;
//             }
//             */
//           //  console.log($scope.currentPage);
//         };
//
//          $scope.goForward = function(){
//              /*
//             if($scope.currentPage < $scope.numberOfPages){
//               //  $scope.currentPage++;
//                                // $scope.currentPage = 9;
//
//             }*/
//            // console.log($scope.currentPage);
//         };
//         $scope.resultLimit = $scope.maxItemArray[0].value;
//
//     }]
// );
