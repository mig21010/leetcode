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
	let currentMax = nums[0]
	let curMin = nums[0]
}

