angular.module('module_downloadManager')

/**
 * Add a torrent
 * 
 * <directive-download-manager-torrent-add success-function=""></directive-download-manager-torrent-add>
 */
.directive('directiveDownloadManagerTorrentAdd', function() {
    return {
        restrict: 'E',
        scope: {
            successFunction: '=successFunction'
        },
        controller: "module_downloadManager_torrentAdd",
        templateUrl: '/app/module/downloadManager/template/torrentAdd.tpl.html',
        link: function(scope) {
            
        }
    };
});