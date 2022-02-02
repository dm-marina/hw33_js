let bodyEl = document.body;
let bodyChilds = bodyEl.childNodes;

const ul = bodyChilds[1]

const li = ul.childNodes[1];
console.log(li.childNodes)

for(let node of ul.childNodes){
    console.log(node);
}
console.log(ul.childNodes.length)

for(let liText of document.querySelectorAll('li')){
    let text = liText.firstChild.data
    let arr =[];
    arr.push(text)
    console.log(arr)
}