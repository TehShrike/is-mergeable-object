# is-mergeable-object

<!--js
const isMergeableObject = require('./')
-->

The biggest difficulty that recursive merge libraries run into is figuring out which properties should be recursively merge.

This module contains the algorithm used by [`deepmerge`](https://github.com/KyleAMathews/deepmerge/).

```js
isMergeableObject(null) // => false

isMergeableObject({}) // => true

isMergeableObject(new RegExp('wat')) // => false

isMergeableObject(undefined) // => false

isMergeableObject(new Object()) // => true

isMergeableObject(new Date()) // => false
```
