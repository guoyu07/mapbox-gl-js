// This file is generated. Edit build/generate-struct-arrays.js, then run `node build/generate-struct-arrays.js`.
// @flow
/* eslint-disable camelcase */

const {StructArray} = require('../../util/struct_array');
const {register} = require('../../util/web_worker_transfer');

/**
 * Implementation of the StructArray layout:
 * [0]: Uint8[2]
 *
 * @private
 */
class StructArrayLayout_4_2ub extends StructArray {
    uint8: Uint8Array;

    _refreshViews() {
        this.uint8 = new Uint8Array(this.arrayBuffer);
    }

    emplaceBack(v0: number, v1: number) {
        const i = this.length;
        this.resize(this.length + 1);
        const o1 = i * 4;
        this.uint8[o1 + 0] = v0;
        this.uint8[o1 + 1] = v1;
        return i;
    }

}

StructArrayLayout_4_2ub.prototype.bytesPerElement = 4;

register('StructArrayLayout_4_2ub', StructArrayLayout_4_2ub);
module.exports = StructArrayLayout_4_2ub;
