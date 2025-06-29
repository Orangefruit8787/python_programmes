import React, { useState, useEffect, useRef, useCallback } from 'react';

// --- Data for all 140+ Python Programs (extracted and categorized from your PDF snippet) ---
// Note: Programs 42 and 78 were empty in the snippet and thus omitted.
// Program 105 is a duplicate of 100 and will share the same description/code.
const programsData = [
  {
    category: "Basic I/O & Variables",
    programs: [
      { id: 1, title: "Program 1: Print 'Hello Python'", description: "This program demonstrates how to print a simple string to the console in Python. It's often the first program new developers write to confirm their environment is set up correctly.", code: `print("Hello Python")\n\n# Expected Output:\n# Hello Python` },
      { id: 2, title: "Program 2: Arithmetic Operations (Addition & Division)", description: "This program showcases basic arithmetic operations: addition and division. It prompts the user for numbers and handles potential division by zero for the division operation.", code: `# Addition\nnum1 = float(input("Enter the first number for addition: "))\nnum2 = float(input("Enter the second number for addition: "))\nsum_result = num1 + num2\nprint(f"Sum: {num1} + {num2} = {sum_result}")\n\n# Example Interaction for Addition:\n# Enter the first number for addition: 5\n# Enter the second number for addition: 6\n# Sum: 5.0 + 6.0 = 11.0\n\n# Division\nnum3 = float(input("Enter the dividend for division: "))\nnum4 = float(input("Enter the divisor for division: "))\nif num4 == 0:\n    print("Error: Division by zero is not allowed.")\nelse:\n    div_result = num3 / num4\n    print(f"Division: {num3} / {num4} = {div_result}")\n\n# Example Interaction for Division:\n# Enter the dividend for division: 25\n# Enter the divisor for division: 5\n# Division: 25.0 / 5.0 = 5.0` },
      { id: 4, title: "Program 4: Swap Two Variables", description: "This program demonstrates how to swap the values of two variables using a temporary variable.", code: `# Input two variables\na = input("Enter the value of the first variable (a): ")\nb = input("Enter the value of the second variable (b): ")\n\n# Display the original values\nprint(f"Original values: a={a}, b={b}")\n\n# Swap the values using a temporary variable\ntemp = a\na = b\nb = temp\n\n# Display the swapped values\nprint(f"Swapped values: a={a}, b={b}")\n\n# Example Interaction:\n# Enter the value of the first variable (a): 5\n# Enter the value of the second variable (b): 9\n# Original values: a=5, b=9\n# Swapped values: a=9, b=5` },
      { id: 10, title: "Program 10: Swap Two Variables (Without Temp)", description: "This program shows how to swap two variables without using a temporary variable, typically using tuple assignment in Python.", code: `a = 5\nb = 10\n\n# Swapping without a temporary variable\na, b = b, a\n\nprint("After swapping:")\nprint("a =", a)\nprint("b =", b)\n\n# Expected Output:\n# After swapping:\n# a = 10\n# b = 5` },
    ]
  },
  {
    category: "Number Properties & Theory",
    programs: [
      { id: 11, title: "Program 11: Check Positive, Negative or Zero", description: "This program determines if a given number is positive, negative, or zero using conditional statements.", code: `num = float(input("Enter a number: "))\nif num > 0:\n    print("Positive number")\nelif num == 0:\n    print("Zero")\nelse:\n    print("Negative number")\n\n# Example Interaction:\n# Enter a number: 6.4\n# Positive number` },
      { id: 12, title: "Program 12: Check Odd or Even", description: "This program checks whether an integer is an odd or even number.", code: `num = int(input("Enter a number: "))\nif num % 2 == 0:\n    print("This is an even number")\nelse:\n    print("This is an odd number")\n\n# Example Interaction:\n# Enter a number: 3\n# This is an odd number` },
      { id: 14, title: "Program 14: Check Prime Number", description: "This program determines if a given number is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.", code: `num = int(input("Enter a number: "))\nflag = False\nif num == 1:\n    print(f"{num}, is not a prime number")\nelif num > 1:\n    for i in range(2, num):\n        if (num % i) == 0:\n            flag = True\n            break\n    if flag:\n        print(f"{num}, is not a prime number")\n    else:\n        print(f"{num}, is a prime number")\n\n# Example Interaction:\n# Enter a number: 27\n# 27, is not a prime number` },
      { id: 15, title: "Program 15: Print Prime Numbers in an Interval", description: "This program displays all prime numbers within a specified interval (e.g., 1 to 10).", code: `# Python program to display all the prime numbers within an interval\nlower = 1\nupper = 10\nprint("Prime numbers between", lower, "and", upper, "are:")\nfor num in range(lower, upper + 1):\n    if num > 1:\n        for i in range(2, num):\n            if (num % i) == 0:\n                break\n        else:\n            print(num)\n\n# Expected Output:\n# Prime numbers between 1 and 10 are:\n# 2\n# 3\n# 5\n# 7` },
      { id: 16, title: "Program 16: Find the Factorial of a Number", description: "This program calculates the factorial of a non-negative integer. The factorial of a number is the product of all positive integers less than or equal to that number.", code: `num = int(input("Enter a number: "))\nfactorial = 1\nif num < 0:\n    print("Factorial does not exist for negative numbers")\nelif num == 0:\n    print("Factorial of 0 is 1")\nelse:\n    for i in range(1, num + 1):\n        factorial = factorial * i\n    print(f'The factorial of {num} is {factorial}')\n\n# Example Interaction:\n# Enter a number: 4\n# The factorial of 4 is 24` },
      { id: 19, title: "Program 19: Check Armstrong Number", description: "This program checks if a number is an Armstrong number. An Armstrong number is equal to the sum of its own digits, each raised to the power equal to the number of digits in the number.", code: `num = int(input("Enter a number: "))\nnum_str = str(num)\nnum_digits = len(num_str)\nsum_of_powers = 0\ntemp_num = num\nwhile temp_num > 0:\n    digit = temp_num % 10\n    sum_of_powers += digit ** num_digits\n    temp_num //= 10\nif sum_of_powers == num:\n    print(f"{num} is an Armstrong number.")\nelse:\n    print(f"{num} is not an Armstrong number.")\n\n# Example Interaction:\n# Enter a number: 9474\n# 9474 is an Armstrong number.` },
      { id: 20, title: "Program 20: Find Armstrong Number in an Interval", description: "This program finds and prints all Armstrong numbers within a given interval.", code: `# Input the interval from the user\nlower = int(input("Enter the lower limit of the interval: "))\nupper = int(input("Enter the upper limit of the interval: "))\nfor num in range(lower, upper + 1):\n    order = len(str(num))\n    temp_num = num\n    sum = 0\n    while temp_num > 0:\n        digit = temp_num % 10\n        sum += digit ** order\n        temp_num //= 10\n    if num == sum:\n        print(num)\n\n# Example Interaction:\n# Enter the lower limit of the interval: 10\n# Enter the upper limit of the interval: 1000\n# 153\n# 370\n# 371\n# 407` },
      { id: 21, title: "Program 21: Find the Sum of Natural Numbers", description: "This program calculates the sum of the first 'n' natural numbers.", code: `limit = int(input("Enter the limit: "))\nsum = 0\nfor i in range(1, limit + 1):\n    sum += i\nprint("The sum of natural numbers up to", limit, "is:", sum)\n\n# Example Interaction:\n# Enter the limit: 10\n# The sum of natural numbers up to 10 is: 55` },
      { id: 27, title: "Program 27: Display Fibonacci Sequence Using Recursion", description: "This program generates the Fibonacci sequence up to a specified number of terms using recursion.", code: `# Python program to display the Fibonacci sequence\ndef recur_fibo(n):\n    if n <= 1:\n        return n\n    else:\n        return(recur_fibo(n-1) + recur_fibo(n-2))\n\nnterms = int(input("Enter the number of terms (greater than 0): "))\n\nif nterms <= 0:\n    print("Please enter a positive integer")\nelse:\n    print("Fibonacci sequence:")\n    for i in range(nterms):\n        print(recur_fibo(i))\n\n# Example Interaction:\n# Enter the number of terms (greater than 0): 8\n# Fibonacci sequence:\n# 0\n# 1\n# 1\n# 2\n# 3\n# 5\n# 8\n# 13` },
      { id: 28, title: "Program 28: Find Factorial of Number Using Recursion", description: "This program calculates the factorial of a number using a recursive function.", code: `# Factorial of a number using recursion\ndef recur_factorial(n):\n    if n == 1:\n        return n\n    else:\n        return n * recur_factorial(n-1)\n\nnum = int(input("Enter the number: "))\n\nif num < 0:\n    print("Sorry, factorial does not exist for negative numbers")\nelif num == 0:\n    print("The factorial of 0 is 1")\nelse:\n    print("The factorial of", num, "is", recur_factorial(num))\n\n# Example Interaction:\n# Enter the number: 7\n# The factorial of 7 is 5040` },
      { id: 43, title: "Program 43: Check Disarium Number", description: "This program checks if a number is a Disarium number. A Disarium number is a number that is equal to the sum of its digits each raised to the power of its respective position.", code: `def is_disarium(number):\n    num_str = str(number)\n    digit_sum = sum(int(i) ** (index + 1) for index, i in enumerate(num_str))\n    return digit_sum == number\n\ntry:\n    num = int(input("Enter a number: "))\n    if is_disarium(num):\n        print(f"{num} is a Disarium number.")\n    else:\n        print(f"{num} is not a Disarium number.")\nexcept ValueError:\n    print("Invalid input. Please enter a valid number.")\n\n# Example Interaction:\n# Enter a number: 89\n# 89 is a Disarium number.` },
      { id: 44, title: "Program 44: Print Disarium Numbers in an Interval", description: "This program prints all Disarium numbers between 1 and 100.", code: `def is_disarium(num):\n    num_str = str(num)\n    digit_sum = sum(int(i) ** (index + 1) for index, i in enumerate(num_str))\n    return num == digit_sum\n\ndisarium_numbers = [num for num in range(1, 101) if is_disarium(num)]\nprint("Disarium numbers between 1 and 100:")\nfor num in disarium_numbers:\n    print(num, end=" | ")\n\n# Expected Output:\n# Disarium numbers between 1 and 100:\n# 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 89 |` },
      { id: 45, title: "Program 45: Check Happy Number", description: "This program determines if a given positive integer is a Happy Number. A Happy Number eventually reaches 1 when repeatedly replaced by the sum of the squares of its digits.", code: `def is_happy_number(num):\n    seen = set()\n    while num != 1 and num not in seen:\n        seen.add(num)\n        num = sum(int(i) ** 2 for i in str(num))\n    return num == 1\n\nnum = int(input("Enter a number: "))\nif is_happy_number(num):\n    print(f"{num} is a Happy Number")\nelse:\n    print(f"{num} is not a Happy Number.")\n\n# Example Interaction:\n# Enter a number: 23\n# 23 is a Happy Number` },
      { id: 46, title: "Program 46: Print Happy Numbers in an Interval", description: "This program lists all Happy Numbers between 1 and 100.", code: `def is_happy_number(num):\n    seen = set()\n    while num != 1 and num not in seen:\n        seen.add(num)\n        num = sum(int(i) ** 2 for i in str(num))\n    return num == 1\n\nhappy_numbers = []\nfor num in range(1, 101):\n    if is_happy_number(num):\n        happy_numbers.append(num)\nprint("Happy Numbers between 1 and 100:")\nprint(happy_numbers)\n\n# Expected Output:\n# Happy Numbers between 1 and 100:\n# [1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100]` },
      { id: 47, title: "Program 47: Determine Harshad Number", description: "This program checks if a number is a Harshad (or Niven) number. A Harshad number is divisible by the sum of its digits.", code: `def is_harshad_number(num):\n    digit_sum = sum(int(i) for i in str(num))\n    return num % digit_sum == 0\n\nnum = int(input("Enter a number: "))\nif is_harshad_number(num):\n    print(f"{num} is a Harshad Number.")\nelse:\n    print(f"{num} is not a Harshad Number.")\n\n# Example Interaction:\n# Enter a number: 18\n# 18 is a Harshad Number.` },
      { id: 48, title: "Program 48: Print Pronic Numbers in an Interval", description: "This program lists all Pronic numbers (or Oblong numbers) between 1 and 100. A Pronic number is the product of two consecutive integers, n * (n + 1).", code: `def is_pronic_number(num):\n    for n in range(1, int(num**0.5) + 1):\n        if n * (n + 1) == num:\n            return True\n    return False\n\nprint("Pronic numbers between 1 and 100 are:")\nfor i in range(1, 101):\n    if is_pronic_number(i):\n        print(i, end=" | ")\n\n# Expected Output:\n# Pronic numbers between 1 and 100 are:\n# 2 | 6 | 12 | 20 | 30 | 42 | 56 | 72 | 90 |` },
      { id: 87, title: "Program 87: Generator for Divisible by 5 and 7", description: "This program uses a generator to yield numbers divisible by both 5 and 7 within a given range (0 to n).", code: `def divisible_by_5_and_7(n):\n    for num in range(n + 1):\n        if num % 5 == 0 and num % 7 == 0:\n            yield num\n\ntry:\n    n = int(input("Enter a value for n: "))\n    result = divisible_by_5_and_7(n)\n    print(','.join(map(str, result)))\nexcept ValueError:\n    print("Invalid input. Please enter a valid integer for n.")\n\n# Example Interaction:\n# Enter a value for n: 100\n# 0,35,70` },
      { id: 88, title: "Program 88: Generator for Even Numbers", description: "This program utilizes a generator to produce even numbers within a range (0 to n) in a comma-separated format.", code: `def even_numbers(n):\n    for num in range(n + 1):\n        if num % 2 == 0:\n            yield num\n\ntry:\n    n = int(input("Enter a value for n: "))\n    result = even_numbers(n)\n    print(','.join(map(str, result)))\nexcept ValueError:\n    print("Invalid input. Please enter a valid integer for n.")\n\n# Example Interaction:\n# Enter a value for n: 10\n# 0,2,4,6,8,10` },
      { id: 89, title: "Program 89: Fibonacci Sequence (List Comprehension)", description: "This program computes the Fibonacci sequence using list comprehension based on the standard recursive formula.", code: `def fibonacci(n):\n    sequence = [0, 1]\n    [sequence.append(sequence[-1] + sequence[-2]) for _ in range(2, n)]\n    return sequence[:n]\n\ntry:\n    n = int(input("Enter a value for n: "))\n    result = fibonacci(n)\n    print(','.join(map(str, result)))\nexcept ValueError:\n    print("Invalid input. Please enter a valid integer for n.")\n\n# Example Interaction:\n# Enter a value for n: 8\n# 0,1,1,2,3,5,8,13` },
      { id: 94, title: "Program 94: Check Curzon Number", description: "This program determines if a given non-negative integer is a Curzon number. A number 'num' is a Curzon number if (2^num + 1) is exactly divisible by (2 * num + 1).", code: `def is_curzon(num):\n    numerator = 2 ** num + 1\n    denominator = 2 * num + 1\n    return numerator % denominator == 0\n\n# Test cases\nprint(is_curzon(5))  # True\nprint(is_curzon(10)) # False\nprint(is_curzon(14)) # True` },
      { id: 100, title: "Program 100: Factorial of a Number Recursively", description: "This program calculates the factorial of a non-negative integer using a recursive function. (Also covered in Program 28)", code: `def factorial(n):\n    if n == 0:\n        return 1 # Base case: factorial of 0 is 1\n    else:\n        return n * factorial(n - 1) # Recursive case: n! = n * (n-1)!\n\nprint(factorial(5)) # 120\nprint(factorial(3)) # 6\nprint(factorial(1)) # 1\nprint(factorial(0)) # 1` },
      { id: 105, title: "Program 105: Factorial of a Number Recursively (Duplicate of 100)", description: "This program is a duplicate of Program 100, demonstrating recursive factorial calculation.", code: `def factorial(n):\n    if n == 0:\n        return 1 # Base case: factorial of 0 is 1\n    else:\n        return n * factorial(n - 1) # Recursive case: n! = n * (n-1)!\n\nprint(factorial(5)) # 120\nprint(factorial(3)) # 6\nprint(factorial(1)) # 1\nprint(factorial(0)) # 1` },
      { id: 131, title: "Program 131: Mean of All Digits", description: "This program calculates the mean (average) of all digits in a given integer. The result is always an integer.", code: `def mean(n):\n    n_str = str(n)\n    digit_sum = sum(int(digit) for digit in n_str)\n    digit_count = len(n_str)\n    digit_mean = digit_sum / digit_count\n    return int(digit_mean)\n\nprint(mean(42)) # 3\nprint(mean(12345)) # 3\nprint(mean(666)) # 6` },
      { id: 132, title: "Program 132: Amplify Numbers Divisible by 4", description: "This program takes an integer 'num' and returns a list from 1 to 'num'. If a number is divisible by 4, it's amplified (multiplied by 10); otherwise, the number itself is returned.", code: `def amplify(num):\n    return [n * 10 if n % 4 == 0 else n for n in range(1, num + 1)]\n\nprint(amplify(4)) # [1, 2, 3, 40]\nprint(amplify(3)) # [1, 2, 3]\n# print(amplify(25)) # Longer output` },
    ]
  },
  {
    category: "Conversions & Utilities",
    programs: [
      { id: 5, title: "Program 5: Generate a Random Number", description: "This program generates and prints a random integer within a specified range (e.g., 1 to 100).", code: `import random\nprint(f"Random number: {random.randint(1, 100)}")\n\n# Example Output:\n# Random number: 89` },
      { id: 6, title: "Program 6: Convert Kilometers to Miles", description: "This program converts a given distance in kilometers to miles using a fixed conversion factor.", code: `kilometers = float(input("Enter distance in kilometers: "))\nconversion_factor = 0.621371\nmiles = kilometers * conversion_factor\nprint(f"{kilometers} kilometers is equal to {miles} miles")\n\n# Example Interaction:\n# Enter distance in kilometers: 100\n# 100.0 kilometers is equal to 62.137100000000004 miles` },
      { id: 7, title: "Program 7: Convert Celsius to Fahrenheit", description: "This program converts a temperature from Celsius to Fahrenheit using the standard conversion formula.", code: `celsius = float(input("Enter temperature in Celsius: "))\nfahrenheit = (celsius * 9/5) + 32\nprint(f"{celsius} degrees Celsius is equal to {fahrenheit} degrees Fahrenheit")\n\n# Example Interaction:\n# Enter temperature in Celsius: 37\n# 37.0 degrees Celsius is equal to 98.6 degrees Fahrenheit` },
      { id: 8, title: "Program 8: Display Calendar", description: "This program uses the `calendar` module to display the calendar for a specified month and year.", code: `import calendar\nyear = int(input("Enter year: "))\nmonth = int(input("Enter month: "))\ncal = calendar.month(year, month)\nprint(cal)\n\n# Example Interaction:\n# Enter year: 2023\n# Enter month: 11\n#    November 2023\n# Mo Tu We Th Fr Sa Su\n#          1  2  3  4  5\n#  6  7  8  9 10 11 12\n# 13 14 15 16 17 18 19\n# 20 21 22 23 24 25 26\n# 27 28 29 30` },
      { id: 24, title: "Program 24: Convert Decimal to Binary, Octal, Hexadecimal", description: "This program converts a decimal number to its binary, octal, and hexadecimal representations.", code: `dec_num = int(input('Enter a decimal number: '))\nprint("The decimal value of", dec_num, "is:")\nprint(bin(dec_num), "in binary.")\nprint(oct(dec_num), "in octal.")\nprint(hex(dec_num), "in hexadecimal.")\n\n# Example Interaction:\n# Enter a decimal number: 27\n# The decimal value of 27 is:\n# 0b11011 in binary.\n# 0o33 in octal.\n# 0x1b in hexadecimal.` },
      { id: 25, title: "Program 25: Find ASCII Value of a Character", description: "This program finds and prints the ASCII (American Standard Code for Information Interchange) value of a given character.", code: `char = str(input("Enter the character: "))\nprint("The ASCII value of '" + char + "' is", ord(char))\n\n# Example Interaction:\n# Enter the character: P\n# The ASCII value of 'P' is 80` },
      { id: 85, title: "Program 85: Compress and Decompress String", description: "This program demonstrates how to compress and decompress a string using Python's `zlib` module.", code: `import zlib\nstring = "hello world!hello world!hello world!hello world!"\n\n# Compress the string\ncompressed_string = zlib.compress(string.encode())\n\n# Decompress the string\ndecompressed_string = zlib.decompress(compressed_string).decode()\n\nprint("Original String:", string)\nprint("Compressed String:", compressed_string)\nprint("Decompressed String:", decompressed_string)\n\n# Expected Output:\n# Original String: hello world!hello world!hello world!hello world!\n# Compressed String: b'x\\x9c\\xcbH\\xcd\\xc9\\xc9W(\\xcf/\\xcaIQ\\xcc \\x82\\r\\x00\\xbd[\\x11\\xf5'\n# Decompressed String: hello world!hello world!hello world!hello world!` },
      { id: 93, title: "Program 93: Convert Radians to Degrees", description: "This program converts an angle from radians to degrees, rounded to one decimal place.", code: `import math\ndef radians_to_degrees(radians):\n    degrees = radians * (180 / math.pi)\n    return round(degrees, 1)\n\nprint(radians_to_degrees(1)) # 57.3\nprint(radians_to_degrees(20)) # 1145.9\nprint(radians_to_degrees(50)) # 2864.8` },
      { id: 96, title: "Program 96: Binary Representation of Decimal", description: "This program returns the base-2 (binary) representation of a base-10 (decimal) string number.", code: `def binary(decimal):\n    binary_str = ""\n    while decimal > 0:\n        remainder = decimal % 2\n        binary_str = str(remainder) + binary_str\n        decimal = decimal // 2\n    return binary_str if binary_str else "0"\n\nprint(binary(1)) # "1"\nprint(binary(5)) # "101"\nprint(binary(10)) # "1010"` },
    ]
  },
  {
    category: "Mathematical Operations & Formulas",
    programs: [
      { id: 3, title: "Program 3: Area of a Triangle", description: "This program calculates the area of a triangle given its base and height. It uses the standard formula: Area = 0.5 * base * height.", code: `# Input the base and height from the user\nbase = float(input("Enter the length of the base of the triangle: "))\nheight = float(input("Enter the height of the triangle: "))\n\n# Calculate the area of the triangle\narea = 0.5 * base * height\n\n# Display the result\nprint(f"The area of the triangle is: {area}")\n\n# Example Interaction:\n# Enter the length of the base of the triangle: 10\n# Enter the height of the triangle: 15\n# The area of the triangle is: 75.0` },
      { id: 9, title: "Program 9: Solve Quadratic Equation", description: "This program solves a quadratic equation ($ax^2 + bx + c = 0$) given the coefficients a, b, and c. It handles real and complex roots.", code: `import math\n\n# Input coefficients\na = float(input("Enter coefficient a: "))\nb = float(input("Enter coefficient b: "))\nc = float(input("Enter coefficient c: "))\n\n# Calculate the discriminant\ndiscriminant = b**2 - 4*a*c\n\n# Check if the discriminant is positive, negative, or zero\nif discriminant > 0:\n    # Two real and distinct roots\n    root1 = (-b + math.sqrt(discriminant)) / (2 * a)\n    root2 = (-b - math.sqrt(discriminant)) / (2 * a)\n    print(f"Root 1: {root1}")\n    print(f"Root 2: {root2}")\nelif discriminant == 0:\n    # One real root (repeated)\n    root = -b / (2 * a)\n    print(f"Root: {root}")\nelse:\n    # Complex roots\n    real_part = -b / (2 * a)\n    imaginary_part = math.sqrt(abs(discriminant)) / (2 * a)\n    print(f"Root 1: {real_part} + {imaginary_part}i")\n    print(f"Root 2: {real_part} - {imaginary_part}i")\n\n# Example Interaction:\n# Enter coefficient a: 1\n# Enter coefficient b: 4\n# Enter coefficient c: 8\n# Root 1: -2.0 + 2.0i\n# Root 2: -2.0 - 2.0i` },
      { id: 17, title: "Program 17: Display Multiplication Table", description: "This program generates and displays the multiplication table for a given number up to 10.", code: `num = int(input("Display multiplication table of: "))\nfor i in range(1, 11):\n    print(f"{num} x {i} = {num * i}")\n\n# Example Interaction:\n# Display multiplication table of: 19\n# 19 x 1 = 19\n# ...\n# 19 x 10 = 190` },
      { id: 22, title: "Program 22: Find LCM", description: "This program calculates the Least Common Multiple (LCM) of two input numbers. LCM is the smallest multiple exactly divisible by both numbers.", code: `# Python Program to find the L.C.M. of two input number\ndef compute_lcm(x, y):\n    if x > y:\n        greater = x\n    else:\n        greater = y\n    while(True):\n        if((greater % x == 0) and (greater % y == 0)):\n            lcm = greater\n            break\n        greater += 1\n    return lcm\n\nnum1 = int(input('Enter the number: '))\nnum2 = int(input('Enter the number: '))\nprint("The L.C.M. is", compute_lcm(num1, num2))\n\n# Example Interaction:\n# Enter the number: 54\n# Enter the number: 24\n# The L.C.M. is 216` },
      { id: 23, title: "Program 23: Find HCF", description: "This program calculates the Highest Common Factor (HCF), also known as Greatest Common Divisor (GCD), of two numbers.", code: `# Python program to find H.C.F of two numbers\ndef compute_hcf(x, y):\n    if x > y:\n        smaller = y\n    else:\n        smaller = x\n    for i in range(1, smaller + 1):\n        if((x % i == 0) and (y % i == 0)):\n            hcf = i\n    return hcf\n\nnum1 = int(input('Enter the number: '))\nnum2 = int(input('Enter the number: '))\nprint("The H.C.F. is", compute_hcf(num1, num2))\n\n# Example Interaction:\n# Enter the number: 54\n# Enter the number: 24\n# The H.C.F. is 6` },
      { id: 29, title: "Program 29: Calculate Body Mass Index (BMI)", description: "This program calculates the Body Mass Index (BMI) given a person's height in meters and weight in kilograms, and categorizes the result.", code: `def bodymassindex(height, weight):\n    return round((weight / height**2), 2)\n\nh = float(input("Enter your height in meters: "))\nw = float(input("Enter your weight in kg: "))\nprint("Welcome to the BMI calculator.")\nbmi = bodymassindex(h, w)\nprint("Your BMI is: ", bmi)\n\nif bmi <= 18.5:\n    print("You are underweight.")\nelif 18.5 < bmi <= 24.9:\n    print("Your weight is normal.")\nelif 25 < bmi <= 29.29:\n    print("You are overweight.")\nelse:\n    print("You are obese.")\n\n# Example Interaction:\n# Enter your height in meters: 1.8\n# Enter your weight in kg: 70\n# Welcome to the BMI calculator.\n# Your BMI is: 21.6\n# Your weight is normal.` },
      { id: 30, title: "Program 30: Calculate Natural Logarithm", description: "This program calculates the natural logarithm (base e) of a given positive number.", code: `import math\nnum = float(input("Enter a number: "))\nif num <= 0:\n    print("Please enter a positive number.")\nelse:\n    result = math.log(num)\n    print(f"The natural logarithm of {num} is: {result}")\n\n# Example Interaction:\n# Enter a number: 1.4\n# The natural logarithm of 1.4 is: 0.3364722366212129` },
      { id: 31, title: "Program 31: Cube Sum of First N Natural Numbers", description: "This program calculates the sum of the cubes of the first 'n' natural numbers.", code: `def cube_sum_of_natural_numbers(n):\n    if n <= 0:\n        return 0\n    else:\n        total = sum([i**3 for i in range(1, n + 1)])\n        return total\n\nn = int(input("Enter the value of n: "))\nif n <= 0:\n    print("Please enter a positive integer.")\nelse:\n    result = cube_sum_of_natural_numbers(n)\n    print(f"The cube sum of the first {n} natural numbers is: {result}")\n\n# Example Interaction:\n# Enter the value of n: 7\n# The cube sum of the first 7 natural numbers is: 784` },
      { id: 74, title: "Program 74: Calculate Q from Formula", description: "This program calculates a value 'Q' based on a given formula: Q = sqrt((2 * C * D) / H), where C=50 and H=30 are fixed, and D is a comma-separated sequence of input values.", code: `import math\n\nC = 50\nH = 30\n\ndef calculate_Q(D):\n    return int(math.sqrt((2 * C * D) / H))\n\ninput_sequence = input("Enter comma-separated values of D: ")\nD_values = input_sequence.split(',')\n\nresult = [calculate_Q(int(D)) for D in D_values]\nprint(','.join(map(str, result)))\n\n# Example Interaction:\n# Enter comma-separated values of D: 100,150,180\n# 18,22,24` },
      { id: 95, title: "Program 95: Area of a Hexagon", description: "This program calculates the area of a regular hexagon given its side length 'x'.", code: `import math\ndef area_of_hexagon(x):\n    area = (3 * math.sqrt(3) * x**2) / 2\n    return round(area, 1)\n\nprint(area_of_hexagon(1)) # 2.6\nprint(area_of_hexagon(2)) # 10.4\nprint(area_of_hexagon(3)) # 23.4` },
      { id: 97, title: "Program 97: Sum of Evenly Divisible Numbers in Range", description: "This program calculates the sum of numbers within a specified range (a to b, inclusive) that are evenly divisible by a third parameter 'c'.", code: `def evenly_divisible(a, b, c):\n    total = 0\n    for num in range(a, b + 1):\n        if num % c == 0:\n            total += num\n    return total\n\nprint(evenly_divisible(1, 10, 20)) # 0\nprint(evenly_divisible(1, 10, 2)) # 30\nprint(evenly_divisible(1, 10, 3)) # 18` },
      { id: 109, title: "Program 109: Paper Folding Thickness", description: "This program calculates the thickness of a piece of paper (starting at 0.5mm) after folding it 'n' number of times, returning the result in meters.", code: `def num_layers(n):\n    initial_thickness_mm = 0.5\n    final_thickness_mm = initial_thickness_mm * (2 ** n)\n    final_thickness_m = final_thickness_mm / 1000 # Convert to meters\n    return f"{final_thickness_m:.3f}m"\n\nprint(num_layers(1)) # "0.001m"\nprint(num_layers(4)) # "0.008m"\nprint(num_layers(21)) # "1048.576m"` },
      { id: 114, title: "Program 114: Volume of a Cone", description: "This program calculates the volume of a cone given its height and radius, rounded to the nearest hundredth.", code: `import math\ndef cone_volume(height, radius):\n    if radius == 0:\n        return 0\n    volume = (1/3) * math.pi * (radius**2) * height\n    return round(volume, 2)\n\nprint(cone_volume(3, 2)) # 12.57\nprint(cone_volume(15, 6)) # 565.49\nprint(cone_volume(18, 0)) # 0` },
      { id: 115, title: "Program 115: Triangular Number Sequence", description: "This program calculates the nth triangular number, which is generated from a pattern of dots forming a triangle (e.g., 1, 3, 6, 10, 15...).", code: `def triangle(n):\n    if n < 1:\n        return 0\n    return n * (n + 1) // 2\n\nprint(triangle(1)) # 1\nprint(triangle(6)) # 21\nprint(triangle(215)) # 23220` },
      { id: 120, title: "Program 120: Compound Interest Calculator", description: "This program calculates the future value of an investment based on the principal, term in years, interest rate, and number of compounding periods per year.", code: `def compound_interest(p, t, r, n):\n    a = p * (1 + (r / n)) ** (n * t)\n    return round(a, 2)\n\nprint(compound_interest(10000, 10, 0.06, 12)) # 18193.97\nprint(compound_interest(100, 1, 0.05, 1)) # 105.0\nprint(compound_interest(3500, 15, 0.1, 4)) # 15399.26\nprint(compound_interest(100000, 20, 0.15, 365)) # 2007316.26` },
      { id: 136, title: "Program 136: Validate Pythagorean Triplet", description: "This program checks if three given integers form a Pythagorean triplet, where the sum of squares of the two smallest equals the square of the largest.", code: `def is_triplet(a, b, c):\n    sorted_numbers = sorted([a, b, c])\n    return sorted_numbers[0] ** 2 + sorted_numbers[1] ** 2 == sorted_numbers[2] ** 2\n\nprint(is_triplet(3, 4, 5)) # True\nprint(is_triplet(13, 5, 12)) # True\nprint(is_triplet(1, 2, 3)) # False` },
    ]
  },
  {
    category: "List & Array Operations",
    programs: [
      { id: 32, title: "Program 32: Find Sum of Array", description: "This program finds the sum of all elements in a list (treated as an array in Python).", code: `# Finding Sum of Array Using sum()\narr = [1,2,3]\nans = sum(arr)\nprint('Sum of the array is ', ans)\n\n# Function to find the sum of elements in an array\ndef sum_of_array(arr):\n    total = 0\n    for element in arr:\n        total += element\n    return total\n\narray = [1, 2, 3]\nresult = sum_of_array(array)\nprint("Sum of the array:", result)\n\n# Expected Output:\n# Sum of the array is 6\n# Sum of the array: 6` },
      { id: 33, title: "Program 33: Find Largest Element in an Array", description: "This program finds the largest element within a given list (array).", code: `def find_largest_element(arr):\n    if not arr:\n        return "Array is empty"\n    largest_element = arr[0]\n    for element in arr:\n        if element > largest_element:\n            largest_element = element\n    return largest_element\n\nmy_array = [10, 20, 30, 99]\nresult = find_largest_element(my_array)\nprint(f"The largest element in the array is: {result}")\n\n# Expected Output:\n# The largest element in the array is: 99` },
      { id: 34, title: "Program 34: Array Rotation", description: "This program rotates an array (list) by a specified number of positions 'd' to the right.", code: `def rotate_array(arr, d):\n    n = len(arr)\n    if d < 0 or d >= n:\n        return "Invalid rotation value"\n    rotated_arr = [0] * n\n    for i in range(n):\n        rotated_arr[i] = arr[(i + d) % n]\n    return rotated_arr\n\narr = [1, 2, 3, 4, 5]\nd = 2\nresult = rotate_array(arr, d)\nprint("Original Array:", arr)\nprint("Rotated Array:", result)\n\n# Expected Output:\n# Original Array: [1, 2, 3, 4, 5]\n# Rotated Array: [3, 4, 5, 1, 2]` },
      { id: 35, title: "Program 35: Split Array and Add First Part to End", description: "This program splits a list (array) at a given index 'k' and moves the first part to the end of the second part.", code: `def split_and_add(arr, k):\n    if k <= 0 or k >= len(arr):\n        return arr\n    first_part = arr[:k]\n    second_part = arr[k:]\n    result = second_part + first_part\n    return result\n\narr = [1, 2, 3, 4, 5]\nk = 3\nresult = split_and_add(arr, k)\nprint("Original Array:", arr)\nprint("Array after splitting and adding:", result)\n\n# Expected Output:\n# Original Array: [1, 2, 3, 4, 5]\n# Array after splitting and adding: [4, 5, 1, 2, 3]` },
      { id: 36, title: "Program 36: Check if Array is Monotonic", description: "This program checks if a given array (list) is monotonic, meaning it is either entirely non-increasing or non-decreasing.", code: `def is_monotonic(arr):\n    increasing = decreasing = True\n    for i in range(1, len(arr)):\n        if arr[i] > arr[i - 1]:\n            decreasing = False\n        elif arr[i] < arr[i - 1]:\n            increasing = False\n    return increasing or decreasing\n\narr1 = [1, 2, 2, 3] # Monotonic (non-decreasing)\narr2 = [3, 2, 1] # Monotonic (non-increasing)\narr3 = [1, 3, 2, 4] # Not monotonic\nprint("arr1 is monotonic:", is_monotonic(arr1)) # True\nprint("arr2 is monotonic:", is_monotonic(arr2)) # True\nprint("arr3 is monotonic:", is_monotonic(arr3)) # False` },
      { id: 49, title: "Program 49: Find Sum of Elements in List", description: "This program calculates the sum of all elements in a given list.", code: `# Sample list of numbers\nnumbers = [10, 20, 30, 40, 50]\nsum_of_numbers = 0\nfor i in numbers:\n    sum_of_numbers += i\nprint("Sum of elements in the list:", sum_of_numbers)\n\n# Expected Output:\n# Sum of elements in the list: 150` },
      { id: 50, title: "Program 50: Multiply All Numbers in the List", description: "This program calculates the product of all numbers in a given list.", code: `# Sample list of numbers\nnumbers = [10, 20, 30, 40, 50]\nproduct_of_numbers = 1\nfor i in numbers:\n    product_of_numbers *= i\nprint("Product of elements in the list:", product_of_numbers)\n\n# Expected Output:\n# Product of elements in the list: 12000000` },
      { id: 51, title: "Program 51: Find Smallest Number in a List", description: "This program finds the smallest number in a given list.", code: `# Sample list of numbers\nnumbers = [30, 10, -45, 5, 20]\nminimum = numbers[0]\nfor i in numbers:\n    if i < minimum:\n        minimum = i\nprint("The smallest number in the list is:", minimum)\n\n# Expected Output:\n# The smallest number in the list is: -45` },
      { id: 52, title: "Program 52: Find Largest Number in a List", description: "This program finds the largest number in a given list.", code: `# Sample list of numbers\nnumbers = [30, 10, -45, 5, 20]\nmaximum = numbers[0] # Corrected from 'minimum' in original PDF code\nfor i in numbers:\n    if i > maximum:\n        maximum = i\nprint("The largest number in the list is:", maximum)\n\n# Expected Output:\n# The largest number in the list is: 30` },
      { id: 53, title: "Program 53: Find Second Largest Number in a List", description: "This program finds the second largest number in a list after sorting.", code: `# Sample list of numbers\nnumbers = [30, 10, 45, 5, 20]\nnumbers.sort(reverse=True)\nif len(numbers) >= 2:\n    second_largest = numbers[1]\n    print("The second largest number in the list is:", second_largest)\nelse:\n    print("The list does not contain a second largest number.")\n\n# Expected Output:\n# The second largest number in the list is: 30` },
      { id: 54, title: "Program 54: Find N Largest Elements from a List", description: "This program finds the N largest elements from a given list.", code: `def find_n_largest_elements(lst, n):\n    sorted_lst = sorted(lst, reverse=True)\n    largest_elements = sorted_lst[:n]\n    return largest_elements\n\nnumbers = [30, 10, 45, 5, 20, 50, 15, 3, 345, 54, 67, 87, 98, 100, 34]\nN = int(input("N = "))\nresult = find_n_largest_elements(numbers, N)\nprint(f"The {N} largest elements in the list are:", result)\n\n# Example Interaction:\n# N = 3\n# The 3 largest elements in the list are: [345, 100, 98]` },
      { id: 55, title: "Program 55: Print Even Numbers in a List", description: "This program filters and prints all even numbers from a list using list comprehension.", code: `# Sample list of numbers\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\neven_numbers = [num for num in numbers if num % 2 == 0]\n\nprint("Even numbers in the list:", even_numbers)\n\n# Expected Output:\n# Even numbers in the list: [2, 4, 6, 8, 10]` },
      { id: 56, title: "Program 56: Print Odd Numbers in a List", description: "This program filters and prints all odd numbers from a list using list comprehension.", code: `# Sample list of numbers\nnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nodd_numbers = [num for num in numbers if num % 2 != 0] # Corrected from 'even_numbers' in original PDF code\n\nprint("Odd numbers in the list:", odd_numbers)\n\n# Expected Output:\n# Odd numbers in the list: [1, 3, 5, 7, 9]` },
      { id: 57, title: "Program 57: Remove Empty List from List", description: "This program removes all empty lists (sub-lists) from a list of lists.", code: `# Sample list containing lists\nlist_of_lists = [[1, 2, 3], [], [4, 5], [], [6, 7, 8], []]\n\nfiltered_list = [i for i in list_of_lists if i]\n\nprint("List after removing empty lists:", filtered_list)\n\n# Expected Output:\n# List after removing empty lists: [[1, 2, 3], [4, 5], [6, 7, 8]]` },
      { id: 58, title: "Program 58: Cloning or Copying a List", description: "This program demonstrates various methods to clone or copy a list in Python, including slicing, `list()` constructor, and list comprehension.", code: `# 1. Using the Slice Operator\noriginal_list = [1, 2, 3, 4, 5]\ncloned_list = original_list[:]\nprint(cloned_list)\n\n# 2. Using the list() constructor\noriginal_list = [1, 2, 3, 4, 5]\ncloned_list = list(original_list)\nprint(cloned_list)\n\n# 3. Using List Comprehension\noriginal_list = [1, 2, 3, 4, 5]\ncloned_list = [item for item in original_list]\nprint(cloned_list)\n\n# Expected Output (each line):\n# [1, 2, 3, 4, 5]` },
      { id: 59, title: "Program 59: Count Occurrences of an Element in a List", description: "This program counts how many times a specific element appears in a given list.", code: `def count_occurrences(l, element):\n    count = l.count(element)\n    return count\n\nmy_list = [1, 2, 3, 4, 2, 5, 2, 3, 4, 6, 5]\nelement_to_count = 2\noccurrences = count_occurrences(my_list, element_to_count)\nprint(f"The element {element_to_count} appears {occurrences} times in the list.")\n\n# Expected Output:\n# The element 2 appears 3 times in the list.` },
      { id: 102, title: "Program 102: Filter Non-Negative Integers from List", description: "This program takes a list containing non-negative integers and strings, and returns a new list containing only the non-negative integers.", code: `def filter_list(lst):\n    result = []\n    for element in lst:\n        if isinstance(element, int) and element >= 0:\n            result.append(element)\n    return result\n\nprint(filter_list([1, 2, "a", "b"])) # [1, 2]\nprint(filter_list([1, "a", "b", 0, 15])) # [1, 0, 15]\nprint(filter_list([1, 2, "aasf", "1", "123", 123])) # [1, 2, 123]` },
      { id: 104, title: "Program 104: List Destructuring Assignment", description: "This program demonstrates Python 3's destructuring assignment to unpack a list into 'first', 'middle', and 'last' variables.", code: `writeyourcodehere = [1, 2, 3, 4, 5, 6]\n# Unpack the list into variables\nfirst, *middle, last = writeyourcodehere\n\nprint(first)   # outputs 1\nprint(middle)  # outputs [2, 3, 4, 5]\nprint(last)    # outputs 6` },
      { id: 106, title: "Program 106: Move Element to End of List", description: "This program moves all occurrences of a specified element to the end of a list.", code: `def move_to_end(lst, element):\n    count = lst.count(element)\n    lst = [x for x in lst if x != element]\n    lst.extend([element] * count)\n    return lst\n\nprint(move_to_end([1, 3, 2, 4, 4, 1], 1)) # [3, 2, 4, 4, 1, 1]\nprint(move_to_end([7, 8, 9, 1, 2, 3, 4], 9)) # [7, 8, 1, 2, 3, 4, 9]\nprint(move_to_end(["a", "a", "a", "b"], "a")) # ["b", "a", "a", "a"]` },
      { id: 111, title: "Program 111: Find Even Numbers (List Comprehension)", description: "This program uses list comprehensions to find all even numbers within a range from 1 to a given number.", code: `def find_even_nums(num):\n    return [x for x in range(1, num + 1) if x % 2 == 0]\n\nprint(find_even_nums(8)) # [2, 4, 6, 8]\nprint(find_even_nums(4)) # [2, 4]\nprint(find_even_nums(2)) # [2]` },
      { id: 112, title: "Program 112: Filter Integers from Mixed List", description: "This program takes a list of strings and integers, and filters it to return a new list containing only the integers.", code: `def filter_list(lst):\n    return [x for x in lst if isinstance(x, int)]\n\nprint(filter_list([1, 2, 3, "a", "b", 4])) # [1, 2, 3, 4]\nprint(filter_list(["A", 0, "Edabit", 1729, "Python", 1729])) # [0, 1729, 1729] (corrected based on example)\nprint(filter_list(["Nothing", "here"])) # []` },
      { id: 113, title: "Program 113: Add Index to List Elements", description: "This program takes a list of numbers and returns a new list where each element has its original index added to its value.", code: `def add_indexes(lst):\n    return [i + val for i, val in enumerate(lst)]\n\nprint(add_indexes([0, 0, 0, 0, 0])) # [0, 1, 2, 3, 4]\nprint(add_indexes([1, 2, 3, 4, 5])) # [1, 3, 5, 7, 9]\nprint(add_indexes([5, 4, 3, 2, 1])) # [5, 5, 5, 5, 5]` },
      { id: 116, title: "Program 116: Find Missing Number", description: "This program finds the missing number in a list of numbers from 1 to 10 (excluding one number).", code: `def missing_num(lst):\n    total_sum = sum(range(1, 11))\n    given_sum = sum(lst)\n    missing = total_sum - given_sum\n    return missing\n\nprint(missing_num([1, 2, 3, 4, 6, 7, 8, 9, 10])) # 5\nprint(missing_num([7, 2, 3, 6, 5, 9, 1, 4, 8])) # 10\nprint(missing_num([10, 5, 1, 2, 4, 6, 8, 3, 9])) # 7` },
      { id: 117, title: "Program 117: Next in Line", description: "This program adds a number to the end of a list and removes the first element, simulating a 'next in line' queue.", code: `def next_in_line(lst, num):\n    if lst:\n        lst.pop(0)\n        lst.append(num)\n        return lst\n    else:\n        return "No list has been selected"\n\nprint(next_in_line([5, 6, 7, 8, 9], 1)) # [6, 7, 8, 9, 1]\nprint(next_in_line([7, 6, 3, 23, 17], 10)) # [6, 3, 23, 17, 10]\nprint(next_in_line([1, 10, 20, 42 ], 6)) # [10, 20, 42, 6]\nprint(next_in_line([], 6)) # "No list has been selected"` },
      { id: 121, title: "Program 121: Return Only Integers", description: "This program takes a list of various elements and returns a new list containing only the integer type elements.", code: `def return_only_integer(lst):\n    return [x for x in lst if isinstance(x, int) and not isinstance(x, bool)] # bool is a subclass of int, so exclude it if desired\n\nprint(return_only_integer([9, 2, "space", "car", "lion", 16])) # [9, 2, 16]\nprint(return_only_integer(["hello", 81, "basketball", 123, "fox"])) # [81, 123]\nprint(return_only_integer([10, "121", 56, 20, "car", 3, "lion"])) # [10, 56, 20, 3]\nprint(return_only_integer(["String", True, 3.3, 1])) # [1]` },
      { id: 123, title: "Program 123: Simon Says (List Shift)", description: "This program checks if a second list is a right-shifted version of the first list by one element.", code: `def simon_says(list1, list2):\n    return list1[:-1] == list2[1:]\n\nprint(simon_says([1, 2], [5, 1])) # True\nprint(simon_says([1, 2], [5, 5])) # False\nprint(simon_says([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])) # True\nprint(simon_says([1, 2, 3, 4, 5], [5, 5, 1, 2, 3])) # False` },
      { id: 130, title: "Program 130: Sort List and Remove Duplicates", description: "This program takes a list, sorts it, and removes all duplicate items, returning a new list with unique sorted elements.", code: `def setify(lst):\n    unique_set = set(lst) # Using a set to get unique elements\n    return sorted(list(unique_set)) # Convert back to list and sort\n\nprint(setify([1, 3, 3, 5, 5])) # [1, 3, 5]\nprint(setify([4, 4, 4, 4])) # [4]\nprint(setify([5, 7, 8, 9, 10, 15])) # [5, 7, 8, 9, 10, 15]\nprint(setify([3, 3, 3, 2, 1])) # [1, 2, 3]` },
      { id: 133, title: "Program 133: Find Unique Number in List", description: "This program finds the single unique number in a list where all other numbers are duplicates.", code: `def unique(numbers):\n    count_dict = {}\n    for num in numbers:\n        if num in count_dict:\n            count_dict[num] += 1\n        else:\n            count_dict[num] = 1\n\n    for num, count in count_dict.items():\n        if count == 1:\n            return num\n    return None # Should not happen based on problem description\n\nprint(unique([3, 3, 3, 7, 3, 3])) # 7\nprint(unique([0, 0, 0.77, 0, 0])) # 0.77\nprint(unique([0, 1, 1, 1, 1, 1, 1, 1])) # 0` },
      { id: 135, title: "Program 135: Sort List of Strings by Length", description: "This program sorts a list of strings from the shortest to the longest length.", code: `def sort_by_length(lst):\n    return sorted(lst, key=len)\n\nprint(sort_by_length(["Google", "Apple", "Microsoft"])) # ["Apple", "Google", "Microsoft"]\nprint(sort_by_length(["Leonardo", "Michelangelo", "Raphael", "Donatello"])) # ["Raphael", "Leonardo", "Donatello", "Michelangelo"]\nprint(sort_by_length(["Turing", "Einstein", "Jung"])) # ["Jung", "Turing", "Einstein"]` },
    ]
  },
  {
    category: "String Manipulation",
    programs: [
      { id: 40, title: "Program 40: Sort Words in Alphabetic Order", description: "This program takes a string of words, splits them, sorts them alphabetically, and then prints the sorted words.", code: `# Program to sort alphabetically the words form a string provided by the user\nmy_str = input("Enter a string: ")\nwords = [word.capitalize() for word in my_str.split()]\nwords.sort()\nprint("The sorted words are:")\nfor word in words:\n    print(word)\n\n# Example Interaction:\n# Enter a string: suresh ramesh vibhuti gulgule raji ram shyam ajay\n# The sorted words are:\n# Ajay\n# Gulgule\n# Raji\n# Ram\n# Ramesh\n# Shyam\n# Suresh\n# Vibhuti` },
      { id: 41, title: "Program 41: Remove Punctuation From a String", description: "This program removes common punctuation marks from an input string.", code: `# define punctuation\npunctuations = '''!()-[]{};:'"\\,<>./?@#$%^&*_~'''\n\nmy_str = input("Enter a string: ")\nno_punct = ""\nfor char in my_str:\n    if char not in punctuations:\n        no_punct = no_punct + char\nprint(no_punct)\n\n# Example Interaction:\n# Enter a string: Hello!!!, he said ---and went\n# Hello he said and went` },
      { id: 60, title: "Program 60: Find Words Greater Than Given Length K", description: "This program identifies and returns a list of words from a given list that have a length greater than a specified value 'k'.", code: `def find_words(words, k):\n    result = []\n    for i in words:\n        if len(i) > k:\n            result.append(i)\n    return result\n\nword_list = ["apple", "banana", "cherry", "date", "elderberry", "dragon fruit"]\nk = 5\nlong_words = find_words(word_list, k)\nprint(f"Words longer than {k} characters: {long_words}")\n\n# Expected Output:\n# Words longer than 5 characters: ['banana', 'cherry', 'elderberry', 'dragon fruit']` },
      { id: 61, title: "Program 61: Removing I-th Character from a String", description: "This program removes the character at a specific (i-th) index from an input string.", code: `def remove_char(input_str, i):\n    if i < 0 or i >= len(input_str):\n        print(f"Invalid index {i}. The string remains unchanged.")\n        return input_str\n    result_str = input_str[:i] + input_str[i + 1:]\n    return result_str\n\ninput_str = "Hello, wWorld!"\ni = 7\nnew_str = remove_char(input_str, i)\nprint(f"Original String: {input_str}")\nprint(f"String after removing {i}th character : {new_str}")\n\n# Expected Output:\n# Original String: Hello, wWorld!\n# String after removing 7th character : Hello, World!` },
      { id: 62, title: "Program 62: Split and Join a String", description: "This program demonstrates how to split a string into a list of words and then join the words back into a single string.", code: `input_str = "Python program to split and join a string"\nword_list = input_str.split()\nseparator = " "\noutput_str = separator.join(word_list)\n\nprint("Original String:", input_str)\nprint("List of split Words:", word_list)\nprint("Joined String:", output_str)\n\n# Expected Output:\n# Original String: Python program to split and join a string\n# List of split Words: ['Python', 'program', 'to', 'split', 'and', 'join', 'a', 'string']\n# Joined String: Python program to split and join a string` },
      { id: 64, title: "Program 64: Find Uncommon Words from Two Strings", description: "This program finds words that are present in one string but not in the other, and vice versa (uncommon words).", code: `def uncommon_words(str1, str2):\n    words1 = set(str1.split())\n    words2 = set(str2.split())\n    uncommon_words_set = words1.symmetric_difference(words2)\n    uncommon_words_list = list(uncommon_words_set)\n    return uncommon_words_list\n\nstring1 = "This is the first string"\nstring2 = "This is the second string"\nuncommon = uncommon_words(string1, string2)\nprint("Uncommon words:", uncommon)\n\n# Expected Output:\n# Uncommon words: ['second', 'first']` },
      { id: 65, title: "Program 65: Find All Duplicate Characters in String", description: "This program identifies and lists all characters that appear more than once (duplicates) in an input string.", code: `def find_duplicates(input_str):\n    char_count = {}\n    duplicates = []\n    for i in input_str:\n        if i in char_count:\n            char_count[i] += 1\n        else:\n            char_count[i] = 1\n\n    for i, count in char_count.items():\n        if count > 1:\n            duplicates.append(i)\n\n    return duplicates\n\ninput_string = "piyush sharma"\nduplicate_chars = find_duplicates(input_string)\nprint("Duplicate characters:", duplicate_chars)\n\n# Expected Output:\n# Duplicate characters: ['s', 'h', 'a']` },
      { id: 66, title: "Program 66: Check if String Contains Special Character", description: "This program uses regular expressions to check if a string contains any special characters.", code: `import re\ndef check_special_char(in_str):\n    pattern = r'[!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\/\\\'"\\-=]'\n    if re.search(pattern, in_str):\n        return True\n    else:\n        return False\n\ninput_string = str(input("Enter a string: "))\ncontains_special = check_special_char(input_string)\nif contains_special:\n    print("The string contains special characters.")\nelse:\n    print("The string does not contain special characters.")\n\n# Example Interaction:\n# Enter a string: "Hello, World!"\n# The string contains special characters.` },
      { id: 72, title: "Program 72: Check Order of Character in String (OrderedDict)", description: "This program checks if the characters in an input string appear in the same order as they do in a reference string, using `collections.OrderedDict`.", code: `from collections import OrderedDict\ndef check_order(string, reference):\n    string_dict = OrderedDict.fromkeys(string)\n    reference_dict = OrderedDict.fromkeys(reference)\n    return string_dict == reference_dict\n\ninput_string = "hello world"\nreference_string = "helo wrd"\n\nif check_order(input_string, reference_string):\n    print("The order of characters in the input string matches the reference string.")\nelse:\n    print("The order of characters in the input string does not match the reference string.")\n\n# Expected Output:\n# The order of characters in the input string matches the reference string.` },
      { id: 76, title: "Program 76: Sort Words Alphabetically from Comma-Separated Input", description: "This program takes a comma-separated sequence of words, sorts them alphabetically, and prints them in a comma-separated sequence.", code: `input_sequence = input("Enter a comma-separated sequence of words: ")\nwords = input_sequence.split(',')\nsorted_words = sorted(words)\nsorted_sequence = ','.join(sorted_words)\nprint("Sorted words:", sorted_sequence)\n\n# Example Interaction:\n# Enter a comma-separated sequence of words: without,hello,bag,world\n# Sorted words: bag,hello,world,without` },
      { id: 77, title: "Program 77: Remove Duplicate Words and Sort Alphanumerically", description: "This program accepts a sequence of whitespace-separated words, removes duplicates, and prints the unique words sorted alphanumerically.", code: `input_sequence = input("Enter a sequence of whitespace-separated words: ")\nwords = set(input_sequence.split())\nsorted_words = sorted(words)\nresult = ' '.join(sorted_words)\nprint("Result:", result)\n\n# Example Interaction:\n# Enter a sequence of whitespace-separated words: hello world and practice makes perfect and hello world again\n# Result: again and hello makes perfect practice world` },
      { id: 79, title: "Program 79: Calculate Letters and Digits in Sentence", description: "This program takes a sentence as input and calculates the number of letters and digits present in it.", code: `sentence = input("Enter a sentence: ")\nletter_count = 0\ndigit_count = 0\nfor char in sentence:\n    if char.isalpha():\n        letter_count += 1\n    elif char.isdigit():\n        digit_count += 1\n\nprint("LETTERS", letter_count)\nprint("DIGITS", digit_count)\n\n# Example Interaction:\n# Enter a sentence: hello world! 123\n# LETTERS 10\n# DIGITS 3` },
      { id: 80, title: "Program 80: Validate Password Criteria", description: "This program validates passwords based on a set of criteria: minimum/maximum length, at least one lowercase letter, uppercase letter, number, and special character.", code: `import re\ndef is_valid_password(password):\n    if not (6 <= len(password) <= 12):\n        return False\n    if not re.search(r"[a-z]", password):\n        return False\n    if not re.search(r"[A-Z]", password):\n        return False\n    if not re.search(r"[0-9]", password):\n        return False\n    if not re.search(r"[$#@]", password):\n        return False\n    return True\n\npasswords = input("Enter passwords separated by commas: ").split(',')\nvalid_passwords = []\nfor psw in passwords:\n    if is_valid_password(psw):\n        valid_passwords.append(psw)\n\nprint(','.join(valid_passwords))\n\n# Example Interaction:\n# Enter passwords separated by commas: ABd1234@1,a F1#,2w3E*,2We3345\n# ABd1234@1` },
      { id: 84, title: "Program 84: Generate Sentences", description: "This program generates all possible sentences by combining predefined subjects, verbs, and objects.", code: `subjects = ["I", "You"]\nverbs = ["Play", "Love"]\nobjects = ["Hockey", "Football"]\nsentences = []\n\nfor sub in subjects:\n    for vrb in verbs:\n        for obj in objects:\n            sentence = f"{sub} {vrb} {obj}."\n            sentences.append(sentence)\n\nfor sentence in sentences:\n    print(sentence)\n\n# Expected Output:\n# I Play Hockey.\n# I Play Football.\n# I Love Hockey.\n# I Love Football.\n# You Play Hockey.\n# You Play Football.\n# You Love Hockey.\n# You Love Football.` },
      { id: 90, title: "Program 90: Print Username from Email", description: "This program extracts and prints the username part of an email address (assuming 'username@companyname.com' format).", code: `def extract_username(email):\n    parts = email.split('@')\n    if len(parts) == 2:\n        return parts[0]\n    else:\n        return "Invalid email format"\n\ntry:\n    email = input("Enter an email address: ")\n    username = extract_username(email)\n    print(username)\nexcept ValueError:\n    print("Invalid input. Please enter a valid email address.")\n\n# Example Interaction:\n# Enter an email address: john@google.com\n# john` },
      { id: 92, title: "Program 92: Stutter a Word", description: "This program creates a function that 'stutters' a word by repeating its first two letters twice, followed by an ellipsis and a question mark.", code: `def stutter(word):\n    if len(word) < 2:\n        return "Word must be at least two characters long."\n    stuttered_word = f"{word[:2]}... {word[:2]}... {word}?"\n    return stuttered_word\n\nprint(stutter("incredible"))   # "in... in... incredible?"\nprint(stutter("enthusiastic")) # "en... en... enthusiastic?"\nprint(stutter("outstanding"))  # "ou... ou... outstanding?"` },
      { id: 99, title: "Program 99: Replace Vowels in String", description: "This program replaces all vowels (a, e, i, o, u) in a string with a specified character.", code: `def replace_vowels(string, char):\n    vowels = "AEIOUaeiou"\n    result = ""\n    for c in string:\n        if c in vowels:\n            result += char\n        else:\n            result += c\n    return result\n\nprint(vow_replace("the aardvark", "#"))   # "th# ##rdv#rk"\nprint(vow_replace("minnie mouse", "?"))   # "m?nn?? m??s?"\nprint(vow_replace("shakespeare", "*")) # "sh*k*sp**r*"` },
      { id: 101, title: "Program 101: Hamming Distance", description: "This program computes the Hamming distance between two strings of equal length, which is the number of positions at which the corresponding symbols are different.", code: `def hamming_distance(str1, str2):\n    if len(str1) != len(str2):\n        raise ValueError("Input strings must have the same length")\n    distance = 0\n    for i in range(len(str1)):\n        if str1[i] != str2[i]:\n            distance += 1\n    return distance\n\nprint(hamming_distance("abcde", "bcdef")) # 5\nprint(hamming_distance("abcde", "abcde")) # 0\nprint(hamming_distance("strong", "strung")) # 1` },
      { id: 103, title: "Program 103: Reverser (Reverse String with Opposite Case)", description: "This program takes a string, reverses its order, and converts the case of each character (uppercase to lowercase, lowercase to uppercase).", code: `def reverse(input_str):\n    return input_str[::-1].swapcase()\n\nprint(reverse("Hello World")) # "DLROw OLLEh"\nprint(reverse("ReVeRsE"))     # "eSrEvEr"\nprint(reverse("Radar"))       # "RADAr"` },
      { id: 107, title: "Program 107: Double Characters in String", description: "This program takes a string and returns a new string in which each character is repeated once.", code: `def double_char(input_str):\n    doubled_str = ""\n    for char in input_str:\n        doubled_str += char * 2\n    return doubled_str\n\nprint(double_char("String"))       # "SSttrriinngg"\nprint(double_char("Hello World!")) # "HHeelllloo WWoorrlldd!!"\nprint(double_char("1234! "))      # "11223344!!  "` },
      { id: 110, title: "Program 110: Indices of Capital Letters", description: "This program returns an ordered list containing the indices of all capital letters in a given string.", code: `def index_of_caps(word):\n    return [i for i, char in enumerate(word) if char.isupper()]\n\nprint(index_of_caps("eDaBiT")) # [1, 3, 5]\nprint(index_of_caps("eQuINoX")) # [1, 3, 4, 6]\nprint(index_of_caps("determine")) # []\nprint(index_of_caps("STRIKE")) # [0, 1, 2, 3, 4, 5]\nprint(index_of_caps("sUn")) # [1]` },
      { id: 119, title: "Program 119: Alphabet Soup (Sort String Letters)", description: "This program takes a string and returns a new string with its letters sorted in alphabetical order.", code: `def alphabet_soup(txt):\n    return ''.join(sorted(txt))\n\nprint(alphabet_soup("hello")) # "ehllo"\nprint(alphabet_soup("edabit")) # "abdeit"\nprint(alphabet_soup("hacker")) # "acehkr"\nprint(alphabet_soup("geek")) # "eegk"\nprint(alphabet_soup("javascript")) # "aacijprstv"` },
      { id: 124, title: "Program 124: Secret Society Name", description: "This program creates a 'secret society' name by taking the first letter of each name in a list, sorted alphabetically, and joining them.", code: `def society_name(names):\n    secret_name = ''.join(sorted([name[0] for name in names]))\n    return secret_name\n\nprint(society_name(["Adam", "Sarah", "Malcolm"])) # "AMS"\nprint(society_name(["Harry", "Newt", "Luna", "Cho"])) # "CHLN"\nprint(society_name(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) # "CJMPRR"` },
      { id: 125, title: "Program 125: Isogram Check", description: "This program checks if a word is an 'isogram' (a word with no duplicate letters), ignoring letter case.", code: `def is_isogram(word):\n    word = word.lower()\n    unique_letters = set()\n    for letter in word:\n        if letter in unique_letters:\n            return False\n        unique_letters.add(letter)\n    return True\n\nprint(is_isogram("Algorism")) # True\nprint(is_isogram("PasSword")) # False\nprint(is_isogram("Consecutive")) # False` },
      { id: 126, title: "Program 126: Check if String Characters are in Order", description: "This program checks if the characters in a given string are in alphabetical or numerical order.", code: `def is_in_order(s):\n    return s == ''.join(sorted(s))\n\nprint(is_in_order("abc")) # True\nprint(is_in_order("edabit")) # False\nprint(is_in_order("123")) # True\nprint(is_in_order("xyzz")) # True` },
      { id: 127, title: "Program 127: Check if Number is Symmetrical", description: "This program determines if a number is symmetrical, meaning it reads the same forwards and backwards (like a palindrome).", code: `def is_symmetrical(num):\n    num_str = str(num)\n    return num_str == num_str[::-1]\n\nprint(is_symmetrical(7227)) # True\nprint(is_symmetrical(12567)) # False\nprint(is_symmetrical(44444444)) # True\nprint(is_symmetrical(9939)) # False\nprint(is_symmetrical(1112111)) # True` },
      { id: 128, title: "Program 128: Product of Numbers from Comma-Separated String", description: "This program takes a string of numbers separated by comma and space, converts them to integers, and returns their product.", code: `def multiply_nums(nums_str):\n    nums = [int(num) for num in nums_str.split(", ")]\n    result = 1\n    for num in nums:\n        result *= num\n    return result\n\nprint(multiply_nums("2, 3")) # 6\nprint(multiply_nums("1, 2, 3, 4")) # 24\nprint(multiply_nums("54, 75, 453, 0")) # 0\nprint(multiply_nums("10, -2")) # -20` },
      { id: 129, title: "Program 129: Square Every Digit of a Number", description: "This program takes an integer and returns a new integer where every digit of the original number has been squared and concatenated.", code: `def square_digits(n):\n    num_str = str(n)\n    result_str = ""\n    for digit in num_str:\n        squared_digit = int(digit) ** 2\n        result_str += str(squared_digit)\n    return int(result_str)\n\nprint(square_digits(9119)) # 811181\nprint(square_digits(2483)) # 416649\nprint(square_digits(3212)) # 9414` },
      { id: 139, title: "Program 139: Create Lowercase/Uppercase Dictionary", description: "This program creates a dictionary where each key-value pair is the lowercase and uppercase version of a letter, respectively.", code: `def mapping(letters):\n    result = {}\n    for letter in letters:\n        result[letter] = letter.upper()\n    return result\n\nprint(mapping(["p", "s"])) # {'p': 'P', 's': 'S'}\nprint(mapping(["a", "b", "c"])) # {'a': 'A', 'b': 'B', 'c': 'C'}\nprint(mapping(["a", "v", "y", "z"])) # {'a': 'A', 'v': 'V', 'y': 'Y', 'z': 'Z'}` },
      { id: 140, title: "Program 140: Replace Vowels in a String (Specified Vowel)", description: "This program replaces all vowels (a, e, i, o, u) in a string with a specified vowel. (Y is not considered a vowel).", code: `def vow_replace(string, vowel):\n    vowels = "aeiou"\n    result = ""\n    for char in string:\n        if char in vowels:\n            result += vowel\n        else:\n            result += char\n    return result\n\nprint(vow_replace("apples and bananas", "u")) # "upplus und bununus"\nprint(vow_replace("cheese casserole", "o")) # "chooso cossorolo"\nprint(vow_replace("stuffed jalapeno poppers", "e") # "steffed jelepene peppers"` },
      { id: 141, title: "Program 141: ASCII Capitalize", description: "This program capitalizes a letter if its ASCII code is even and returns its lowercase version if its ASCII code is odd.", code: `def ascii_capitalize(input_str):\n    result = ""\n    for char in input_str:\n        if ord(char) % 2 == 0:\n            result += char.upper()\n        else:\n            result += char.lower()\n    return result\n\nprint(ascii_capitalize("to be or not to be!")) # "To Be oR NoT To Be!"\nprint(ascii_capitalize("THE LITTLE MERMAID")) # "THe LiTTLe meRmaiD"\nprint(ascii_capitalize("Oh what a beautiful morning.")) # "oH wHaT a BeauTiFuL moRNiNg."` },
    ]
  },
  {
    category: "Dictionary Operations",
    programs: [
      { id: 67, title: "Program 67: Extract Unique Dictionary Values", description: "This program extracts all unique values from a given dictionary.", code: `# Sample dictionary\nmy_dict = {\n    'a': 10,\n    'b': 20,\n    'c': 10,\n    'd': 30,\n    'e': 20\n}\n\nuni_val = set() # Initialize an empty set to store unique values\n\nfor i in my_dict.values():\n    uni_val.add(i)\n\nunique_values_list = list(uni_val)\nprint("Unique values in the dictionary:", unique_values_list)\n\n# Expected Output:\n# Unique values in the dictionary: [10, 20, 30] (Order may vary due to set)` },
      { id: 68, title: "Program 68: Sum of All Items in a Dictionary", description: "This program calculates the sum of all numerical values in a dictionary.", code: `# Sample dictionary\nmy_dict = {\n    'a': 10,\n    'b': 20,\n    'c': 30,\n    'd': 40,\n    'e': 50\n}\n\ntotal_sum = 0\nfor i in my_dict.values():\n    total_sum += i\n\nprint("Sum of all items in the dictionary:", total_sum)\n\n# Expected Output:\n# Sum of all items in the dictionary: 150` },
      { id: 69, title: "Program 69: Merging Two Dictionaries", description: "This program demonstrates two methods to merge two dictionaries in Python: using `update()` and dictionary unpacking (`**`).", code: `# 1. Using the update() method:\ndict1 = {'a': 1, 'b': 2}\ndict2 = {'c': 3, 'd': 4}\ndict1.update(dict2)\nprint("Merged Dictionary (using update()):", dict1)\n\n# 2. Using dictionary unpacking\ndict3 = {'a': 1, 'b': 2}\ndict4 = {'c': 3, 'd': 4}\nmerged_dict = {**dict3, **dict4}\nprint("Merged Dictionary (using dictionary unpacking):", merged_dict)\n\n# Expected Output:\n# Merged Dictionary (using update()): {'a': 1, 'b': 2, 'c': 3, 'd': 4}\n# Merged Dictionary (using dictionary unpacking): {'a': 1, 'b': 2, 'c': 3, 'd': 4}` },
      { id: 70, title: "Program 70: Convert Key-Values List to Flat Dictionary", description: "This program converts a list of key-value tuples into a flat dictionary.", code: `key_values_list = [('a', 1), ('b', 2), ('c', 3), ('d', 4)]\n\nflat_dict = {}\nfor key, value in key_values_list:\n    flat_dict[key] = value\n\nprint("Flat Dictionary:", flat_dict)\n\n# Expected Output:\n# Flat Dictionary: {'a': 1, 'b': 2, 'c': 3, 'd': 4}` },
      { id: 71, title: "Program 71: Insertion at Beginning in OrderedDict", description: "This program demonstrates how to insert a new item at the beginning of an `OrderedDict`.", code: `from collections import OrderedDict\n\nordered_dict = OrderedDict([('b', 2), ('c', 3), ('d', 4)])\nnew_item = ('a', 1)\n\nnew_ordered_dict = OrderedDict([new_item])\nnew_ordered_dict.update(ordered_dict)\n\nprint("Updated OrderedDict:", new_ordered_dict)\n\n# Expected Output:\n# Updated OrderedDict: OrderedDict([('a', 1), ('b', 2), ('c', 3), ('d', 4)])` },
      { id: 73, title: "Program 73: Sort Python Dictionaries by Key or Value", description: "This program shows how to sort a Python dictionary either by its keys (alphabetically) or by its values.", code: `# Sort by Keys:\nsample_dict = {'apple': 3, 'banana': 1, 'cherry': 2, 'date': 4}\nsorted_dict_by_keys = dict(sorted(sample_dict.items()))\nprint("Sorted by keys:")\nfor key, value in sorted_dict_by_keys.items():\n    print(f"{key}: {value}")\n\n# Expected Output (by keys):\n# apple: 3\n# banana: 1\n# cherry: 2\n# date: 4\n\n# Sort by values:\nsample_dict_val = {'apple': 3, 'banana': 1, 'cherry': 2, 'date': 4}\nsorted_dict_by_values = dict(sorted(sample_dict_val.items(), key=lambda item: item[1]))\nprint("\\nSorted by values:")\nfor key, value in sorted_dict_by_values.items():\n    print(f"{key}: {value}")\n\n# Expected Output (by values):\n# banana: 1\n# cherry: 2\n# apple: 3\n# date: 4` },
      { id: 82, title: "Program 82: Compute Word Frequency", description: "This program computes the frequency of words from an input sentence, handling punctuation and case, and then prints the frequencies sorted alphabetically by word.", code: `input_sentence = input("Enter a sentence: ")\nwords = input_sentence.split()\nword_freq = {}\n\nfor word in words:\n    word = word.strip('.,?')\n    word = word.lower()\n    if word in word_freq:\n        word_freq[word] += 1\n    else:\n        word_freq[word] = 1\n\nsorted_words = sorted(word_freq.items())\n\nfor word, frequency in sorted_words:\n    print(f"{word}:{frequency}")\n\n# Example Interaction:\n# Enter a sentence: New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.\n# 2:2\n# 3:2\n# and:1\n# between:1\n# choosing:1\n# new:1\n# or:2\n# python:5\n# read:1\n# to:1` },
      { id: 118, title: "Program 118: Sum of People's Budgets", description: "This program calculates the total budget from a list of dictionaries, where each dictionary represents a person with a 'budget' key.", code: `def get_budgets(lst):\n    total_budget = sum(person['budget'] for person in lst)\n    return total_budget\n\nbudgets1 = [\n    {'name': 'John', 'age': 21, 'budget': 23000},\n    {'name': 'Steve', 'age': 32, 'budget': 40000},\n    {'name': 'Martin', 'age': 16, 'budget': 2700}\n]\nbudgets2 = [\n    {'name': 'John', 'age': 21, 'budget': 29000},\n    {'name': 'Steve', 'age': 32, 'budget': 32000},\n    {'name': 'Martin', 'age': 16, 'budget': 1600}\n]\n\nprint(get_budgets(budgets1)) # 65700\nprint(get_budgets(budgets2)) # 62600` },
      { id: 138, title: "Program 138: Convert Dictionary to List of Key-Value Tuples", description: "This program converts a dictionary into a list of (key, value) tuples, sorted alphabetically by key.", code: `def dict_to_list(input_dict):\n    sorted_dict = sorted(input_dict.items())\n    result = [(key, value) for key, value in sorted_dict]\n    return result\n\nprint(dict_to_list({\n    "D": 1,\n    "B": 2,\n    "C": 3\n})) # [('B', 2), ('C', 3), ('D', 1)]\n\nprint(dict_to_list({\n    "likes": 2,\n    "dislikes": 3,\n    "followers": 10\n})) # [('dislikes', 3), ('followers', 10), ('likes', 2)]` },
    ]
  },
  {
    category: "Classes & Objects",
    programs: [
      { id: 81, title: "Program 81: Class with Generator (Divisible by 7)", description: "This program defines a class with a generator method that iterates and yields numbers divisible by 7 within a specified range (0 to n).", code: `class DivisibleBySeven:\n    def __init__(self, n):\n        self.n = n\n\n    def generate_divisible_by_seven(self):\n        for num in range(self.n + 1):\n            if num % 7 == 0:\n                yield num\n\nn = int(input("Enter your desired range: "))\ndivisible_by_seven_generator = DivisibleBySeven(n).generate_divisible_by_seven()\nfor num in divisible_by_seven_generator:\n    print(num)\n\n# Example Interaction:\n# Enter your desired range: 50\n# 0\n# 7\n# ...\n# 49` },
      { id: 83, title: "Program 83: Person Class and Subclasses", description: "This program defines a base class `Person` and two child classes `Male` and `Female`, each with a `getGender` method that returns their respective gender.", code: `class Person:\n    def getGender(self):\n        return "Unknown"\n\nclass Male(Person):\n    def getGender(self):\n        return "Male"\n\nclass Female(Person):\n    def getGender(self):\n        return "Female"\n\nperson = Person()\nmale = Male()\nfemale = Female()\n\nprint(person.getGender()) # Unknown\nprint(male.getGender())   # Male\nprint(female.getGender()) # Female` },
      { id: 91, title: "Program 91: Shape Class and Square Subclass", description: "This program defines a base `Shape` class with a default area of 0, and a `Square` subclass that takes a length and calculates its area.", code: `class Shape:\n    def __init__(self):\n        pass\n    def area(self):\n        return 0\n\nclass Square(Shape):\n    def __init__(self, length):\n        super().__init__()\n        self.length = length\n    def area(self):\n        return self.length ** 2\n\nshape = Shape()\nsquare = Square(float(input("Enter the side length of the square: ")))\n\nprint("Shape's area by default:", shape.area()) # 0\nprint("Area of the square:", square.area())   # e.g., for 5, outputs 25.0` },
      { id: 134, title: "Program 134: Circle Constructor with Area and Perimeter", description: "This program defines a `Circle` class with a constructor that takes a radius, and methods (`getArea`, `getPerimeter`) to calculate and return the circle's area and circumference, rounded to the nearest integer.", code: `import math\n\nclass Circle:\n    def __init__(self, radius):\n        self.radius = radius\n\n    def getArea(self):\n        return round(math.pi * self.radius**2)\n\n    def getPerimeter(self):\n        return round(2 * math.pi * self.radius)\n\ncircy = Circle(11)\nprint(circy.getArea()) # Should return 380\nprint(circy.getPerimeter()) # Should return 69\n\ncircy = Circle(4.44)\nprint(circy.getArea()) # Should return 62\nprint(circy.getPerimeter()) # Should return 28` },
    ]
  },
  {
    category: "Algorithms & Logic",
    programs: [
      { id: 86, title: "Program 86: Binary Search Function", description: "This program implements a binary search function to find the index of an item in a sorted list efficiently.", code: `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n\nsorted_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]\ntarget_element = 4\nresult = binary_search(sorted_list, target_element)\n\nif result != -1:\n    print(f"Element {target_element} found at index {result}")\nelse:\n    print(f"Element {target_element} not found in the list")\n\n# Expected Output:\n# Element 4 found at index 3` },
      { id: 98, title: "Program 98: Check Inequality Expression", description: "This program evaluates if a given inequality expression (e.g., '3 < 7 < 11') is correct and returns True or False.", code: `def correct_signs(expression):\n    try:\n        return eval(expression)\n    except:\n        return False\n\nprint(correct_signs("3 < 7 < 11")) # True\nprint(correct_signs("13 > 44 > 33 < 1")) # False\nprint(correct_signs("1 < 2 < 6 < 9 > 3")) # True` },
      { id: 108, title: "Program 108: Reverse Boolean / Type Check", description: "This program reverses a boolean value (True to False, False to True) or returns 'boolean expected' if the input is not a boolean type.", code: `def reverse(value):\n    if isinstance(value, bool):\n        return not value\n    else:\n        return "boolean expected"\n\nprint(reverse(True))   # False\nprint(reverse(False))  # True\nprint(reverse(0))      # "boolean expected"\nprint(reverse(None))   # "boolean expected"` },
      { id: 137, title: "Program 137: Amount of Equal Integers", description: "This program takes three integer arguments (a, b, c) and returns the count of integers that have equal values (0, 2, or 3).", code: `def equal(a, b, c):\n    if a == b == c:\n        return 3\n    elif a == b or b == c or a == c:\n        return 2\n    else:\n        return 0\n\nprint(equal(3, 4, 3)) # 2\nprint(equal(1, 1, 1)) # 3\nprint(equal(3, 4, 1)) # 0` },
    ]
  },
  {
    category: "Matrix Operations",
    programs: [
      { id: 37, title: "Program 37: Add Two Matrices", description: "This program adds two matrices of the same dimensions.", code: `# Function to add two matrices\ndef add_matrices(mat1, mat2):\n    if len(mat1) != len(mat2) or len(mat1[0]) != len(mat2[0]):\n        return "Matrices must have the same dimensions for addition"\n\n    result = []\n    for i in range(len(mat1)):\n        row = []\n        for j in range(len(mat1[0])):\n            row.append(mat1[i][j] + mat2[i][j])\n        result.append(row)\n\n    return result\n\nmatrix1 = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\nmatrix2 = [\n    [9, 8, 7],\n    [6, 5, 4],\n    [3, 2, 1]\n]\n\nresult_matrix = add_matrices(matrix1, matrix2)\n\nif isinstance(result_matrix, str):\n    print(result_matrix)\nelse:\n    print("Sum of matrices:")\n    for row in result_matrix:\n        print(row)\n\n# Expected Output:\n# Sum of matrices:\n# [10, 10, 10]\n# [10, 10, 10]\n# [10, 10, 10]` },
      { id: 38, title: "Program 38: Multiply Two Matrices", description: "This program multiplies two matrices. It checks for compatibility of dimensions before performing the multiplication.", code: `# Function to multiply two matrices\ndef multiply_matrices(mat1, mat2):\n    rows1 = len(mat1)\n    cols1 = len(mat1[0])\n    rows2 = len(mat2)\n    cols2 = len(mat2[0])\n\n    if cols1 != rows2:\n        return "Matrix multiplication is not possible. Number of columns in first matrix must be equal to number of rows in second."\n\n    result = [[0 for _ in range(cols2)] for _ in range(rows1)]\n\n    for i in range(rows1):\n        for j in range(cols2):\n            for k in range(cols1):\n                result[i][j] += mat1[i][k] * mat2[k][j]\n    return result\n\nmatrix1 = [[1, 2, 3],\n           [4, 5, 6]]\nmatrix2 = [[7, 8],\n           [9, 10],\n           [11, 12]]\n\nresult_matrix = multiply_matrices(matrix1, matrix2)\n\nif isinstance(result_matrix, str):\n    print(result_matrix)\nelse:\n    print("Result of matrix multiplication:")\n    for row in result_matrix:\n        print(row)\n\n# Expected Output:\n# Result of matrix multiplication:\n# [58, 64]\n# [139, 154]` },
      { id: 39, title: "Program 39: Transpose a Matrix", description: "This program transposes a given matrix, swapping its rows and columns.", code: `# Function to transpose a matrix\ndef transpose_matrix(matrix):\n    rows, cols = len(matrix), len(matrix[0])\n    result = [[0 for _ in range(rows)] for _ in range(cols)]\n    for i in range(rows):\n        for j in range(cols):\n            result[j][i] = matrix[i][j]\n    return result\n\nmatrix = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\n\ntransposed_matrix = transpose_matrix(matrix)\n\nfor row in transposed_matrix:\n    print(row)\n\n# Expected Output:\n# [1, 4]\n# [2, 5]\n# [3, 6]` },
      { id: 75, title: "Program 75: Generate 2D Array (i*j)", description: "This program generates a 2-dimensional array (matrix) of size X by Y, where the element value at row 'i' and column 'j' is `i * j`.", code: `# Input two digits, X and Y\nX, Y = map(int, input("Enter two digits (X, Y): ").split(','))\n\narray = [[0 for j in range(Y)] for i in range(X)]\n\nfor i in range(X):\n    for j in range(Y):\n        array[i][j] = i * j\n\nfor row in array:\n    print(row)\n\n# Example Interaction:\n# Enter two digits (X, Y): 3,5\n# [0, 0, 0, 0, 0]\n# [0, 1, 2, 3, 4]\n# [0, 2, 4, 6, 8]` },
    ]
  },
];


// ThemeProvider component to manage theme state
const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [themeChosen, setThemeChosen] = useState(false); // Track if theme is chosen

  useEffect(() => {
    // Apply theme class to document element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Load theme from local storage on initial mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      setThemeChosen(true); // If theme is stored, assume chosen
    }
  }, []);

  const handleSetTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setThemeChosen(true);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme, themeChosen }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Initial Theme Selection Screen
const ThemeSelectionScreen = () => {
  const { handleSetTheme } = React.useContext(ThemeContext);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsAnimating(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-900 dark:to-black transition-all duration-700 ease-in-out">
      <div className={`text-center p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-2xl transition-all duration-700 ease-in-out ${isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight animate-bounce-in font-inter">
          Choose Your Canvas Theme
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => handleSetTheme('light')}
            className="flex-1 px-8 py-4 rounded-full bg-white text-gray-900 border-2 border-gray-300 shadow-lg
                       hover:bg-gray-100 hover:border-teal-400 transform hover:scale-105 transition-all duration-300
                       font-semibold text-xl group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun mr-3"><circle cx="12" cy="12" r="8"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>
              Light Mode
            </span>
          </button>
          <button
            onClick={() => handleSetTheme('dark')}
            className="flex-1 px-8 py-4 rounded-full bg-gray-800 text-white border-2 border-gray-700 shadow-lg
                       hover:bg-gray-700 hover:border-teal-400 transform hover:scale-105 transition-all duration-300
                       font-semibold text-xl group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-teal-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              Dark Mode
            </span>
          </button>
        </div>
      </div>
       <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fadeInScale 0.7s ease-out forwards;
        }
        @keyframes bounceIn {
          0% { transform: translateY(-50px); opacity: 0; }
          60% { transform: translateY(10px); opacity: 1; }
          80% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};


// Main Application Component
const AppContent = () => {
  const { theme, handleSetTheme } = React.useContext(ThemeContext);
  const sidebarRef = useRef(null);

  // State for LLM explanation and loading
  const [llmExplanation, setLlmExplanation] = useState('');
  const [isLoadingLlm, setIsLoadingLlm] = useState(false);
  const [showLlmExplanation, setShowLlmExplanation] = useState(false);

  // State for LLM generated test cases and loading
  const [llmTestCases, setLlmTestCases] = useState('');
  const [isLoadingTestCases, setIsLoadingTestCases] = useState(false);
  const [showLlmTestCases, setShowLlmTestCases] = useState(false);

  // State for Gemini chat interaction
  const [userQuery, setUserQuery] = useState('');
  const [geminiResponse, setGeminiResponse] = useState('');
  const [isLoadingGeminiChat, setIsLoadingGeminiChat] = useState(false);
  const [showGeminiChat, setShowGeminiChat] = useState(false);
  const chatResponseRef = useRef(null);


  // Memoize all programs into a flat array for efficient search and navigation
  const allProgramsFlat = React.useMemo(() => programsData.flatMap(categoryGroup => categoryGroup.programs), []);

  // State for the currently selected program, initialized with the first program if available
  const [selectedProgram, setSelectedProgram] = useState(() => allProgramsFlat[0] || null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for expanded categories, initialized to include the category of the first selected program
  const [expandedCategories, setExpandedCategories] = useState(() => {
    const initialExpanded = new Set();
    if (allProgramsFlat[0] && allProgramsFlat[0].category) {
      initialExpanded.add(allProgramsFlat[0].category);
    }
    return initialExpanded;
  });

  // Filter programs based on search term
  const filteredProgramsFlat = React.useMemo(() => {
    return allProgramsFlat.filter(program =>
      program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, allProgramsFlat]);

  // Group filtered programs back by category for display in the sidebar
  const filteredGroupedPrograms = React.useMemo(() => {
    return programsData.map(categoryGroup => {
      const filtered = categoryGroup.programs.filter(program =>
        filteredProgramsFlat.some(fp => fp.id === program.id)
      );
      return {
        ...categoryGroup,
        programs: filtered
      };
    }).filter(categoryGroup => categoryGroup.programs.length > 0);
  }, [filteredProgramsFlat]);

  // Effect to handle program selection when search results change
  useEffect(() => {
    // If the currently selected program is no longer in the filtered results,
    // select the first program from the new filtered list (or null if list is empty).
    if (selectedProgram && !filteredProgramsFlat.some(p => p.id === selectedProgram.id)) {
      setSelectedProgram(filteredProgramsFlat[0] || null);
      // If a new program is selected, ensure its category is expanded
      if (filteredProgramsFlat[0] && filteredProgramsFlat[0].category) {
        setExpandedCategories(prev => new Set(prev).add(filteredProgramsFlat[0].category));
      }
    } else if (!selectedProgram && filteredProgramsFlat.length > 0) {
      // If no program was selected initially (e.g., empty data at start), set the first one
      setSelectedProgram(filteredProgramsFlat[0]);
      if (filteredProgramsFlat[0].category) {
        setExpandedCategories(prev => new Set(prev).add(filteredProgramsFlat[0].category));
      }
    }
    // Reset LLM explanations, test cases and chat when program changes
    setLlmExplanation('');
    setShowLlmExplanation(false);
    setLlmTestCases('');
    setShowLlmTestCases(false);
    setGeminiResponse('');
    setUserQuery('');
    setShowGeminiChat(false);
  }, [searchTerm, filteredProgramsFlat, selectedProgram]); // Dependencies ensure this runs when search or filter changes

  // Handle program click
  const handleProgramClick = useCallback((program) => {
    setSelectedProgram(program);
    setIsMobileMenuOpen(false); // Close menu on selection for mobile
  }, []);

  // Handle next/previous program navigation
  const navigateProgram = useCallback((direction) => {
    if (!selectedProgram || filteredProgramsFlat.length === 0) return;

    const currentIndex = filteredProgramsFlat.findIndex(p => p.id === selectedProgram.id);
    let newIndex = currentIndex;

    if (direction === 'next') {
      newIndex = Math.min(currentIndex + 1, filteredProgramsFlat.length - 1);
    } else if (direction === 'prev') {
      newIndex = Math.max(currentIndex - 1, 0);
    }

    if (newIndex !== currentIndex) {
      const newProgram = filteredProgramsFlat[newIndex];
      // Automatically expand the category of the new program if not already expanded
      if (newProgram.category && !expandedCategories.has(newProgram.category)) {
        setExpandedCategories(prev => new Set(prev).add(newProgram.category));
      }
      handleProgramClick(newProgram); // Use the memoized handler
    }
  }, [selectedProgram, filteredProgramsFlat, expandedCategories, handleProgramClick]);


  // Toggle category expansion
  const toggleCategoryExpansion = useCallback((categoryName) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  }, []);

  // Click outside to close sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isMobileMenuOpen &&
          !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle copy code to clipboard
  const handleCopyCode = useCallback(() => {
    if (selectedProgram?.code) {
      const el = document.createElement('textarea');
      el.value = selectedProgram.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      const copyMessage = document.getElementById('copy-message');
      if (copyMessage) {
        copyMessage.classList.remove('hidden', 'opacity-0');
        copyMessage.classList.add('opacity-100');
        setTimeout(() => {
          copyMessage.classList.remove('opacity-100');
          copyMessage.classList.add('opacity-0');
          // Give it a moment to fade out before hiding completely
          setTimeout(() => {
            copyMessage.classList.add('hidden');
          }, 300);
        }, 2000);
      }
    }
  }, [selectedProgram]);

  // Handle Generate LLM Explanation
  const handleGenerateExplanation = useCallback(async () => {
    if (!selectedProgram) return;

    setIsLoadingLlm(true);
    setLlmExplanation('');
    setShowLlmExplanation(true); // Always show section when generating

    try {
      const prompt = `Explain the following Python program in detail. Include a high-level summary and then a line-by-line breakdown. Focus on clarity and educational value.
      \nProgram Title: ${selectedProgram.title}
      \nProgram Description: ${selectedProgram.description}
      \nPython Code:\n\`\`\`python\n${selectedProgram.code}\n\`\`\``;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setLlmExplanation(text);
      } else {
        setLlmExplanation('Failed to generate explanation. Please try again.');
        console.error('Gemini API response structure unexpected:', result);
      }
    } catch (error) {
      setLlmExplanation('An error occurred while fetching the explanation: ' + error.message);
      console.error('Error calling Gemini API:', error);
    } finally {
      setIsLoadingLlm(false);
    }
  }, [selectedProgram]);

  // Handle Generate LLM Test Cases
  const handleGenerateTestCases = useCallback(async () => {
    if (!selectedProgram) return;

    setIsLoadingTestCases(true);
    setLlmTestCases('');
    setShowLlmTestCases(true); // Always show section when generating

    try {
      const prompt = `Generate 3-5 diverse test cases (input and expected output) for the following Python program.
      Present each test case clearly with 'Input:' and 'Expected Output:'. If the program involves user input via 'input()', specify the exact input string. If it's a function, provide function call arguments.

      Program Title: ${selectedProgram.title}
      Program Description: ${selectedProgram.description}
      Python Code:\n\`\`\`python\n${selectedProgram.code}\n\`\`\``;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setLlmTestCases(text);
      } else {
        setLlmTestCases('Failed to generate test cases. Please try again.');
        console.error('Gemini API response structure unexpected:', result);
      }
    } catch (error) {
      setLlmTestCases('An error occurred while fetching the test cases: ' + error.message);
      console.error('Error calling Gemini API:', error);
    } finally {
      setIsLoadingTestCases(false);
    }
  }, [selectedProgram]);

  // Handle Gemini Chat Query
  const handleGeminiChat = useCallback(async () => {
    if (!userQuery.trim() || !selectedProgram) return;

    setIsLoadingGeminiChat(true);
    setGeminiResponse('');
    setShowGeminiChat(true); // Always show chat section when initiating a query

    try {
      const prompt = `Given the following Python program, answer the user's question.
      \nProgram Title: ${selectedProgram.title}
      \nPython Code:\n\`\`\`python\n${selectedProgram.code}\n\`\`\`
      \nUser Question: ${userQuery}`;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });
      const payload = { contents: chatHistory };
      const apiKey = ""; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setGeminiResponse(text);
      } else {
        setGeminiResponse('Failed to get a response from Gemini. Please try again.');
        console.error('Gemini API response structure unexpected:', result);
      }
    } catch (error) {
      setGeminiResponse('An error occurred while communicating with Gemini: ' + error.message);
      console.error('Error calling Gemini API for chat:', error);
    } finally {
      setIsLoadingGeminiChat(false);
      // Scroll to the response after it's loaded
      setTimeout(() => {
        chatResponseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [userQuery, selectedProgram]);


  const currentIndex = filteredProgramsFlat.findIndex(p => p.id === selectedProgram?.id);
  const isFirstProgram = currentIndex === 0;
  const isLastProgram = currentIndex === filteredProgramsFlat.length - 1 || filteredProgramsFlat.length === 0;


  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-gray-950 dark:to-gray-900 font-inter text-gray-800 dark:text-white transition-colors duration-700 ease-in-out">
      {/* Sidebar for program list */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-72 bg-white dark:bg-gray-800 p-6 shadow-2xl lg:relative lg:translate-x-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out z-50 flex flex-col`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-teal-700 dark:text-teal-400">Python Zen</h2>
          {/* Theme Toggle Button in Sidebar for Mobile */}
          <button
            onClick={() => handleSetTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:scale-110 transition-transform duration-300 shadow-sm"
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="8"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
          <button
            className="lg:hidden p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search programs..."
            className="w-full p-3 pl-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 transition-all duration-300 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>

        {/* Program Categories (Dropdown) */}
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          {filteredGroupedPrograms.length === 0 && (
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">No programs found matching your search.</p>
          )}
          {filteredGroupedPrograms.map((categoryGroup) => (
            <div key={categoryGroup.category} className="mb-2">
              <button
                onClick={() => toggleCategoryExpansion(categoryGroup.category)}
                className="flex justify-between items-center w-full p-3 my-1 rounded-lg cursor-pointer
                           bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white
                           hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm"
              >
                <h3 className="font-bold text-lg">{categoryGroup.category}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucude-chevron-down transform transition-transform duration-300 ${expandedCategories.has(categoryGroup.category) ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {expandedCategories.has(categoryGroup.category) && (
                <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
                  {categoryGroup.programs.map((program) => (
                    <div
                      key={program.id}
                      className={`p-3 mb-1 rounded-lg cursor-pointer transition-all duration-250 ease-in-out
                        ${selectedProgram?.id === program.id
                          ? 'bg-gradient-to-r from-teal-600 to-emerald-700 text-white shadow-lg transform translate-x-1'
                          : 'bg-transparent hover:bg-teal-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:text-teal-600 dark:hover:text-teal-300'
                        }`}
                      onClick={() => handleProgramClick(program)}
                    >
                      <span className="font-medium text-base">{program.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-500" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}


      {/* Main Content Area */}
      <div className="flex-1 p-6 lg:p-8 flex flex-col z-10 overflow-hidden">
        {/* Mobile menu toggle button */}
        <button
          className="mobile-menu-button lg:hidden fixed top-6 left-6 p-3 rounded-full bg-teal-600 text-white shadow-lg z-30 transform hover:scale-110 transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>

        {selectedProgram ? (
          <div key={selectedProgram.id} // Key to force re-render/re-animation on selection change
            className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl flex-1 overflow-y-auto custom-scrollbar relative transform transition-opacity duration-500 ease-in-out opacity-100 group">
            {/* Pulsating background circle */}
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-teal-300/20 dark:bg-teal-600/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse-fade"></div>

            <h2 className="text-4xl font-extrabold mb-5 text-teal-800 dark:text-teal-300 leading-snug relative z-10">
              {selectedProgram.title}
            </h2>
            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-semibold mb-3 text-gray-700 dark:text-gray-200">Description:</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {selectedProgram.description}
              </p>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-3 text-gray-700 dark:text-gray-200">Python Code:</h3>
              <div className="relative">
                {/* Reverting to plain pre code block without syntax highlighter */}
                <pre className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl overflow-x-auto text-sm font-mono leading-relaxed whitespace-pre-wrap shadow-inner dark:shadow-md border border-gray-200 dark:border-gray-700 max-h-[60vh] custom-scrollbar">
                  <code>{selectedProgram.code}</code>
                </pre>
                <button
                  onClick={handleCopyCode}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-teal-600 text-white shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transform hover:scale-105 transition-all duration-300 opacity-90"
                  title="Copy code to clipboard"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
                </button>
                <div id="copy-message" className="absolute top-12 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md opacity-0 hidden transition-opacity duration-300">Copied!</div>
              </div>
            </div>

            {/* Gemini API Integrations Buttons */}
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 relative z-10 flex flex-wrap gap-4">
              <button
                onClick={handleGenerateExplanation}
                disabled={isLoadingLlm}
                className="flex items-center px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-900 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingLlm ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Explaining...
                  </>
                ) : (
                  <>
                    Explain Code ✨
                  </>
                )}
              </button>

              <button
                onClick={handleGenerateTestCases}
                disabled={isLoadingTestCases}
                className="flex items-center px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md bg-green-600 text-white hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingTestCases ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Test Cases...
                  </>
                ) : (
                  <>
                    Generate Test Cases ✨
                  </>
                )}
              </button>
            </div>


            {showLlmExplanation && (
              <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-inner border border-gray-200 dark:border-gray-700 animate-fade-in">
                <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">LLM Explanation:</h3>
                {llmExplanation ? (
                  <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-mono">
                    {llmExplanation}
                  </pre>
                ) : (
                  !isLoadingLlm && <p className="text-gray-500 dark:text-gray-400">No explanation generated yet. Click 'Explain Code ✨' to get one!</p>
                )}
              </div>
            )}

            {showLlmTestCases && (
              <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-inner border border-gray-200 dark:border-gray-700 animate-fade-in">
                <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200">LLM Generated Test Cases:</h3>
                {llmTestCases ? (
                  <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap font-mono">
                    {llmTestCases}
                  </pre>
                ) : (
                  !isLoadingTestCases && <p className="text-gray-500 dark:text-gray-400">No test cases generated yet. Click 'Generate Test Cases ✨' to get some!</p>
                )}
              </div>
            )}

            {/* Gemini Chat Interaction Section */}
            <div className="mt-6 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-inner border border-gray-200 dark:border-gray-700 animate-fade-in">
                <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-code mr-2 text-blue-500"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="m10 10-2 2 2 2"/><path d="m14 14 2-2-2-2"/></svg>
                    Ask Gemini about this Code:
                </h3>
                <textarea
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-y min-h-[80px] shadow-sm mb-4"
                    placeholder="E.g., 'What are the edge cases for this program?' or 'How can I optimize this code?'"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    rows="3"
                ></textarea>
                <button
                    onClick={handleGeminiChat}
                    disabled={isLoadingGeminiChat || !userQuery.trim()}
                    className="flex items-center px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoadingGeminiChat ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Asking Gemini...
                        </>
                    ) : (
                        <>
                            Ask Gemini 💬
                        </>
                    )}
                </button>

                {showGeminiChat && geminiResponse && (
                    <div ref={chatResponseRef} className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 shadow-md animate-fade-in-up">
                        <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">Gemini's Response:</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{geminiResponse}</p>
                    </div>
                )}
            </div>

            {/* Next/Previous Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 relative z-10">
              <button
                onClick={() => navigateProgram('prev')}
                disabled={isFirstProgram}
                className={`flex items-center px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md
                           ${isFirstProgram
                             ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                             : 'bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-900 transform hover:scale-105 active:scale-95'
                           }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left mr-2"><path d="m15 18-6-6 6-6"/></svg>
                Previous
              </button>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                Program {currentIndex + 1} of {filteredProgramsFlat.length}
              </span>
              <button
                onClick={() => navigateProgram('next')}
                disabled={isLastProgram}
                className={`flex items-center px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 shadow-md
                           ${isLastProgram
                             ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                             : 'bg-teal-600 text-white hover:bg-teal-700 dark:bg-teal-800 dark:hover:bg-teal-900 transform hover:scale-105 active:scale-95'
                           }`}
              >
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-center h-full">
            <p className="text-gray-500 dark:text-gray-400 text-xl font-semibold animate-pulse">Select a program from the left or search to get started.</p>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e2e8f0; /* Tailwind gray-200 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #94a3b8; /* Tailwind gray-400 */
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937; /* Tailwind gray-800 */
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563; /* Tailwind gray-600 */
        }
        @keyframes pulse-fade {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-fade {
          animation: pulse-fade 3s infinite ease-in-out;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

// Root App Component
const App = () => {
  const { themeChosen } = React.useContext(ThemeContext);

  return (
    <>
      <style>{`
        html {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      {themeChosen ? <AppContent /> : <ThemeSelectionScreen />}
    </>
  );
};

// Wrapper to provide ThemeContext to the entire app
const RootApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default RootApp;
