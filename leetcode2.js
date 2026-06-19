/*Max Counters 
You have N counters, all starting at 0
You receive a series of operations
in array A:

→ If A[K] is between 1 and N:
   increase counter K by 1

→ If A[K] = N + 1 (special operation):
   set ALL counters to the value
   of the current MAXIMUM counter

Return the final array of counters*/

function solution(N,A){
	let counters = new Array(N).fill(0)
	let maxCounter = 0
	let currentMax = 0 


	for(let value of A){
		if(value >= 1 && value <= N){

			let index = value -1
			if(counters[index] < currentMax){
				counters[index] = currentMax
			}

			counters[index]++

			if(counters[index] > maxCounter){
				maxCounter = counters[index]
			}
		} else {
			currentMax = maxCounter
		}
	}

	for(let i = 0; i < N; i++){
		if(counters[i] < currentMax){
			counters[i] = currentMax
		}
	}

	return counters
}

//Tape Equilibrium 

/*A non-empty array A consisting of
N integers is given. Array A
represents numbers on a tape.

Any integer P, such that 0 < P < N,
splits this tape into two non-empty
parts: A[0], A[1], ..., A[P − 1]
and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts
is the value of:
|(A[0] + A[1] + ... + A[P − 1]) −
 (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute
difference between the sum of the
first part and the sum of the
second part.

Write a function:

function solution(A);

that, given a non-empty array A of
N integers, returns the minimal
difference that can be achieved.

For example, consider array A such that:
A[0] = 3
A[1] = 1
A[2] = 2
A[3] = 4
A[4] = 3

We can split this tape in four ways:

P = 1: difference = |3 − 10| = 7
P = 2: difference = |4 − 9| = 5
P = 3: difference = |6 − 7| = 1
P = 4: difference = |10 − 3| = 7

The function should return 1, because
no other valid split results in a
smaller difference.

Write an efficient algorithm for
the following assumptions:

→ N is an integer within the
   range [2..100,000];
→ each element of array A is an
   integer within the range
   [−1,000..1,000].*/


function solution(A){
	let totalSum = A.reduce((sum, num) => sum + num, 0)
	let leftSum = 0
	let minDiff = Infinity

	for( let i = 0; i < A.length - 1; i++){

		leftSum += A[i]
		let rightSum = totalSum - leftSum
		let diff = Math.abs(leftSum - rightSum)
		minDiff = Math.min(minDiff, diff)
	}

	return minDiff
}

/*Frog River One 
A small frog wants to get to the
other side of a river. The frog is
initially located on one bank of
the river (position 0) and wants
to get to the opposite bank
(position X).

Leaves fall one at a time from a tree
on the river bank. Array A contains
the positions where leaves fall —
A[K] = position where a leaf falls
at time K.

The frog can jump to a position only
if a leaf is present there.

Find the EARLIEST time when the frog
can jump to the other side — meaning
ALL positions from 1 to X have had
at least one leaf fall on them.

Return -1 if it's impossible within
the given array.*/

function solution(X,A){

	let positions = new Set()

	for(let i=0; i<A.length; i++){

		if(A[i] <= X){

			positions.add(A[i])
		}

		if(positions.size === X){
			return i
		}
	}

	return -1
}

/*Permutation Check

A non-empty array A consisting of
N integers is given.

A permutation is a sequence containing
each element from 1 to N once, and
only once.

Given an array A, check whether array
A is a permutation.

Return 1 if true, 0 if false.*/

function solution(A){

	let N = A.length
	let set = new Set(A)

	if(set.size !== N){
		return 0
	}

	for( let num of set){
		if(num < 1 || num > N){
			return 0
		}
	}

	return 1
}

/*CyclicRotation

An array A consisting of N integers
is given. Rotation of the array means
that each element is shifted right
by one index, and the last element
moves to the first place.

Given array A and integer K, rotate
array A K times — meaning K right
shifts.

Return the rotated array.*/

function solution(A, K){
	let N = A.length
	if (N === 0 ) return A 

	let result = new Array(N)

	for(let i=0; i < N; i++){
		let newIndex = (i + K) % N 
		result[newIndex] = A[i]
	}

	return result


}

/*FrogJump 

A small frog wants to get from
position X to position Y. The
frog can jump over D units.

Find the MINIMUM number of jumps
needed to get from X to Y.*/

function solution(X, Y, D){
	let distance = Y - X 
	return Math.ceil(distance / D)
}


/*Distinct
Given an array A consisting of N
integers, return the number of
DISTINCT (unique) values in the array.*/

function solution(A){
	let set = new Set(A)
	return set.size
}

/*Triangle 
An array A consisting of N integers
is given. A triplet (P, Q, R) is
"triangular" if:

A[P] + A[Q] > A[R]
A[Q] + A[R] > A[P]
A[R] + A[P] > A[Q]

Determine whether array A contains
a triangular triplet.
Return 1 if yes, 0 if no.*/

function solution(A){
	A.sort((a,b) => a-b)

	for(let i =0; i < A.length-2; i++){
		if(A[i] + A[i + 1] > A[i + 2]){
			return 1
		}
	}

	return 0
}

/* MaxProductOfThree
 Given an array A of N integers,
find the MAXIMUM product that can
be obtained by multiplying any
3 elements from the array.*/

function solution(A){
	A.sort((a,b) => a - b)
	let n = A.length

	let option1 = A[n-1] * A[n-2] * A[n-3]
	let option2 = A[0] * A[1] * A[n-1]

	return Math.max(option1, option2)
}


/*PermMissingElem
An array A consisting of N different
integers is given. The array contains
integers in the range [1..(N+1)] —
meaning ONE element is missing to
make it a complete permutation.

Find that missing element.*/


function solution(A){
	let N = A.length
	let expectedSum = (N + 1) * (N + 2) / 2 
	let actualSum = A.reduce((sum, num) => sum + num, 0)

	return expectedSum - actualSum
}
