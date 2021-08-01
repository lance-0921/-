//选择排序

let min = (numbers) =>{
    if(numbers.length > 2){
        return min([numbers[0],min(numbers.slice(1))])
    }else{
        return Math.min.apply(null,numbers)
    }
}

let minIndex = (numbers) => {
  return  numbers.indexOf(min(numbers))
}

let sort = (numbers) =>{
    if(numbers.length>2){
    let index = minIndex(numbers)
    let min = numbers[index]
    numbers.splice(index,1)
    return [min].concat(sort(numbers))
}else{
    return numbers[0]<numbers[1]?numbers:numbers.reverse()
    }
}

//快速排序
let quickSort = arr => {
    if(arr.length <= 1){
    return arr 
    }
    let pivotIndex = Math.floor(arr.length/2)
    let pivot = arr.splice(pivotIndex,1)[0]
    let left = []
    let right = []
    for(let i = 0;i < arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
         }else{
            right.push(arr[i])
         }
    }
    return quickSort(left).concat([pivot],quickSort(right))
}

//归并排序
let mergeSort = arr => {
    console.log(`_ _ _ _ _ _`)
    let k = arr.length
    console.log(`k:${k}`)
    if(k===1){return arr}
    let left = arr.slice(0,Math.floor(k/2))
    console.log(`left:${left}`)
    let right = arr.slice(Math.floor(k/2))
    console.log(`right:${right}`)
    return merge(mergeSort(left),mergeSort(right))
}
let merge = (a,b) =>{
    if(a.length === 0) return b 
    if(b.length === 0) return a 
    return a[0] > b[0]?[b[0]].concat(merge(a,b.slice(1))):[a[0]].concat(merge(a.slice(1),b))
}


//计数排序
let countSort = arr => {
    let hashTable = {}, max = 0,result = []
    for(let i = 0; i < arr.length;i++){
        if(!(arr[i] in hashTable)){
            hashTable[arr[i]] = 1
        }else{
            hashTable[arr[i]] += 1
        }
        if(arr[i]>max) {max = arr[i]}
    }
    for(let j=0;j<=max;j++){
        if(j in hashTable){
            for(let k= 0;k<hashTable[j];k++){
                result.push(j)
            }
        }
    }
    return result
}