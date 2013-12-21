'use strict';

var visaaApp = angular.module('visaaApp', []);

visaaApp.factory('configService', function()
{
	return {
				currentField: "",
				data: {


					algorithm : 
					{
						value: "",
						isSet: false,
					},
					input :
					{
						value: "",
						data : {
							type: "",
							content: ""
						},
						isSet: false,
					},
					score :
					{
						value: "",
						isSet: false,
					},
					punishment :
					{
						value: "",
						isSet: false,
					},
					workmode :
					{
						value: "",
						isSet: false,
					}
				}
	}
}
);


function FieldController($scope, configService, fieldName){
 
    $scope.value = "";
 
    // Mixin scope methods.
    $scope.set = function(){
        configService.currentField = fieldName;
        configService.data[fieldName][configService.currentField] = $scope.value;
        console.log("for " +  configService.currentField + " result " + $scope.value ) 
    };

    $scope.isSet = function(){
        return configService.data[fieldName].isSet;
    };
}

function AdditionalParamsController($scope, configService){
	$scope.getCurrentFieldName = function(){
		return configService.currentField;
	}

	$scope.getCurrentFieldValue = function(){
		if (configService.currentField != ""){
			return configService.data[configService.currentField].value;

		}

	}

	$scope.doneCurrentField = function(){
		configService.data[configService.currentField].isSet = true;
	}
}

function AlgorithmController($scope, configService){
	angular.extend(this, new FieldController($scope, configService, "algorithm"));
}

function InputController($scope, configService){
	angular.extend(this, new FieldController($scope, configService, "input"));
}

function ScoreController($scope, configService){
	angular.extend(this, new FieldController($scope, configService, "score"));
}

function PunishmentController($scope, configService){
	angular.extend(this, new FieldController($scope, configService, "punishment"));
}

function WorkModeController($scope, configService){
	angular.extend(this, new FieldController($scope, configService, "workmode"));
}