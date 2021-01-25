
import * as core from '@actions/core';

function formatLogMessage(msg: string, obj = null) {
  return obj ? `${msg}: ${toJSON(obj)}` : msg;
}

function debug(msg: string, obj = null) {
  core.debug(formatLogMessage(msg, obj));
}

function info(msg: string, obj = null) {
  core.info(formatLogMessage(msg, obj));
}

function toJSON(value: Object | null, pretty = true) {
  return pretty ? JSON.stringify(value, null, 4) : JSON.stringify(value);
}


export {
  debug,
  info,
  toJSON,
  formatLogMessage
}