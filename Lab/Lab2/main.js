// Lab 2.5
const titles = ['avatar', 'name' , 'old', 'address'];
const TableHeader = (titles) => {
    let html = ``;

    if(!titles || titles.length === 0 ){
        return "";
    }
    const headerHTML = titles.map(item=>{
        html += `<th>${item}</th>`;
    });
    document.getElementById("tb").innerHTML += html;
    return html;
}


const obj = [
        {name: 'Khang',
            old: 20,
            address:'Hậu Giang',
            avatar : 'https://bizweb.dktcdn.net/100/438/408/files/meme-hai-bua-yody-vn-9.jpg?v=1691739328079'
        },
        {
            name: 'Nam',
            old: 21,
            address: 'Cần Thơ',
            avatar: 'https://i.pinimg.com/564x/32/34/72/323472b6b8976608548cfae7cff8ea8a.jpg'
        },
        {
            name: 'Huy',
            old: 21,
            address: 'Sóc Trăng',
            avatar: 'https://i.pinimg.com/236x/18/8d/a0/188da0d347ebb876c1d40d209781caa8.jpg'
        }
    ]

const TableRow = (obj) => {
    if(!obj || obj.length === 0){
        return '';
    }
    const bodyHTML = obj.map(item=>{
    let data = `<tr>
    <td><img src=${item.avatar} height="180px"></td>
    <td>${item.name}</td>
    <td>${item.old}</td>
    <td>${item.address}</td>
                </tr>`
                return data;  
    });
    document.getElementById("row").innerHTML += bodyHTML;
}   

const Table = (titles, obj) => {
   const header = TableHeader(titles);
   const body =  TableRow(obj);
}
Table(titles, obj);



// Bài 2.1
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-function"],
    failure: ["no-var", "var_on_top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

const make = () => {
    for(let text_warnting of result.failure){
        document.getElementById("list").innerHTML+= `<li class="text-warning">${text_warnting}</li>`
    }
}
make()


//Bài 2.2
const soure = [1,2,3,4,5,6,7,8,9,10];
const soureCoppy = [...soure];
const removeFirst = () =>{
    const removed = soure.splice(0, 2);
    const newSoure = soure;
    return newSoure;
} 
console.log(`Này là cái newSoure nè: `+ removeFirst());
console.log(`Này là cái soure Coppy: ` + soureCoppy);


//Bài 2.3
const arr1 = ['Khang', 20, 'Hậu Giang'];
const arr2 = [...arr1];
console.log(arr2);


//Bài 2.4
const getNewArr = () => {
    let first = ['to', 'code'];
    first.unshift('learning');
    first.push('is','fun');
    return first;
}
console.log(getNewArr());