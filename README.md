#BITS and BYTES#
A simple and light weight framework to decode binary or stream messages.
> npm install bitsandbytes

-----------------------


> **Note:**
>  It will supports more complex decoding formats in a simple way. Detailed documentation will be provided soon. 




Big-Endian
------------
```
var BitsAndBytes = require('bitsandbytes');
var decoder = new BitsAndBytes();
var msg = '4564654654657894916574879836';
var bufferStreams = new Buffer(msg,'hex');
console.log(decoder.decodeBE(bufferStreams,{type : 'int8', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'uint8', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'int16', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'uint16', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'int32', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'uint32', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'float', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'double', start:0 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'ascii', start:0, length : 4 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'utf8', start:0, length : 4 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'hex', start:0, length : 4 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'size', length : 4 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'byte',start :0, length : 4 }));
console.log(decoder.decodeBE(bufferStreams,{type : 'bit',start :0, length : 1, bitStart : 0, bitLength:3, signed:false }));

```



Little-Endian
----------------
```
var BitsAndBytes = require('bitsandbytes');
var decoder = new BitsAndBytes();
var msg = '4564654654657894916574879836';
var bufferStreams = new Buffer(msg,'hex');
console.log(decoder.decodeLE(bufferStreams,{type : 'int8', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'uint8', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'int16', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'uint16', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'int32', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'uint32', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'float', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'double', start:0 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'ascii', start:0, length : 4 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'utf8', start:0, length : 4 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'hex', start:0, length : 4 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'size', length : 4 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'byte',start :0, length : 4 }));
console.log(decoder.decodeLE(bufferStreams,{type : 'bit',start :0, length : 1, bitStart : 0, bitLength:3, signed:false }));

```

