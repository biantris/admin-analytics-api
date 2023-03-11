"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unbase64 = exports.base64 = void 0;
function base64(i) {
    return Buffer.from(i, 'utf8').toString('base64');
}
exports.base64 = base64;
function unbase64(i) {
    return Buffer.from(i, 'base64').toString('utf8');
}
exports.unbase64 = unbase64;
