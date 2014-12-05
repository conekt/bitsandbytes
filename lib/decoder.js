
(function() {

    var FieldDecoder;
    var bitBuffer = require('bit-buffer');
    var BitView = bitBuffer.BitView;

    FieldDecoder = (function() {

        function FieldDecoder() {}

        FieldDecoder.prototype.decodeFieldBE = function(buffer, fieldSpec) {
            var i;
            switch (fieldSpec.type) {
                case 'int8':
                    return buffer.readInt8(fieldSpec.start);
                case 'uint8':
                    return buffer.readUInt8(fieldSpec.start);
                case 'int16':
                    return buffer.readInt16BE(fieldSpec.start);
                case 'uint16':
                    return buffer.readUInt16BE(fieldSpec.start);
                case 'int32':
                    return buffer.readInt32BE(fieldSpec.start);
                case 'uint32':
                    return buffer.readUInt32BE(fieldSpec.start);
                case 'float':
                    return buffer.readFloatBE(fieldSpec.start);
                case 'double':
                    return buffer.readDoubleBE(fieldSpec.start);
                case 'ascii':
                    return buffer.toString('ascii', fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'utf8':
                    return buffer.toString('utf8', fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'hex':
                    return buffer.toString('hex', fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'size':
                    return buffer ? buffer.length : 0;
                case 'byte':
                    return buffer.slice(fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'bit':
                    var view = new BitView(new Buffer(buffer.slice(fieldSpec.start, fieldSpec.start + fieldSpec.length).toJSON().reverse()));
                    return view.getBits(fieldSpec.bitStart, fieldSpec.bitLength, fieldSpec.signed);

            }
        };

        FieldDecoder.prototype.decodeFieldLE = function(buffer, fieldSpec) {
            var i;
            switch (fieldSpec.type) {
                case 'int8':
                    return buffer.readInt8(fieldSpec.start);
                case 'uint8':
                    return buffer.readUInt8(fieldSpec.start);
                case 'int16':
                    return buffer.readInt16LE(fieldSpec.start);
                case 'uint16':
                    return buffer.readUInt16LE(fieldSpec.start);
                case 'int32':
                    return buffer.readInt32LE(fieldSpec.start);
                case 'uint32':
                    return buffer.readUInt32LE(fieldSpec.start);
                case 'float':
                    return buffer.readFloatLE(fieldSpec.start);
                case 'double':
                    return buffer.readDoubleLE(fieldSpec.start);
                case 'ascii':
                    return buffer.toString('ascii', fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'utf8':
                    return buffer.toString('utf8', fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'hex':
                    return buffer.toString('hex', fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'size':
                    return buffer ? buffer.length : 0;
                case 'byte':
                    return buffer.slice(fieldSpec.start, fieldSpec.start + fieldSpec.length);
                case 'bit':
                    var view = new BitView(buffer.slice(fieldSpec.start, fieldSpec.start + fieldSpec.length));
                    return view.getBits(fieldSpec.bitStart, fieldSpec.bitLength, fieldSpec.signed);
            }
        };

        return FieldDecoder;

    })();

    module.exports = FieldDecoder;

}).call(this);
