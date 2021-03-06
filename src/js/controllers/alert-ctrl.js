/**
 * Alerts Controller
 */

angular.module('RDash').controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {

    $scope.data = "test";

    $scope.stats = {
        totalUsers : 80,
        totalServers : 16,
        totalDocs : 225,
        totalTickets : 48
    };

    $scope.alerts = [{
        type: 'success',
        msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
    },{
        type: 'warning',
        msg: 'Warning! This is warning bug.'
    }, {
        type: 'danger',
        msg: 'Found a bug? Create an issue with as many details as you can.'
    }];

    $scope.addAlert = function() {
        $scope.alerts.push({
            msg: 'Another alert!'
        });
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}