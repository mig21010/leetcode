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

/*→ "minimum number of operations"
→ "minimum number of moves/steps"
→ "convert string A into string B"
→ "transform one string to another"
→ "given two strings/arrays/sequences"
→ "insert, delete, or replace"*/

/*
"Given two strings word1 and
word2, return the minimum
number of operations required
to convert word1 to word2.

You have the following three
operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character"*/

/*Edit Distance*/
function solution(s1, s2){

	let m = s1.length
	let n = s2.length

	//create the table
	//size (m+1) x (n+1)
	let dp = Array.from({ length: m+1}, () => new Array(n+1).fill(0));

	//fill the first row and column

	for(let i=0; i<= m; i++){

		dp[i][0] = i
	}

	for(let j=0; j<= n; j++){

		dp[0][j] = j
	}

	//fill the rest of the table

	for(let i = 1; i<= m; i++){
		for(let j = 1; j <= n; j++){
			if(s1[i-1] === s2[j-1]){
				dp[i][j] = dp[i-1][j-1]
			} else {
				dp[i][j] = 1 + Math.min(

					dp[i-1][j],
					dp[i][j-1],
					dp[i-1][j-1]
					)
			}
		}
	}

	return dp[m][n]
}

/*Longest Common Subsequence (LCS)*/

/*→ "longest common subsequence"
→ "longest sequence that appears
   in both"
→ "find the length of the
   longest subsequence common
   to both strings/arrays"
→ "characters that appear in
   the same relative order"
   (pero no necesariamente
   consecutivos)*/

/* "Subsequence" (subsecuencia)
≠
"Substring" (subcadena)

Subsequence:
→ Caracteres en el MISMO ORDEN
→ NO necesitan ser consecutivos
→ Ejemplo: "ace" es subsecuencia
   de "abcde"

Substring:
→ Caracteres CONSECUTIVOS
→ Sin saltos
→ Ejemplo: "bcd" es substring
   de "abcde", pero "ace" NO*/

/*"Given two strings text1 and
text2, return the length of
their longest common subsequence.
If there is no common
subsequence, return 0.

A subsequence of a string is
a new string generated from
the original string with some
characters (can be none)
deleted without changing the
relative order of the remaining
characters."*/

function solution(s1, s2){
	let m = s1.length
	let n = s2.length

	let dp = Array.from({ length: m+1}, () => new Array(n+1).fill(0))

	for(let i=1; i<=m; i++){

		for(let j=1; j<=n; j++){
			if(s1[i-1] === s2[j-1]){
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = Math.max(

					dp[i-1][j],
					dp[i][j-1]
					)
			}
		}
	}

	return dp[m][n]
}


/*Distinct Subsequences */

function solution(s,t){

	let m = s.length
	let n = t.length

	let dp = Array.from({length: m+1}, () => new Array(n+1).fill(0))

	for(let i=0; i<=m; i++){
		dp[i][0] = 1
	}

	for(let i=1; i<=m; i++){
		for(let j=1; j<=n; j++){
			if(s[i-1] === t[j-1]){
				dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
			} else {
				dp[i][j] = dp[i-j][j]
			}
		}
	}

	return dp[m][n]
}


/*Distinct Subsequences */

function solution(s,t){

	let m = s.length
	let n = t.length

	let dp = Array.from({length: m+1}, () => new Array(n+1).fill(0))

	for(let i=0; i<=m; i++){
		dp[i][0] = 1
	}

	for(let i=1; i<=m; i++){
		for(let j=1; j<=n; j++){
			if(s[i-1] === t[j-1]){
				dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
			} else {
				dp[i][j] = dp[i-j][j]
			}
		}
	}

	return dp[m][n]
}

//Greedy
/*c*/

function solution(people, cars) {
    people.sort((a, b) => b - a);  // descendente
    cars.sort((a, b) => b - a);    // descendente
    
    let count = 0;
    let carIndex = 0;
    
    for (let i = 0; i < people.length; i++) {
        if (carIndex < cars.length && 
            cars[carIndex] >= people[i]) {
            count++;
            carIndex++;
        }
    }
    
    return count;
}

//cookies
function solution(g, s) {
    g.sort((a, b) => a - b);  // ascendente
    s.sort((a, b) => a - b);  // ascendente
    
    let childIndex = 0;
    let cookieIndex = 0;
    
    while (childIndex < g.length && 
           cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) {
            childIndex++;
        }
        cookieIndex++;
    }
    
    return childIndex;
}

function solution(S,T){

	let n = S.length
	let digits = S.split('').map(Number)
	let totalMoves = 0

	for(let i=0; i<n-1; i++){

		let target = Number(T[i])
		let current = digits[i]

		let moves = (target - current + 10) % 10

		totalMoves += moves

		digits[i + 1] = (digits[i + 1] + moves) % 10
	}


	if(digits[n-1] !== Number(T[n-1])){
		return -1
	}

	return totalMoves
}


function solution(P,S){
	let totalPeople = P.reduce((sum, p) => sum + p, 0)
	S.sort((a,b) => b - a)

	let acum = 0
	let cars = 0

	for(let seats of S){
		acum += seats
		cars++
		if(acum >= totalPeople){
			break
		}
	}

	return cars
}


/*There is a road consisting of
N segments, numbered from 0
to N-1, represented by a
string S.

Segment S[K] of the road may
contain a pothole, denoted by
a single uppercase 'x'
character, or may be a good
segment without any potholes,
denoted by a single dot '.'.

For example, string ".x..x."
means that there are two
potholes in total in the road:
one is located in segment S[1]
and one in segment S[4]. All
other segments are good.

The road fixing machine can
patch over three consecutive
segments at once with asphalt
and repair all the potholes
located within each of these
segments. Good or already
repaired segments remain good
after patching them.

Your task is to compute the
minimum number of patches
required to repair all the
potholes in the road.

Write a function:

function solution(S);

that, given a string S
consisting of N segments,
returns the minimum number
of patches needed to repair
all the potholes.
*/
function solution(S){
	let n = S.length
	let patches = 0
	let i = 0

	while( i < n){
		if(S[i] === 'x'){
			patches++

			let start = Math.min(i, n - 3)

			i = start + 3
		} else {
			i++
		}
	}

	return patches
}


//palindrome

function solution(N, K) {
    let result = new Array(N);
    let numPairs = Math.floor(N / 2);
    
    for (let pairIndex = 0; pairIndex < numPairs; pairIndex++) {
        let letterIndex = pairIndex % K;
        let letter = String.fromCharCode(97 + letterIndex);
        // 97 = código ASCII de 'a'
        
        result[pairIndex] = letter;
        result[N - 1 - pairIndex] = letter;
        // posición espejo
    }
    
    if (N % 2 === 1) {
        // hay centro
        let centerLetter = String.fromCharCode(97 + (numPairs % K));
        result[Math.floor(N / 2)] = centerLetter;
    }
    
    return result.join('');
}

/*"Given an array A of N
integers, group adjacent
elements with the same value
together. Return the total
number of such groups."

O variantes como:

"You are given a string S.
A 'run' is a maximal sequence
of identical consecutive
characters. Return the number
of distinct runs in S."*/


function solution(A) {
    let groups = 1; // el primer
                     // elemento siempre
                     // inicia un grupo
    
    for (let i = 1; i < A.length; i++) {
        if (A[i] !== A[i-1]) {
            groups++;
        }
    }
    
    return groups;
}

/*"Given an array A of N
integers, find the length of
the longest run of consecutive
equal elements."

O variantes:

"You are given a binary string.
Find the length of the longest
substring consisting of the
same character."*/

function solution(A) {
    let maxRun = 1;
    let currentRun = 1;
    
    for (let i = 1; i < A.length; i++) {
        if (A[i] === A[i-1]) {
            currentRun++;
        } else {
            currentRun = 1; // reinicia
        }
        maxRun = Math.max(maxRun, currentRun);
    }
    
    return maxRun;
}

/*Una carretera de un solo
carril en dirección Este-Oeste

Tienes un array A de 0s y 1s:
→ 0 = auto viajando hacia el
   OESTE
→ 1 = auto viajando hacia el
   ESTE

Un "passing" (cruce/rebase)
ocurre cuando un auto que va
hacia el ESTE pasa por un
punto ANTES de que un auto
que va hacia el OESTE pase
por ese mismo punto

Más simple: necesitas contar
TODOS los pares (P, Q) donde
P < Q, A[P]=0 (oeste) y
A[Q]=1... espera, vamos a
verificar esto con cuidado*/


function solution(A) {
    let ones = 0;
    let passings = 0;
    
    for (let num of A) {
        if (num === 1) {
            ones++;
        } else {
            passings += ones;
            if (passings > 1000000000) {
                return -1;
            }
        }
    }
    
    return passings;
}