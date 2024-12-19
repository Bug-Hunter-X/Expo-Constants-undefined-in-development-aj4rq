The solution involves adding a check to verify if `Constants.manifest.extra` exists before accessing it:

```javascript
import * as Constants from 'expo-constants';

const extraData = Constants.manifest.extra ? Constants.manifest.extra : {};

console.log('Extra data from manifest:', extraData);
```
This ensures that if `Constants.manifest.extra` is not available (which will be the case in development), it defaults to an empty object, preventing errors.