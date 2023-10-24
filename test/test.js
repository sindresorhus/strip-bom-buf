import fs from 'node:fs';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import test from 'ava';
import {stringToUint8Array} from 'uint8array-extras';
import stripBomBuffer from '../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

test('strips BOM from UTF-8 buffer', t => {
	const fixture = new Uint8Array(fs.readFileSync(path.join(__dirname, 'fixture-utf8')));
	t.deepEqual(stripBomBuffer(fixture), stringToUint8Array('Unicorn\n'));
});

test('doesn\'t strip anything that looks like a UTF-8-encoded BOM from UTF16LE', t => {
	const fixture = new Uint8Array(fs.readFileSync(path.join(__dirname, 'fixture-utf16le')));
	t.deepEqual(stripBomBuffer(fixture), fixture);
});

test('doesn\'t strip anything that looks like a UTF-8-encoded BOM from UTF16BE', t => {
	const fixture = new Uint8Array(fs.readFileSync(path.join(__dirname, 'fixture-utf16be')));
	t.deepEqual(stripBomBuffer(fixture), fixture);
});
