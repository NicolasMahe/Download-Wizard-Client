angular.module('module_downloadManager')

.factory('$localeDurations', [function () {
  return {
    'one': {
      year: '{} year',
      month: '{} month',
      week: '{} week',
      day: '{} day',
      hour: '{}h',
      minute: '{}m',
      second: '{}s',
      millisecond: '{} millisecond'
    },
    'other': {
      year: '{} years',
      month: '{} months',
      week: '{} weeks',
      day: '{} days',
      hour: '{}h',
      minute: '{}m',
      second: '{}s',
      millisecond: '{} milliseconds'
    }
  };
}])
/*
 * module_downloadManager_torrentDetail
 * 
 * var directive:
 *  torrent
 */
.controller('module_downloadManager_torrentDetail', function ($scope) {
});
