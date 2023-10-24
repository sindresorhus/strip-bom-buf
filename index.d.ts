/**
Strip UTF-8 [byte order mark](http://en.wikipedia.org/wiki/Byte_order_mark#UTF-8) (BOM) from a `Uint8Array`.

@example
```
import fs from 'node:fs';
import stripBomBuffer from 'strip-bom-buf';

stripBomBuffer(fs.readFileSync('unicorn.txt'));
//=> 'unicorn'
```
*/
export default function stripBomBuffer(byteArray: Uint8Array): Uint8Array;
