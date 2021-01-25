declare function formatLogMessage(msg: string, obj?: null): string;
declare function debug(msg: string, obj?: null): void;
declare function info(msg: string, obj?: null): void;
declare function toJSON(value: Object | null, pretty?: boolean): string;
export { debug, info, toJSON, formatLogMessage };
