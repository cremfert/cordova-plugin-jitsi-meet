var exec = require('cordova/exec');

exports.join = function(serverUrl, room, audioOnly, displayName, success, error) {
    exec(success, error, "JitsiPlugin", "join", [serverUrl, room, !!audioOnly, displayName]);
};

exports.destroy = function(success, error) {
    exec(success, error, "JitsiPlugin", "destroy", []);
};
