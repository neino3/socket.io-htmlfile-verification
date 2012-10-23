verification code for socket.io htmlfile transport problem
===============================

I want to connect to socket.io server by using htmlfile transport from a simple web page which served from other server (simple http server).
When I open a web page on IE8, a connection(htmlfile) is not established.

here is console logs

       info  - socket.io started
    socket.io server listening on 7777....
       debug - served static content /socket.io.js
       debug - client authorized
       info  - handshake authorized H5138B0mQDjkKX6_lRG8

This repo includes verification code. There is two servers. one is socket.io server and another is a contents server which serves index.html. I specify transport as 'htmlfile' in index.html. If you open http://localhost:8888 in IE8, browser tried to connect to socket.io server. 
Handshake is done successfully, but after that client does not start transport negotiation of 'htmlfile'.
You can see this problem on following step:

1. run a contents server

  node contents-server.js

2. run socket.io server

  node socket.io-server.js

3. open http://localhost:8888/ on IE8
   you see console logs like above, and connecion is not established.

