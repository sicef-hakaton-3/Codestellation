
'use strict';

angular.module('tripzyApp').service('notifyService', notifyService);


function notifyService(notify) {

  function alert(message, classes) { /*classes*/
    notify({
      message: message,
      classes: classes || 'notify-wrap',
      duration: 3000,
      position: 'left',
      maximumOpen: '2'
      //container: '#notify'
    });
  }

  this.alert = alert;

}
