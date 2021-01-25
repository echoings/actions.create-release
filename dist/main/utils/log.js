"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLogMessage = exports.toJSON = exports.info = exports.debug = void 0;
const core = __importStar(require("@actions/core"));
function formatLogMessage(msg, obj = null) {
    return obj ? `${msg}: ${toJSON(obj)}` : msg;
}
exports.formatLogMessage = formatLogMessage;
function debug(msg, obj = null) {
    core.debug(formatLogMessage(msg, obj));
}
exports.debug = debug;
function info(msg, obj = null) {
    core.info(formatLogMessage(msg, obj));
}
exports.info = info;
function toJSON(value, pretty = true) {
    return pretty ? JSON.stringify(value, null, 4) : JSON.stringify(value);
}
exports.toJSON = toJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0RBQXNDO0FBRXRDLFNBQVMsZ0JBQWdCLENBQUMsR0FBVyxFQUFFLEdBQUcsR0FBRyxJQUFJO0lBQy9DLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQzlDLENBQUM7QUFtQkMsNENBQWdCO0FBakJsQixTQUFTLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxHQUFHLElBQUk7SUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBWUMsc0JBQUs7QUFWUCxTQUFTLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxHQUFHLElBQUk7SUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBU0Msb0JBQUk7QUFQTixTQUFTLE1BQU0sQ0FBQyxLQUFvQixFQUFFLE1BQU0sR0FBRyxJQUFJO0lBQ2pELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQU1DLHdCQUFNIn0=