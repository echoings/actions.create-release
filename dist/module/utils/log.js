import * as core from '@actions/core';
function formatLogMessage(msg, obj = null) {
    return obj ? `${msg}: ${toJSON(obj)}` : msg;
}
function debug(msg, obj = null) {
    core.debug(formatLogMessage(msg, obj));
}
function info(msg, obj = null) {
    core.info(formatLogMessage(msg, obj));
}
function toJSON(value, pretty = true) {
    return pretty ? JSON.stringify(value, null, 4) : JSON.stringify(value);
}
export { debug, info, toJSON, formatLogMessage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2xvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUV0QyxTQUFTLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxHQUFHLEdBQUcsSUFBSTtJQUMvQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM5QyxDQUFDO0FBRUQsU0FBUyxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsR0FBRyxJQUFJO0lBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLEdBQUcsSUFBSTtJQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFFRCxTQUFTLE1BQU0sQ0FBQyxLQUFvQixFQUFFLE1BQU0sR0FBRyxJQUFJO0lBQ2pELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUdELE9BQU8sRUFDTCxLQUFLLEVBQ0wsSUFBSSxFQUNKLE1BQU0sRUFDTixnQkFBZ0IsRUFDakIsQ0FBQSJ9