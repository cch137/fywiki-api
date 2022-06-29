const port = process.env.PORT || 3000;
const os = require('os');
const path = require('path');
const static = require('node-static');
const fs = require('fs');
const http = require('http');
const { EventEmitter } = require('stream');
const {
  parse,
} = require('url');

const file = new(static.Server)(__dirname + '/static');

/*
运行指令：
Set-ExecutionPolicy RemoteSigned -Scope Process
nodemon index.js

更新指令：
git add .
git commit -m "update"
git push origin master
vercel --prod
vercel dev
*/

const format_date = require('./modules/format_date').format_date;
const mime_detect = require('./modules/mime_detect').mime_detect;

const emitter = new EventEmitter();

// // register a listener
// emitter.on('test_event', function(someone) {
//   console.log('Hi,', someone);
//   console.log('freemem  : ',os.freemem());
//   console.log('totalmem : ',os.totalmem());
//   console.log('username : ',os.userInfo().username);
// })

// // raise an event
// emitter.emit('test_event', '137');

const server = http.createServer(function (req, res) {
  const now = format_date(new Date(), 'dd/MM/yyyy-HH:mm:ss');

  const parsedUrl = parse(req.url, true);
  const {
    pathname,
    query,
  } = parsedUrl; // 从 parsedUrl 中提取 pathname 和 query(args)

  const filePath = path.join(
    __dirname,
    'public',
    parsedUrl.pathname === '/home' ? 'home.html' : parsedUrl.pathname
  );

  if (parsedUrl.pathname === '/') {
    res.writeHead(302, {
      'Location': '/home'
      //add other headers here...
    });
    res.end();
  }


  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        try {
          file.serve(req, res);
        }
        catch(e) {
          console.log(e);
          // 404
          fs.readFile(path.join(__dirname,'public','error.html'), (err, content) => {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end(content, 'utf8');
          });
        }
        
      }
      else {
        res.end(`ERROR: ${err.code}`);
      }
    }
    else {
      const contentType = mime_detect(filePath);
      res.writeHead(200, {'Content-Type': contentType});
      res.end(content, 'utf8');
    }
  })

  console.log(now, req.method, res.statusCode, req.url);
});

server.listen(port, () => {
  console.log(`Ready on http://localhost:${port}`)
});

// 在 node.js 使用 _ 可以获得上一个表达式的运算结果：
// 例如： x = 3 + 4; y = _; 
// y 就是 7
