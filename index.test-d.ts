import fs from 'node:fs';
import {expectType} from 'tsd';
import stripBomBuffer from './index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
expectType<Uint8Array>(stripBomBuffer(new Uint8Array(fs.readFileSync('unicorn.txt'))));
