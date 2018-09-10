const nodecast = require('nodecast');

const stream = nodecast.find();

stream.on('device', device => {
  console.log({ device });
});
