// is anagram or not ?
// first way

function isAnagram(str1,str2){
  if(str1.length !== str2.length)
  {
    return false
  }
  else{
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    str1=str1.split('').sort().join()
    str2=str2.split('').sort().join()
    if(str1===str2)
    {
        return true
    }
  }
}
console.log(isAnagram("listen","sint"))

/////second way

function isAnagram(str1,str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  if(str1.length !== str2.length)
  {
    return false
  }
    let count ={};
    for(let char of str1){
      count[char]= (count[char] || 0) + 1;
    }
    for(let char of str2)
    {
        if(!count[char]){
            return false
        }
        count[char]--;
    }
    return true
}
let str1 = "silent";
let str2 = "listen";

console.log(isAnagram(str1, str2));