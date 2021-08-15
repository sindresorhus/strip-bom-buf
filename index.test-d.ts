import fs from 'node:fs';
import Buffer from 'node:buffer';
import {expectType} from 'tsd';
import stripBomBuffer from './index.js';

// eslint-disable-next-line  @typescript-eslint/no-unsafe-member-access
expectType<Buffer>(stripBomBuffer(fs.readFileSync('unicorn.txt')));
