//let code exercices

//brute force O(n2) Time to Buy and Sell Stock

/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/

function maxProfit(prices){

	let maxP = 0 


	for(let i = 0; i< prices.length; i++){

		for(let j = i; j < prices.length; j++ ){

			const profit = prices[j] - prices[i]

			maxP = Math.max(maxP, profit)
		}
	}

	return maxP
}

//single pass O(n)
//Rastrea el mínimo precio visto y la máxima ganancia:



function maxProfit(prices){

	let minPrice = Infinity
	let maxP = 0

	for(const price of prices){

		if(price < minPrice){
			minPrice = price
		} else {
			maxP = Math.max(maxP, price - minPrice)
		}
	}

	return maxP
}


//Two sum given array of intgers nums and target retrurn the indices of two numbers

/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.*/

function twoSum(nums, target){

	const map = new Map()

	for(let i =0; i<nums.length; i++){

		const complement = target - nums[i]

		if(map.has(complement)){
			return [map.get(complement), i]
		}

		map.set(nums[i], i)
	}




}


//Contains Duplicate
/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/
function containsDuplicate(nums){

	const seen = new Set()

	for(const num of nums){
		if(seen.has(num)){

			return true
		}

		seen.add(num)
	}

	return false
}


//product of arrays except itself

/*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.*/

function productArrays(nums){

	const result = new Array(nums.length).fill(1)

	let left = 1 

	for(let i = 0; i < nums.length; i++){

		result[i] = left
		left *= nums[i]
	}

	let right = 1

	for(let i = nums.length-1; i>=0; i--){

		result[i] *= right
		right *= nums[i]

	}


	return result


}

//maximum Subarray give an  integer array nums, find the subarray with the largets sum an return taht sum
function maximumSubarray(nums){

	let current= 0 
	let maximum = -Infinity

	for(const num of nums){
		current = Math.max(num, current + num)
		maximum = Math.max(maximum, current)
	}

	return maximum

}

//Maximum Product Subarray Given an integer array nums, find the subarray with the largest product and return that product.

function maxProduct(nums){

	let maxSoFar = nums[0]
	let currMax = nums[0]
	let curMin = nums[0]

	for(let i = 1; i<nums.length; i++){

		const temp = currMax

		currMax = Math.max(nums[i], currMax * nums[i], currMin * nums[i])
		currMin = Math.min(nums[i], currMin * nums[i], temp* nums[i])

		maxSoFar = Math.max(maxSoFar, currMax)

	}

	return maxSoFar
}

//Find Minimum in Rotated Sorted Array Given a rotated sorted array, find the minimum element.

function findMin(nums){

	let left= 0
	let right = nums.length -1

	while(left < right){

		const mid = Math.floor((left = right)/2)

		if(nums[mid] > nums[right]){

			left = mid + 1
		} else {
			right = mid
		}
	}

	return nums[left]
}


//Search in Rotated Sorted Array Given a rotated sorted array and a target, return its index. If not found return -1.

function search(nums, target){

	let left = 0
	let right = nums.length - 1

	while(left <= right){

		const mid = Math.floor((left+right)/2)

		if(nums[mid] === target) return mid

		if(nums[left] <= nums[mid]){

			if(nums[left] <= target && target < nums[mid]){

				right = mid-1
			} else{
				left = mid +1
			}

		} else {

			if(nums[mid] < target && target <= nums[right]){
				left = mid +1
			} else {
				right = mid-1
			}
		}
	}


	return -1
}


//3Sum Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] such that they sum to zero. No duplicate triplets.

function  threeSum(nums) {

	nums.sort((a,b) => a - b)

	const result =[]

	for(let i =0; i<nums.length; i++){

		if(i>0 && nums[i] === nums[i-1]) continue

		let left = i + 1
		let right = nums.length -1

		while(left < right){
			const sum = nums[i] + nums[left] + nums[right]

			if(sum === 0){
				result.push([nums[i], nums[left], nums[right]])

				//avoid duplicates
				while(left < right && nums[left] === nums[left + 1]) left++
				while(left < right && nums[right] === nums[right-1]) right--

				left ++
				right--
			} else if( sum < 0){
				left++
			} else {
				right--
			}
		}
	}

	return result

}

//Container With Most Water Given an array height where height[i] is the height of a vertical line, find two lines that form a container with the most water.

function maxArea(height){

	let left = 0
	let right = height.length-1
	let max = 0

	while(left< right){
		const area = (right -left) * Math.min(height[left], height[right])
		max = Math.max(max, area)

		if(height[left] < height[right]){

			left++
		} else {
			right--
		}

	}

	return max

}

//Sum of Two Integers Calculate the sum of two integers a and b without using + or -.

function getSum(a,b){

	while( b !== 0){
		const carry = (a & b) << 1
		a = a ^ b 
		b = carry
	}

	return a
}

/*--------------------------------------------------------------------------OA*/


//Throttling Gateway

function throottlinGateway(requestTime){

	let dropped = 0

	for(let i =0; i< requestTime.length; i ++){

		const current = requestTime[i]
		const accepted = requestTime.slice(0,i)

		const perSecond = accepted.filter(t => t === current).length
		const per10Seconds = accepted.filter(t => t > current -10).length
		const perMin = accepted.filter(t => t > current -60).length

		if(perSecond >= 3 || per10Seconds >= 20 || perMin >= 60){
			dropped ++
		}
	}

	return dropped
}


//Customer Reviews Given a repository of keywords and a customerQuery, return keyword suggestions after each character typed (starting from 2 characters). Return max 3 suggestions in alphabetical order that start with the typed prefix.

function customerReviews(customerQuery, repository){

	repository.sort((a,b) => 
		a.toLowerCase().localeCompare(b.toLowerCase())
	)

	const result= []

	for(let i =2; i<=customerQuery.length; i++){

		const prefix = customerQuery.slice(0,i).toLowerCase()
		const suggestions = repository
			.filter(word=> word.toLowerCase().startsWith(prefix))
			.slice(0,3)
			.map(word => word.toLowerCase())


		result.push(suggestions)


	}


	return result



}

//Binary Search


function binarySearch(nums, target){

	let left = 0
	let right = nums.length-1

	while(left<= right) {

		const mid = Math.floor((left+right) /2)

		if(nums[mid] === target){
			return mid
		} else if(nums[mid] < target){
			left = mid + 1
		} else {
			right = mid -1 
		} 
	}

	return -1
}


// Min Time Sort Binary String
function minTime(key){

	const SWAP = 1000000000000n
	const DELETE = 1000000000001n

	let totalCost = 0
	let zerosAfter = 0

	for (const c of key){

		if(c==='0') zerosAfter++
	}

	for(const char of key){
		if(char === '0'){
			zerosAfter--
		}else{
			if(zerosAfter === 1){
				totalCost += SWAP
			} else if(zerosAfter > 1){
				totalCost += DELETE
			}
		}
	}

	


	return totalCost
}


//Connect Ropes

function connectRopes(ropes){

	ropes.sort((a,b) => a-b)

	let totalCost = 0

	while(ropes.length > 1){

		const first = ropes.shift()
		const second = ropes.shift()


		const  combined = first + second 

		totalCost += combined
		ropes.push(combined)

		ropes.sort((a,b) => a-b)


	}

	return totalCost


}

//--------------------------------------------------------------------------------------------------Tree

// Maximum Depth of Binary TreeGiven the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


function maximumDepth(root){

	if(root === null) return 0

	const left = maximumDepth(root.left)
	const right = maximumDepth(root.right)

	return Math.max(left,right) + 1


}

//Same Tree - Given the roots of two binary trees p and q, return true if they are the same tree. Two trees are the same if they have the same structure and node values.

function isSameTree(p, q){

	if(p === null && q === null ) return true

	if(p === null || q === null)return false


	return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

}

//Invert Buinary Tree Given the root of a binary tree, invert the tree and return its root

function invertBinaryTree(root){

	if (root === null) return null

	const temp = root.left

	root.left = root.right
	root.right = temp

	invertBinaryTree(root.left)
	invertBinaryTree(root.right)

	return root


}

// Binary Tree Maximum oath sum Given the root of a binary tree, return the maximum path sum. A path is a sequence of nodes where each pair of adjacent nodes has an edge. The path does not need to pass through the root.

function maxPathSum(root){

	let maxSum= -Infinity

	function dfs(node){

		if (node === null) return 0

		const left = Math.max(0, dfs(node.left))
		const right = Math.max(0, dfs(node.right))

		maxSum = Math.max(maxSum, left +node.val + right)

		return node.val + Math.max(left, right)
	}

	dfs(root)

	return maxSum
}



// Binary tree level order trasversal Given the root of a binary tree, return the values level by level from left to right.

function treeLevelOrderTraversal(root){

	if(root === null) return []

		const result = []
		const queue = [root]

		while(queue.length > 0){

			const level = []
			const size = queue.length

			for (let i = 0; i < size; i++){

				const node = queue.shift()
				level.push(node.val)

				if(node.left) queue.push(node.left)
				if(node.right) queue.push(node.right)
			}

			result.push(level)
		}

		return result

	
}


//Serialize and Deserialize Binary Tree
/*Design an algorithm to serialize and deserialize a binary tree.

Serialize — convierte el árbol a un string
Deserialize — convierte el string de vuelta al árbol*/


const serialize = function(root){

	const result = []

	function dfs(node){

		if(node === null){
			result.push('null')
			return
		}

		result.push(node.val)
		dfs(node.left)
		dfs(node.right)
	}

	dfs(root)
	return result.join(',')
}

const deserialize = function(data){

	const nodes = data.split(',')
	let index = 0

	function dfs(){

		if(nodes[index] === 'null'){

			index++
			return null
		}


		const node = new TreeNode(parseInt(nodes[index]))

		index++
		node.left=dfs()
		node.right= dfs()
		return node
	}

	return dfs()
}

//Subtree of another tree
//Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot.


function isSameTree(p, q) {
    if (p === null && q === null) return true
    if (p === null || q === null) return false
    return p.val === q.val &&
           isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right)
}

function isSubtree(root, subRoot){

	if(root===null) return false
	if(isSameTree(root, subRoot)) return true

	return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}


//Construct Binary Tree from Preorder and Inorder Traversal
//Given two integer arrays preorder and inorder, construct and return the binary tree.

function buildTree(preOrder, inOrder){

	if(preOrder.length === 0) return null

	const rootVal = preOrder[0]
	const root = new TreeNode(rootVal)

	const mid = inOrder.indexOf(rootVal)

	root.left = buildTree(
		preOrder.slice(1, mid + 1),
		inOrder.slice(0, mid)

	)


	root.right = buildTree(

		preOrder.slice(mid + 1),
		inOrder.slice(mid + 1)
	)


	return root


}

//Validate Binary Search Tree
//Given the root of a binary tree, determine if it is a valid BST.
/*A valid BST:

Left subtree nodes are less than the root
Right subtree nodes are greater than the root
Both subtrees are also valid BSTs*/


function isValidBST(root){
	
	function validate(node, min, max){
		if(node === null) return true

		if(node.val <= min || node.val >= max) return false


		return validate(node.left, min, node.val) &&  validate(node.right, node.val, max)

	}

	return validate(root, -Infinity, Infinity)



}

//Kth Smallest Element in a BST
//Given the root of a BST and an integer k, return the kth smallest value.

function kthSmallest(root, k){

	const values = []

	function inorder(node){
		if(node === null) return
		inorder(node.left)
		values.push(node.val)
		inorder(node.right)
	}

	inorder(root)

	return values[k-1]
}
//Minimun swaps

function minSwaps(arr){

	let swapsZerosLeft = 0
	let swapsOnesLeft = 0
	let ones = 0
	let zeros = 0

	for (const num of arr){

		if(num ===1){
			ones++
			swapsOnesLeft += zeros
		} else {
			zeros++
			swapsZerosLeft += ones
		}
	}

	return Math.min(swapsZerosLeft, swapsOnesLeft)
}

//Implement Trie (Prefix Tree)

class TrieNode{

	constructor(){
		this.children = {}
		this.isEnd = false
	}

}

class Trie{

	constructor(){
		this.root = new TrieNode()
	}


	insert(word){

		let node = this.root

		for(const char of word){
			if(!node.children[char]){
				node.children[char] = new TrieNode()
			}

			node = node.children[char]
		}

		node.isEnd = true
	}

	search(word){
		let node = this.root
		for (const char of word){
			if(!node.children[char]) return false
				node = node.children[char]
		}

		return node.isEnd
	}

	startsWith(prefix){
		let node = this.root
		for (const char of prefix){
			if(!node.children[char]) return false
			node = node.children[char]
		}

		return true
	}
}


//Add and Search Word

class WordDictionary{

	constructor() {
		this.root = new TrieNode()
	}

	addWord(word){
		let node = this.root

		for(const char of word){
			if(!node.children[char]) = new TrieNode()
			node = node.children[char]
		}

		node.isEnd = true
	}


	search(word){
		return this.dfs(word, 0, this.root)
	}

	dfs(word, index, node){

		if(index === word.length) return node.isEnd

		const char = word[index]

		if(char === '.'){
			for(const child of Object.values(node.children)){
				if(this.dfs(word, index + 1, child)) return true
			}

			return false
		} else {
			if(!node.children[char]) return false
			return this.dfs(word, index + 1, node.children[char])
		}
	}
}


//Climbing Stairs

function climbStairs(n){

	if( n <= 2) return n

	let prev2 = 1
	let prev1 = 2

	for( let i = 3; i <= n; i++){
		const current = prev1 + prev2
		prev2 = prev1
		prev1 = current

	}

	return prev1


}


//House Robber

//You are a robber planning to rob houses. You cannot rob two adjacent houses. Given an array nums where nums[i] is the amount of money in house i, return the maximum amount you can rob.


function roberHouse(nums){

	let prev = 0
	let current = 0

	for( let i = 0; i< nums.lenght; i++){
		const  temp = current
		current = Math.max(current, prev + nums[i])	
		prev = temp
	}

	return current
}

function numIslands(grid) {

	let islands = 0
	for(let r = 0; r < grid.length; r++){

		for(let c = 0; c< grid[0].length; c++){
			if(grid[r][c] === '1'){
				islands++
				dfs(grid, r, c)
			}
		}
	}

	return islands
}

function dfs(grid, r, c){

	if(r < 0 || r >= grid.length) return
	if(c< 0 || c >= grid[0].length) return
	if(grid[r][c]  === '0') return


	grid[r][c] = '0'

	dfs(grid, r - 1, c) //up
	dfs(grid, r + 1, c) //down
	dfs(grid, r, c - 1) //left
	dfs(grid, r, c + 1)// right
	
}


//Longest Substring Without Repeating Characters
//Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s){
	const set = new Set()
	let left = 0
	let max = 0

	for( let right = 0 ; right < s.length; right ++){
		const char = s[right]


		while(set.has(char)){

			set.delete(s[left])
			left++
		}

		set.add(char)
		max = Math.max(max, right - left + 1)
	}


	return max

}

//Reverse Linked List

//Given the head of a singly linked list, reverse the list, and return the reversed list.

function reverseList(head){
    let prev = null
    let current = head



    while (current !== null) {

        const next = current.next
        current.next = prev
        prev = current
        current = next

    }


    return prev

}


//Merge Two Sorted Lists

/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.*/
function mergedTwoList(list1, list2){
    
    const dummy = new ListNode(0)
    let current = dummy 


    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {

            current.next = list2
            list2 = list2.next
        }

        current = current.next


    }

    current.next = list1 || list2


    return dummy.next
}

/*Jump Game
Given an array nums where nums[i] represents the maximum number of steps you can jump from position i, return true if you can reach the last index, or false otherwise.*/

function canJump(nums){
	let maxReach = 0

	for(let i = 0; i < nums.length; i++){

		if(i > maxReach) return false

		maxReach = Math.max(maxReach, i + nums[i])
	}

	return true
}


/*Jump Game II

Given an array nums, return the minimum number of jumps to reach the last index. You can assume you can always reach the last index.*/

function jump(nums){

	let jumps = 0
	let currentEnd = 0
	let farthest = 0



	for( let i = 0; i < nums.length -1; i++){

		farthest = Math.max(farthest, nums[i] + i)
		if(i === currentEnd){
			jumps++
			currentEnd = farthest
		}
	
	}

	return jumps
}

/*Number of 1 Bits
Given an integer n, return the number of 1 bits it has.*/

function hammingWeight(n){
	let count = 0
	while( n !== 0){
		n = n  & (n-1)
		count ++
	}

	return count
}

/*Missing Number
Given an array nums containing n distinct numbers in range [0, n], return the missing number.
*/

function missingNumber(nums){

	let result = nums.length
	for(let i = 0; i< nums.length; i++){
		result = result ^ nums[i] ^ i
	}

	return result
}

/*Counting Bits
Given an integer n, return an array where ans[i] is the number of 1s in the binary representation of i.*/


function climbStairs(n){

	if( n <= 2) return n

	let prev2 = 1
	let prev1 = 2

	for( let i = 3; i <= n; i++){
		const current = prev1 + prev2
		prev2 = prev1
		prev1 = current

	}

	return prev1


}

/*Fill The Truck
You have trucks with maximum capacity and boxes of varying weights. Each truck can only be loaded up to its maximum capacity. Maximize the number of boxes you can load onto a truck*/
function fillTruck(maxCapacity, boxWeights){

	boxWeights.sort((a,b) => a - b)

	let totalWeight = 0 
	let count = 0

	for(const weight of boxWeights) {
		if(totalWeight + weight <= maxCapacity){
			totalWeight += weight

			count++
		} else {
			break

		}
	}

	return count
}

/*First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous one, all versions after a bad version are also bad.
You have n versions and a function isBadVersion(version) returns whether a version is bad. Find the first bad version with minimum API calls.*/

function solution(isBadVersion){

	return function(n){
		let left = 1
		let right = n

		while(left < right){
			const mid = Math.floor((left + right) / 2)

			if(isBadVersion(mid)){
				right = mid
			} else {
				left = mid + 1
			}
		}

		return left
	}
}

/*Search a 2D Matrix
Write an efficient algorithm that searches for a value target in an m x n matrix. Each row is sorted left to right and the first integer of each row is greater than the last integer of the previous row.*/

function searchMatrix(matrix,  target){

	const rows = matrix.length
	const cols = matrix[0].length

	let left = 0
	let right = rows * cols - 1

	while (left <= right){

		const mid = Math.floor((left + right) / 2)
		const val = matrix[Math.floor(mid/cols)][mid % cols]

		if(val === target){
			return true
		} else if(val < target){
			left = mid + 1
		} else {
			right = mid -1
		}
	}

	return false
}

//Koko Eating Bananas
/*
Koko loves to eat bananas. There are n piles of bananas. The guards will come back in h hours. Koko can eat at most k bananas per hour. Find the minimum k such that she can eat all bananas within h hours.*/

function minEatingSpeed(piles, h){
	let left = 1
	let right = Math.max(...piles)

	while(left < right){
		const mid = Math.floor((left + right) / 2)


		let hours = 0
		for (const pile of piles){
			hours += Math.ceil(pile/ mid)
		}

		if(hours <= h){
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left 
}


/*Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram uses the same characters the same number of times.*/

function validAnagram(s, t){

	if(s.length !== t.length) return false


	const character = new Map()
	for( const string of s){
		character.set(string, (character.get(string) || 0) + 1)
	}

	for(const stringT of t){
		if(!character.has(stringT)) return false 
		character.set(stringT, character.get(stringT) - 1)

		if(character.get(stringT) === 0) character.delete(stringT)

	}



	return true

}

/*Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.*/

function lengthLongestSubstring(s){

	const seen = new Map()
	let left = 0
	let max = 0

	for(let right = 0; right < s.length; right ++){
		const char = s[right]

		if(seen.has(char) && seen.get(char) >= left){
			left = seen.get(char) + 1
		}

		seen.set(char, right)
		max = Math.max(max, right - left + 1)
	}


	return max
}

/*Group Anagrams

Given an array of strings, group the anagrams together.*/


function groupAnagrams(strings){

	const characters = new Map()
	for(string of strings){

		const key = string.split('').sort().join('');

		if(characters.has(key)){

			characters.get(key).push(string)
		} else {
			characters.set(key, [string])
		}
	}

	return [...characters.values()]

}


/*Longest Palindromic Substring

Given a string s, return the longest palindromic substring.*/


function longuestPalindrome(s){
	let result = ''

	function expand(left, right){
		while(left >= 0 && right < s.length && s[left] === s[right]) {
			if(right - left + 1 > result.length){
				result = s.slice(left, right + 1)
			}

			left --
			right ++
		}
	}

	for(let i = 0; i < s.length; i++){
		expand(i, i)
		expand(i, i + 1)

	}

	return result
}

function longestPalindrome(s) {
    let result = ''

    function expand(left, right) {
        if (left < 0 || right >= s.length || s[left] !== s[right]) return

        if (right - left + 1 > result.length) {
            result = s.slice(left, right + 1)
        }

        expand(left-1, right+1)  // ← solo esto falta
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i)
        expand(i, i + 1)
    }

    return result
}


/*Unique Paths

A robot is on an m x n grid at the top-left corner. It can only move right or down. How many unique paths are there to reach the bottom-right corner?*/

function uniquePaths(m, n){

	const dp = Array(m).fill(null).map(() => Array(n).fill(1))

	for(let i = 1; i < m; i++){
		for(let j = 1; j < n; j++){
			dp[i][j] = dp[i-1][j] + dp[i][j-1]
		}
	}

	return dp[m-1][n-1]
}

/*Maximum XOR of Two Numbers

Given an integer array nums, return the maximum XOR of any two numbers.*/

function findMaximumXOR(nums){
	let max = 0
	let mask = 0

	for(let i=31; i>= 0; i--){

		mask |= (1 << i)

		const prefixes = new Set()
		for(const num of nums){
			prefixes.add(num & mask)
		}

		const candidate = max | (1 << i)

		for(const prefix of prefixes){
			if(prefixes.has(candidate ^ prefix)){
				max = candidate
				break
			}
		}
	}

	return max
}

/*Coin Change
Given an array of coin denominations coins and an amount amount, return the minimum number of coins needed to make up that amount. If not possible return -1.*/

function coinChange(coins, amount){

	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0 

	for(let i = 1; i <= amount; i++){
		for(const coin of coins){
			if(i - coin >= 0){
				dp[i] = Math.min(dp[i], dp[i - coin] + 1)
			}
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount]
}

/* Product Rating System*/

function productRating(customer_rating, k, m){

	let result = 0 
	for(let bit = 30; bit >= 0; bit--){
		const target = result | (1 << bit)
		let ops = 0
		let count = 0

		for (const rating of customer_rating){
			if(rating <= target){
				ops += target - rating 
				if(ops <= k) count++
			} else if((rating & target) === target){
				count ++
			}
		}

		if(count >= m){
			result = target
		}
	}

	return result
}


JAVASCRIPT QUICK REFERENCE FOR LEETCODE
Math
Math.max(a, b)  →  el mayor  |  Math.min(a, b)  →  el menor
Math.abs(-5)  →  5  |  Math.floor(4.7)  →  4  |  Math.ceil(4.2)  →  5
Infinity  →  mayor número buscas el minimo  |  -Infinity  →  menor número buscas el maximo
Arrays
arr.push(x)  →  agrega al final  |  arr.pop()  →  quita del final
arr.shift()  →  quita del inicio  |  arr.unshift(x)  →  agrega al inicio
arr.includes(x)  →  true/false  |  arr.indexOf(x)  →  índice o -1
arr.map(x => x*2)  →  transforma  |  arr.filter(x => x>0)  →  filtra
arr.sort((a,b) => a-b)  →  ascendente  |  arr.reverse()  →  invierte
arr.slice(1,3)  →  copia parte  |  arr.length  →  tamaño
Strings
str[0]  →  primer char  |  str.length  →  tamaño
str.split('')  →  array de chars  |  str.split(' ')  →  separa por espacios
str.toLowerCase()  →  minúsculas  |  str.toUpperCase()  →  mayúsculas
str.includes('ab')  →  true/false  |  str.trim()  →  quita espacios
Map — Hash Map
const map = new Map()
map.set('key', value)  →  guardar  |  map.get('key')  →  obtener
map.has('key')  →  true/false  |  map.size  →  tamaño
Set — valores únicos
const set = new Set([1,2,2,3])  →  {1,2,3}
set.add(x)  →  agregar  |  set.has(x)  →  true/false  |  set.size  →  tamaño
