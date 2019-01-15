var app = angular.module('myApp', ['ngSanitize']);

app.controller('MissionsController', ['$scope', '$sce',
    function ContentCtrl($scope, $sce) {
        $scope.missions = {};
        $scope.missions.Astek = [];
        $.getJSON("/Content/JSON/astek.json").done(function (items) {
            items.forEach(function (item) {
                item.description = $sce.trustAsHtml(item.description);
            }, this);
            $scope.missions.Astek = items;
            $scope.$apply();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        });
        $scope.missions.CGI = [];
        $.getJSON("/Content/JSON/cgi.json").done(function (items) {
            items.forEach(function (item) {
                item.description = $sce.trustAsHtml(item.description);
            }, this);
            $scope.missions.CGI = items;
            $scope.$apply();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
            });
        $scope.missions.Hawaii = [];
        $.getJSON("/Content/JSON/hawaii.json").done(function (items) {
            items.forEach(function (item) {
                item.description = $sce.trustAsHtml(item.description);
            }, this);
            $scope.missions.Hawaii = items;
            $scope.$apply();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        });
        $scope.missions.vNext = [];
        $.getJSON("/Content/JSON/vnext.json").done(function (items) {
            items.forEach(function (item) {
                item.description = $sce.trustAsHtml(item.description);
            }, this);
            $scope.missions.vNext = items;
            $scope.$apply();
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        });

    }])
    .directive('myMission', function () {
        return {
            template: `
                        <span class="col-md-2">{{mission.period}}</span>
                        <div class="container"">
							<span class="col-md-2" style="font-size:20px"><ins>{{mission.title}}</ins></span>
                            <img class="img-rounded logo" ng-src="{{mission.imgCustomer}}" height="50px"/>
						    <img class="img-rounded logo" ng-src="{{mission.imgFirm}}" height="50px"/>
						</div>
						<div class="container">
						    <p ng-bind-html="mission.description"></p>
						    <h4>Compétences utilisées</h4>
						    <span class="container" ng-repeat="skill in mission.skills">
								{{skill.name}}
								{{skill.percent}}%
								<span class="progress">
									<div class="progress-bar {{skill.progressColor}} progress-bar-striped" role="progressbar" aria-valuenow="{{skill.percent}}" aria-valuemin="0" aria-valuemax="100" style="width: {{skill.percent}}%"></div>
								</span>
						    </span>
                        </div>
                        <div class="container">
                            <h4>Techniques utilisées</h4>
                            <span class="container" ng-repeat="technics in mission.technics">
                                {{technics}}
                            </span>
                        </div>
					</div>`
        };
    });

app.controller('AbilitiesController', ['$scope', function ($scope) {
    $scope.getNumber = function (num) {
        return new Array(num);
    };
    $scope.skillsLeft = [
        {
            name: 'SharePoint',
            level: 5
        },
        {
            name: 'C#',
            level: 4
        },
        {
            name: 'ASP.NET',
            level: 4
        },
        {
            name: 'Web Langages (HTML/CSS)',
            level: 4
        },
        {
            name: 'JavaScript (jQuery, Angular, ClientContext)',
            level: 4
        },
        {
            name: 'Powershell',
            level: 3
        },
    ];
    $scope.skillsRight = [
        {
            name: 'SQL',
            level: 2
        },
        {
            name: 'PHP',
            level: 2
        },
        {
            name: 'XML',
            level: 3
        },
        {
            name: 'JSON',
            level: 4
        },
        {
            name: 'UML',
            level: 2
        }
    ];
    $scope.languages = [
        {
            name: 'French (Mother tongue)',
            level: 5
        },
        {
            name: 'English',
            level: 4
        }
    ]
    $scope.toolsLeft = [
        {
            name: 'Visual Studio',
            level: 5
        },
        {
            name: 'Visual Studio Code',
            level: 3
        },
        {
            name: 'TFS (Branch, Merge, Commit)',
            level: 4
        },
        {
            name: 'Notepad++',
            level: 4
        }
    ];
    $scope.toolsRight = [
        {
            name: 'Office (Word/PowerPoint/Outlook)',
            level: 4
        },
        {
            name: 'Filezilla',
            level: 4
        },
        {
            name: 'Chrome & Firefox',
            level: 4
        }
    ];
}]);