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
 
    $scope.set = function(value){
    	console.log("Scope value = " + value);
        configService.currentField = fieldName;
        configService.data[fieldName].value = value;
        $scope.validate();

    };

    $scope.unSet = function(){
    	if (configService.data[fieldName].isSet === true)
    	{
    		configService.data[fieldName].isSet = false;
      	}

    }


    $scope.isSet = function(){
        return configService.data[fieldName].isSet;
    };

    $scope.validate = function(){
    	if (fieldName === "algorithm" || fieldName === "workmode"){
    		configService.data[fieldName].isSet = true;
    	}

    }
}

function AdditionalParamsController($scope, configService){

	$scope.html = "";

	$scope.getCurrentFieldName = function(){
		return configService.currentField;
	}

	$scope.getCurrentFieldValue = function(){
		if (configService.currentField != ""){
			return configService.data[configService.currentField].value;

		}

	}

	$scope.is = function(name, value){
		if ($scope.getCurrentFieldName() === name && 
			$scope.getCurrentFieldValue() === value)
		{
			return true;
		}
		return false;
	}

	$scope.showButton = function(){
		if (configService.currentField != ""){
			if (configService.currentField !== "algorithm" &&
				configService.currentField !== "workmode")
			{
		return !configService.data[configService.currentField].isSet;
	}
	}
	}

	$scope.generateInput = function(){
		$scope.seq1 = "AGCACACA";
		$scope.seq2 = "ACACACTA";
	}

		$scope.generateLinearGap = function(){
		$scope.linear = "-2";
	}

		$scope.generateAffineGap = function(){
		$scope.affine_open = "-3";
		$scope.affine_extend = "-1";
	}

	$scope.doneCurrentField = function(){
		configService.data[configService.currentField].isSet = true;
		configService.currentField = "";
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