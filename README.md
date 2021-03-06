# Rhino Logger

RhinoLogger is an opinionated, uncomplicated logging library for JavaScript.

You initialize the constructor with the log level you want to log at. Anything
at or below that level will be logged, with lower levels being more serious.

```javascript
import { RhinoLogger } from 'rhinologger`
const logger = new RhinoLogger(RhinoLogger.WARNING)
logger.log(RhinoLogger.INFO, 'myapp.testsource', {msg: 'I will get ignored'})
logger.log(RhinoLogger.WARNING, 'myapp.testsource', {msg: 'I will get logged'})
logger.setLevel(RhinoLogger.DEBUG)
logger.log(RhinoLogger.DEBUG, 'myapp.testsource', {msg: 'I will get logged'})
```

Alternatively, you can use the default logger which is set to the debug level
at the time of package initialization, but you can update it later.

```javascript
import { logger } from 'rhinologger'
logger.log(RhinoLogger.INFO, 'myapp.testsource', {msg: 'I will get logged'})
```

Log levels of `WARNING` and above will be logged via `console.log`, while log
levels below `WARNING` (`ERROR` and below) will be logged via `console.error`.

The output is designed for easy parsing by both machine and humans. It's a
minified JSON with the following fields:

* timestamp - a human readable timestamp when the log was generated
* unixtime - a Unix timestamp when the log was generated
* level - the log level
* source - the source of the log message
* payload - the log message
