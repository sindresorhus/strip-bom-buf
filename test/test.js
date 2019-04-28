import fs from 'fs';
import path from 'path';
import test from 'ava';
import stripBomBuffer from '..';

test('strips BOM from UTF-8 buffer', t => {
	const fixture = fs.readFileSync(path.join(__dirname, '/fixture-utf8'));
	t.true(stripBomBuffer(fixture).equals(Buffer.from('Unicorn\n')));
});

test('doesn\'t strip anything that looks like a UTF-8-encoded BOM from UTF16LE', t => {
	const fixture = fs.readFileSync(path.join(__dirname, 'fixture-utf16le'));
	t.is(stripBomBuffer(fixture), fixture);
});

test('doesn\'t strip anything that looks like a UTF-8-encoded BOM from UTF16BE', t => {
	const fixture = fs.readFileSync(path.join(__dirname, 'fixture-utf16be'));
	t.is(stripBomBuffer(fixture), fixture);
});
