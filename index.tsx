import {useCallback, useEffect} from 'react';

type F = (...args: unknown[]) => void;

function MyComp() {
	const foo = useCallback(() => {}, []);

	// OK
	useEffect(() => {
		foo();
	}, [foo]);

	// WARNS?
	useEffect((() => {
		foo();
	}) as F, [foo]);

	return 'Hello, world'
}