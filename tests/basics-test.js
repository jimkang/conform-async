var test = require('tape');
var conformAsync = require('../index');

test('Async callin\'', function asyncTest(t) {
  t.plan(1);

	var resultsInOrder = [];

  function getResult(callback) {
  	var error = null;
  	var constantResult = 'This should be the second result.';
		conformAsync.callBackOnNextTick(callback, error, constantResult);
	}

	function callBackThatAddsResult(error, result) {
		resultsInOrder.push(result);
	}

	getResult(callBackThatAddsResult);
	resultsInOrder.push('This should be the first result.');

  setTimeout(function () {
  	t.deepEqual(
  		resultsInOrder, 
  		[
  			'This should be the first result.',
  			'This should be the second result.'
  		],
  		'Results were not added in the right order!'
  	)
  },
  100);
});
