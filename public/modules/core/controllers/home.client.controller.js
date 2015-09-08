'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
		
		$scope.alerts =[
		{

			icon:'glyphicon-user',
			colour:'btn-success',
			total:'20,408',
			desccription:'TOTAL CUSTOMERS'
		},

		{

			icon:'glyphicon-calendar',
			colour:'btn btn-primary',
			total:'8,382',
			desccription:'UPCOMING EVENTS'
		},

		{

			icon:'glyphicon-edit',
			colour:'btn-success',
			total:'527',
			desccription:'NEW CUSTOMERS IN 24H'
		},

		{

			icon:'glyphicon-record',
			colour:'btn-info',
			total:'85,000',
			desccription:'EMAIL SENT'
		},

		{

			icon:'glyphicon-eye-open',
			colour:'btn-warning',
			total:'268',
			desccription:'FOLLOW UPS REQUIRED'
		},

		{

			icon:'glyphicon-flag',
			colour:' btn-danger',
			total:'348',
			desccription:'REFFERALS TO MODARATE'
		}
	];

	}
]);