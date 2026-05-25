//let code exercices

//brute force O(n2) Time to Buy and Sell Stock

/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/

function maxProfit(prices){

	let maxP = 0 


	for(let i = 0; i< prices.length; i++){

		for(let j = i; j < prices.length; j++ ){

			const profit = pirces[j] - prices[i]

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

function climbingStairs(n){

	if(n <= 2) return n

	let prev =1
	let curr = 2

	for (let i =3; i<= n; i++){
		const temp = curr
		curr = prev + curr
		prev = temp
	}

	return curr
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