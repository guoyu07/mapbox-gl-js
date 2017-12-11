// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */

const {StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');

/**
 * Implementation of the StructArray layout:
 * [0]: Float32[3]
 *
 * @private
 */
class StructArrayLayout_12_3f extends StructArray {
    uint8: Uint8Array;
    float32: Float32Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.float32 = new Float32Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number) {
        const i = this.length;
        this.resize(this.length + 1);
        const o4 = i * 3;
        this.float32[o4 + 0] = v0;
        this.float32[o4 + 1] = v1;
        this.float32[o4 + 2] = v2;
        return i;
    }

}

StructArrayLayout_12_3f.prototype.bytesPerElement = 12;

register('StructArrayLayout_12_3f', StructArrayLayout_12_3f);
module.exports = StructArrayLayout_12_3f;
