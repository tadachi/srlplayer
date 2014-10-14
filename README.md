srlplayer
=========

#### Note
Project has been deprecated in favor of the newer version.

Please see [srlplayer2]https://github.com/tadachi/srlplayer2

#### Description
Visit http://srl.takbytes.com to see this app live.

License: MIT

#### Development

Use this command in the same directory with the [package.json](https://github.com/tadachi/multitwitchchat/blob/master/package.json) file to install all the dependencies to get the node dev server working.

```bash
npm install
```

In [dev-server.js](https://github.com/tadachi/srlplayer/blob/master/dev-server.js) file, find the code line below and change it to fit your needs.

```javascript
...
...
var hostname = 'srl.tak.com'; // Change this to your hostname.
...
...
```

To get the server running,

```bash
node dev-server.js
...
Listening on port: 4000
hostname: srl.tak.com:4000
```

For me, I would enter http://srl.tak.com:4000 into my browser to use/test the app. You would use another host name or try http://localhost:4000 .
