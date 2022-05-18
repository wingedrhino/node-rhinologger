export class RhinoLogger {
  static EMERGENCY = 0
  static ALERT = 1
  static CRITICAL = 2
  static ERROR = 3
  static WARNING = 4
  static NOTICE = 5
  static INFO = 6
  static DEBUG = 7

  /**
   * Creates a RhinoLogger that logs at or blow the given level.
   * @param { number } level between 0 and 7
   */
  constructor (level) {
    this.level = level
  }

  /**
   * setLevel sets the log level at which logging should be done for this logger
   * @param { number } level update the log level to the given level
   */
  setLevel (level) {
    this.level = level
  }

  /**
   * Logs a message at the given level. Levels at or over WARNING are written
   * to stdout via console.log; levels below WARNING are written to stderr via
   * console.error. A UTC timestamp is added to the message.
   * @param { number } level a number representing the log level
   * @param { string } source a unique identifier for the source of this log message (eg: myapp.storage.postgres)
   * @param { any } payload a JSON serializable object representing the log message
   */
  log (level, source, payload) {
    if (level > this.level) {
      return
    }
    const currentTime = new Date()
    const timestamp = currentTime.toISOString()
    const unixtime = currentTime.getTime()
    const resJSON = { timestamp, unixtime, level, source, payload }
    const res = JSON.stringify(resJSON)
    if (level >= 4) {
      console.log(res)
    } else {
      console.error(res)
    }
  }
}

export const logger = new RhinoLogger(RhinoLogger.DEBUG)
