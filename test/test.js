import fs from 'fs';
import test from 'ava';
import m from '../';

test('strips BOM from UTF-8 buffer', t => {
	const f = fs.readFileSync('fixture-utf8');
	t.true(m(f).equals(new Buffer('Unicorn\n')));
});

test('doesn\'t strip anything that looks like a UTF-8-encoded BOM from UTF16LE', t => {
	const f = fs.readFileSync('fixture-utf16le');
	t.is(m(f), f);
});

test('doesn\'t strip anything that looks like a UTF-8-encoded BOM from UTF16BE', t => {
	const f = fs.readFileSync('fixture-utf16be');
	t.is(m(f), f);
});
