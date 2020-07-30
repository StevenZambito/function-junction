/**
 * 1) Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

const max = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }
}

/**
 * 2) Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

const maxOfThree = (num1, num2, num3) => {
  if (num1 < num3 && num2 < num3) {
    return num3
  } else if (num1 < num2 && num3 < num2) {
    return num2
  } else if (num2 < num1 && num3 < num1) {
    return num1
  }
}

/*
 * 3) Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (num1, num2) => {
  return num1 + num2
}

/*
 * 4) Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

const sumOfArray = nums => {
  return nums.reduce(function(a, b) {
    return a + b
  }, 0)
}
/**
 * 5) Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

const isVowel = str => {
  return (
    str === 'a' ||
    str === 'A' ||
    str === 'e' ||
    str === 'E' ||
    str === 'i' ||
    str === 'I' ||
    str === 'o' ||
    str === 'O' ||
    str === 'u' ||
    str === 'U' ||
    false
  )
}

/**
 * 6) Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */
const rovarspraket = str => {
  let answer = ''
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      answer += str[i]
    } else {
      answer += str[i] + 'o' + str[i]
    }
  }

  return answer
}
/**
 * 7) Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

const reverse = str => {
  return str
    .split('')
    .reverse()
    .join('')
}

/**
 * 8) Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

const findLongestWord = str => {
  let longest = ''
  let array = str.split(' ')
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) longest = array[i]
  }
  return longest
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'
const ensureDefined = (t, method) => {
  if (eval(`typeof ${method}`) !== 'function') {
    t.fail(
      `\n\n\n\n\n⚡️⚡️⚡️⚡️⚡️ The next step is to define the function ${method} ⚡️⚡️⚡️⚡️⚡️\n\n\n`
    )
  } else {
    t.pass()
  }
}
test('max()', t => {
  ensureDefined(t, 'max')
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
})

test('maxOfThree()', t => {
  ensureDefined(t, 'maxOfThree')

  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
})

test('sum()', t => {
  ensureDefined(t, 'sum')

  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', t => {
  ensureDefined(t, 'sumOfArray')

  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  ensureDefined(t, 'isVowel')

  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  ensureDefined(t, 'rovarspraket')

  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  ensureDefined(t, 'reverse')

  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  ensureDefined(t, 'findLongestWord')

  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
