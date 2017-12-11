// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */

const {StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');

/**
 * Implementation of the StructArray layout:
 * [0]: Int16[6]
 *
 * @private
 */
class StructArrayLayout_16_6i extends StructArray {
    uint8: Uint8Array;
    int16: Int16Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
        this.int16 = new Int16Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number, v2: number, v3: number, v4: number, v5: number) {
        const i = this.length;
        this.resize(this.length + 1);
        const o2 = i * 8;
        this.int16[o2 + 0] = v0;
        this.int16[o2 + 1] = v1;
        this.int16[o2 + 2] = v2;
        this.int16[o2 + 3] = v3;
        this.int16[o2 + 4] = v4;
        this.int16[o2 + 5] = v5;
        return i;
    }

}

StructArrayLayout_16_6i.prototype.bytesPerElement = 16;

register('StructArrayLayout_16_6i', StructArrayLayout_16_6i);
module.exports = StructArrayLayout_16_6i;
