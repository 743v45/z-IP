# z-IP

## API

### extranet 外网

```javascript
var ip = require('./z-ip');
ip.extranet(function(err, IPv4) {
    if (err) console.log(err);
    else console.log(IPv4);  // 115.222.111.1
});
```

### intranet 内网

```javascript
ip.intranet(function(err, IPv4) {
  if (err) console.log(err);
  else console.log(IPv4);  // 10.0.1.2
});
```

> Only testing on Mac
