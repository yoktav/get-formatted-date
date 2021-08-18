# Get Formatted Date

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

Get formatted date with zero dependencies!

## Which Functions Included ?
- `getDate()`
- `getYesterday()`
- `getTomorrow()`

## Example Usage

### Basic Usage
```javascript
import { getDate, getYesterday, getTomorrow } from 'get-formatted-date';

const myDate = new Date() // Let's say new Date() is 05.01.2021 - 11:00

getDate({ date: myDate }); // Returns 05.08.2021
getYesterday({ date: myDate }); // Returns 04.08.2021
getTomorrow({ date: myDate }); // Returns 06.08.2021
```

### Detailed Usage
```javascript
import { getDate, getYesterday, getTomorrow } from 'get-formatted-date';

const myDate = new Date() // Let's say new Date() is 05.01.2021 - 11:00

getDate({ date: myDate, seperator: '/', hasHM: true, timeSeperator: '-', HMSeperator: '.' }); // Returns 05/01/2021 - 11.00
getYesterday({ date: myDate, seperator: '/', hasHM: true, timeSeperator: '-', HMSeperator: '.' }); // Returns 04/01/2021 - 11.00
getTomorrow({ date: myDate, seperator: '/', hasHM: true, timeSeperator: '-', HMSeperator: '.' }); // Returns 06/01/2021 - 11.00
```

## Options
| Params | Type | Description |
| --- | --- | --- |
| `date` | Time value \| Timestamp \| Timestamp String |  Default: new Date() <br /> For more info see [this MDN document](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) |
| `seperator` | String | Default: `'.'` <br /> Seperator between dates |
| `hasHM` | Boolean | Default: false <br /> Whether include Hour and Minute |
| `timeSeperator` | String | Default: `'-'` <br /> Seperator for date and time |
| `HMSeperator` | String | Default: `':'` <br /> Seperator for hour and minute |


## Todo
- [x] Create the code!
- [X] Make a NPM Package
- [ ] Configure for cdn usage
- [ ] Add DDMMYYYY etc. support
- [ ] Add webpack | Gulp | Rollup


## Contributing
If you've ever wanted to contribute to open source, and a great cause, now is your chance!
