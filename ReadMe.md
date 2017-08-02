# Set-System-Time

Sets the system date and time through the use of platform dependent commands.

Only supports Windows and Linux as of now.

## Installation
```
npm i set-system-time -S
```

## API

### `DateTimeControl.setDateTime`
```js
// @dateTime - The date and time to set the system clock to
DateTimeControl.setDateTime(dateTime: Date);
```

## Code Example
```js
var DateTimeControl = require('set-system-time');

// Sets the date and time to the date specified
DateTimeControl.setDateTime(new Date('8/1/2017 13:14:12'));
```