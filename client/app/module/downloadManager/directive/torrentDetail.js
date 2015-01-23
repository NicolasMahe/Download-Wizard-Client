angular.module('module_downloadManager')

/**
 * Display detail of a torrent
 * 
 * <directive-download-manager-torrent-detail torrent="torrents[id]"></directive-download-manager-torrent-detail>
 */
.directive('directiveDownloadManagerTorrentDetail', function() {
    return {
        restrict: 'E',
        scope: {
            torrent: '=torrent'
        },
        controller: "module_downloadManager_torrentDetail",
        templateUrl: '/app/module/downloadManager/template/torrentDetail.tpl.html',
        link: function(scope) {
            
        }
    };
});