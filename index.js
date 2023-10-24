import isUtf8 from 'is-utf8';
import {assertUint8Array} from 'uint8array-extras';

export default function stripBomBuffer(byteArray) {
	assertUint8Array(byteArray);

	if (byteArray[0] === 0xEF && byteArray[1] === 0xBB && byteArray[2] === 0xBF && isUtf8(byteArray)) {
		return byteArray.slice(3);
	}

	return byteArray;
}
