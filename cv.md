1. Maksim Sudakov
2. +375336288128
3. My main goal is to complete Rolling Scopes courses successfully, to aplly given knowledge into practice. I am self-motivated, have a great desire and free time to learn everything connected with the software engineering. I always try to find out something new, to improve my skills and I am not satisfied with what already been achieved.
4. JS, HTML5, CSS3, Git, React Native.
5.

```
function nextBigger (n) {
  const str = n.toString()
  const arr = str.split('')
  const dot = findDot(arr)
  const rightSideSort = changeDot(dot)
  const arr1 = arr.splice(0, arr.length - rightSideSort.length)
  const arrConcat = arr1.concat(rightSideSort)
  return (+arrConcat.join('') > n ? +arrConcat.join('') : -1)
}

function findDot (arr) {
  let rightSide = []
  const dot = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (+arr[i] > +arr[i-1]) {
      rightSide = arr.slice(i-1, arr.length)
      dot.push(arr[i-1])
      break
    }
  }
  rightSide.push(dot + '') //
  rightSide.splice(0,1)
  return rightSide
}

function changeDot (arr) {
  const rightSide = arr
  const nextBigger = []
  const newDot = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (+arr[arr.length-1] < +arr[i-1]) {
      nextBigger.push(arr[i-1])
      rightSide.splice(i-1, 1)
      break
    }
  }
  rightSide.sort((a, b) => a - b)
  rightSide.unshift(nextBigger + '')
  return rightSide
}
```

6. Completed an internship at the Celadon company. Worked with react-native, git, jira, slack. I used the Scrum methodology in my work.
