angular.module('module_downloadManager')

/**
 * Display table of torrents
 * 
 * <directive-download-manager-torrents-table></directive-download-manager-torrents-table>
 */
.directive('directiveDownloadManagerTorrentsTable', function() {
    return {
        restrict: 'E',
        scope: {
        },
        controller: "module_downloadManager_torrentsTable",
        templateUrl: '/app/module/downloadManager/template/torrentsTable.tpl.html',
        link: function(scope) {
            
        }
    };
});