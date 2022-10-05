# Set-System-Clock

Sets the system date and time through the use of platform dependent commands.

Only supports Windows and Linux as of now.

## Installation

```
npm i set-system-clock -s
```

## API

### `DateTimeControl.setDateTime`

```js
// @dateTime - The date and time to set the system clock to
DateTimeControl.setDateTime(dateTime: Date);
```

## Code Example

```js
import DateTimeControl from "set-system-clock";
// or const DateTimeControl = require("set-system-clock");

// Sets the date and time to the date specified, returns a promise resolves once date/time is set
DateTimeControl.setDateTime(new Date("8/1/2017 13:14:12"));
```

### Options:

```js
// Use Sudo (Linux only)
DateTimeControl.setDateTime(new Date("8/1/2017 13:14:12"), { useSudo: true });
```
