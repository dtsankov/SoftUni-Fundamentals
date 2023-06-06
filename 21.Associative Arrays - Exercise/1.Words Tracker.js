function wordTracker(input) {
    let result = new Map()
    let words = input.shift().split(' ')
     
    for (const word of words) {
        result.set(word,0)
    }

    for (const word of input) {
        if (result.has(word) === true) {
            let currCount = result.get(word) + 1
            result.set(word, currCount)
        }
    }

    let finalResult = Array.from(result).sort((a,b)=>b[1] - a[1])

    for (const [word, count] of finalResult) {
        console.log(word, '-', count);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])