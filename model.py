import re

def find_sum(string):
    nums_list = re.findall(r'[+-]?\d+', string)
    if nums_list:
        nums_list = [int(i) for i in nums_list]
        s = sum(nums_list)
        return s
    
