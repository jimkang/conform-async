function makeCallbackCaller(cb, error, result) {
	return function callbackCall() {
		cb(error, result);
	};
}

function callBackOnNextTick(cb, error, result) {
	process.nextTick(makeCallbackCaller(cb, error, result));
}

module.exports = {
	callBackOnNextTick: callBackOnNextTick,
	makeCallbackCaller: makeCallbackCaller
};
