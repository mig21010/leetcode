//let code exercices

//brute force O(n2) Time to Buy and Sell Stock

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