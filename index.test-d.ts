import * as fs from 'fs';
import {expectType} from 'tsd';
import stripBomBuffer = require('.');

expectType<Buffer>(stripBomBuffer(fs.readFileSync('unicorn.txt')));
