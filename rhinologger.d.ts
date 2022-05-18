export class RhinoLogger {
    static EMERGENCY: number;
    static ALERT: number;
    static CRITICAL: number;
    static ERROR: number;
    static WARNING: number;
    static NOTICE: number;
    static INFO: number;
    static DEBUG: number;
    /**
     * Creates a RhinoLogger that logs at or blow the given level.
     * @param { number } level between 0 and 7
     */
    constructor(level: number);
    level: number;
    /**
     * setLevel sets the log level at which logging should be done for this logger
     * @param { number } level update the log level to the given level
     */
    setLevel(level: number): void;
    /**
     * Logs a message at the given level. Levels at or over WARNING are written
     * to stdout via console.log; levels below WARNING are written to stderr via
     * console.error. A UTC timestamp is added to the message.
     * @param { number } level a number representing the log level
     * @param { string } source a unique identifier for the source of this log message (eg: myapp.storage.postgres)
     * @param { any } payload a JSON serializable object representing the log message
     */
    log(level: number, source: string, payload: any): void;
}
export const logger: RhinoLogger;
