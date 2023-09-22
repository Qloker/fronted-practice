var twoSum = function(nums, target) {
    for (i in nums) {
        for (j in nums) {
            if (nums[i] + nums[j] == target && i != j) {
                console.log(`${i}, ${j}`)
                return [Number(i), Number(j)];
                break
            }
        }
    }
    
};

const nums = [3,2,4]
const target = 6

let s = twoSum(nums, target)
