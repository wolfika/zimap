import test from 'ava';
import isArray from 'is-array';
import fn from './';

test('counts indices', t => {
	return fn('./test/style.css')
		.then(stats => {
			t.is(stats.count, 4);
		});
});

test('counts levels', t => {
	return fn('./test/style.css')
		.then(stats => {
			t.truthy(stats.levels);
			t.true(isArray(stats.levels));
			t.true(stats.levels.length === 4);
			t.true(Number.isInteger(stats.levels[0]));
		});
});
