/**
 * Alerts Controller
 */

angular.module('RDash').controller('TableCtrl', ['$scope', TableCtrl]);

function TableCtrl($scope) {

    $scope.manageTitle = "Manage";
    $scope.serversTitle = "Server";
    $scope.stripedServers = "Striped Servers";
    $scope.title = "Table Tab Title";


}