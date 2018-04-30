'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "SupportLOKI Pool",
		coin_code: "LOKI",
		coin_name: "LokiNetwork",
		api_url : 'https://dev.supportloki.com/api',
		api_refresh_interval: 5000,
		app_update_interval: 30*30000
	};
});
