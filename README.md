# cordova-plugin-jitsi-meet
Cordova plugin for Jitsi Meet SDK. Works with both iOS and Android, and fixes the 64-bit binary dependency issue with Android found in previous versions of this plugin.

Currently used version of Jitsi Meet SDK: **3.5.0**

# Summary 
This is based on the repo by findmate, but I updated the JitsiMeet SDK and WebRTC framework to the latest version, to get all features working in a Cordova app.
The original repo is here: https://github.com/findmate/cordova-plugin-jitsi-meet

# Installation
`cordova plugin add https://github.com/cremfert/cordova-plugin-jitsi-meet`

## iOS Installation
On iOS/Xcode you will need to manually specify the WebRTC and JitsiMeet frameworks manually to be embedded.

Example of how to select them here: https://github.com/cremfert/cordova-plugin-jitsi-meet/blob/master/xcode-ios-framework-embed-example.png

# Usage
The plugin provides just two methods: ```join``` and ```destroy```.

```
join(
	jitsiMeetServerUrl: string,
	roomId: string,
	audioOnly: boolean,
	ownDisplayName: string,
	successCallback: function(data) {},
	errorCallback: function(error) {}
)
```

```
destroy(
	successCallback: function(data) {},
	errorCallback: function(error) {}
)
```
# Example

```
const roomId = 'your-custom-room-id';

jitsiplugin.join('https://meet.jit.si/', roomId, false, 'My name', function (data) {
    if (data === "CONFERENCE_TERMINATED") {
        jitsiplugin.destroy(function (data) {
            // call finished
        }, function (err) {
            console.log(err);
        });
    }
}, function (err) {
    console.log(err);
});
```
