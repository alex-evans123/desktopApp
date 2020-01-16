const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const getPort = require('get-port')
getPort()
    .then(port => {
        server.on('error', (err) => {
            console.log(`server error:\n${err.stack}`);
            server.close();
        });

        server.on('message', (msg, rinfo) => {
            console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
        });

        server.on('listening', () => {
            const address = server.address();
            console.log(`server listening ${address.address}:${address.port}`);
        });

        server.bind(port);

    })

// const getPort = require('get-port')
// getPort()
// .then(port=>{
//     console.log(port)
//     var http = require('http').createServer().listen(port, '0.0.0.0');
//     var io = require('socket.io').listen(http);
//     console.log(io)
//     io.on('connection',asd=>{
//         console.log(asd)
//     })
//     io.on('connect',asd=>{
//         console.log(asd)
//     })
//     io.on('asd',asd=>{
//         console.log(asd)
//     })
//     io.emit('asd',{data:'asd'})
// })

// // var io = require('socket.io')(server);
// // var p2p = require('socket.io-p2p-server').Server;
// // io.use(p2p);

// // const crypto = require('crypto')
// // const Swarm = require('discovery-swarm')
// // const defaults = require('dat-swarm-defaults')
// // const getPort = require('get-port')
// // const readline = require('readline')

// // /**
// //  * Here we will save our TCP peer connections
// //  * using the peer id as key: { peer_id: TCP_Connection }
// //  */
// // const peers = {}
// // // Counter for connections, used for identify connections
// // let connSeq = 0

// // // Peer Identity, a random hash for identify your peer
// // const myId = crypto.randomBytes(32)
// // console.log('Your identity: ' + myId.toString('hex'))

// // // reference to redline interface
// // let rl
// // /**
// //  * Function for safely call console.log with readline interface active
// //  */
// // function log () {
// //   if (rl) {
// //     rl.clearLine()    
// //     rl.close()
// //     rl = undefined
// //   }
// //   for (let i = 0, len = arguments.length; i < len; i++) {
// //     console.log(arguments[i])
// //   }
// //   askUser()
// // }

// // /*
// // * Function to get text input from user and send it to other peers
// // * Like a chat :)
// // */
// // const askUser = async () => {
// // //   rl = readline.createInterface({
// // //     input: process.stdin,
// // //     output: process.stdout
// // //   })

// //   rl.question('Send message: ', message => {
// //     // Broadcast to peers
// //     for (let id in peers) {
// //       peers[id].conn.write(message)
// //     }
// //     rl.close()
// //     rl = undefined
// //     askUser()
// //   });
// // }

// // /** 
// //  * Default DNS and DHT servers
// //  * This servers are used for peer discovery and establishing connection
// //  */
// // const config = defaults({
// //   // peer-id
// //   id: myId,
// // })

// // /**
// //  * discovery-swarm library establishes a TCP p2p connection and uses
// //  * discovery-channel library for peer discovery
// //  */
// // const sw = Swarm(config)


// // ;(async () => {

// //   // Choose a random unused port for listening TCP peer connections
// //   const port = await getPort()

// //   sw.listen(port)
// //   console.log('Listening to port: ' + port)

// //   /**
// //    * The channel we are connecting to.
// //    * Peers should discover other peers in this channel
// //    */
// //   sw.join('our-fun-channel')

// //   sw.on('connection', (conn, info) => {
// //     // Connection id
// //     const seq = connSeq

// //     const peerId = info.id.toString('hex')
// //     log(`Connected #${seq} to peer: ${peerId}`)

// //     // Keep alive TCP connection with peer
// //     if (info.initiator) {
// //       try {
// //         conn.setKeepAlive(true, 600)
// //       } catch (exception) {
// //         log('exception', exception)
// //       }
// //     }

// //     conn.on('data', data => {
// //       // Here we handle incomming messages
// //       log(
// //         'Received Message from peer ' + peerId,
// //         '----> ' + data.toString()
// //       )
// //     })

// //     conn.on('close', () => {
// //       // Here we handle peer disconnection
// //       log(`Connection ${seq} closed, peer id: ${peerId}`)
// //       // If the closing connection is the last connection with the peer, removes the peer
// //       if (peers[peerId].seq === seq) {
// //         delete peers[peerId]
// //       }
// //     })

// //     // Save the connection
// //     if (!peers[peerId]) {
// //       peers[peerId] = {}
// //     }
// //     peers[peerId].conn = conn
// //     peers[peerId].seq = seq
// //     connSeq++

// //   })

// //   // Read user message from command line
// //   askUser()  

// // })()












// // // const { exec, spawn, execSync } = require("child_process");
// // // const net = require('net')
// // // net.createServer(s=>{
// // //     console.log(s)
// // //     console.log(s.remoteAddress)
// // // })

// // // // let process = spawn('pwd',{})
// // // // process.on('message',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // process.stdout.on('data',something=>{
// // // //     console.log(something)
// // // // })
// // // // process.on('error',error=>{
// // // //     console.log(error)
// // // // })

// // // // let asd = exec('iwanto start',(err,stdout,stderr)=>{
// // // //     console.log('iwanto start ',err)
// // // //     console.log('iwanto start ',stdout)

// // // //     console.log('iwanto start ',stderr)
// // // // })
// // // // asd.stdin.on('data',qwe=>{
// // // //     qwe.stdin.write(2 + "/n")

// // // // })
// // // // asd.stdin.on('drain',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // asd.on('message',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // asd.stdin.on('close',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // asd.stdin.on('error',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // asd.stdin.on('finish',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // asd.stdin.on('pipe',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // asd.stdin.on('unpipe',asd=>{
// // // //     console.log(asd)
// // // // })
// // // // // console.log(__dirname)
// // // // // let asd = exec('iwanto start')
// // // // // asd.addListener('message',aswq=>{
// // // // //     console.log(asqw)
// // // // // })
// // // // // console.log(asd)
// // // // // var e = spawn('iwanto start')
// // // // // e.addListener('message',res=>{
// // // // //     console.log(res)
// // // // // })
// // // // // spawn('iwanto start', (err, stdout, stderr) => {
// // // // //     console.log('err ',err)
// // // // //     console.log('stdout ',stdout)
// // // // //     console.log('stderr ',stderr)
// // // // //     console.log('qwe')

// // // // //     exec('iwanto share '+__dirname,  (e, o, se) => {
// // // // //         console.log('asd')
// // // // //         console.log('e ',e)
// // // // //         console.log('o ',o)
// // // // //         console.log('se ',se)
// // // // //         exec('iwanto download to /Users/macbook/Downloads ',  (e, o, se) => {
// // // // //             exec('iwanto search muzammil', (e, o, se) => {
// // // // //                 console.log('zxc')

// // // // //                 console.log('e ',e)
// // // // //                 console.log('o ',o)
// // // // //                 console.log('se ',se)
// // // // //               })
// // // // //         })
// // // // //       })
// // // // //   })
