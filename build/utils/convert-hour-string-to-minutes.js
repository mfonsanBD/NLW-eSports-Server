"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinutes = void 0;
function convertHourStringToMinutes(hourString) {
    const [hours, minutes] = hourString.split(':').map(Number);
    const minuteAmount = (hours * 60) + minutes;
    return minuteAmount;
}
exports.convertHourStringToMinutes = convertHourStringToMinutes;
