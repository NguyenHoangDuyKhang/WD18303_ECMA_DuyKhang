// Bài 2 - Lab 1
let name = "Khang";
let old = 20;
const sayhello = (name, old) => {
       // console.log(`I'm ${name} and ${old}`);
       var  data =  console.log(`I'm ${name} and ${old}`);
       return data;
}
sayhello(name, old);


//Bài 3 - Lab 1
const gettodo = async() => {
    let respones = await fetch(`https://api.publicapis.org/categories`);
    //Bắt lỗi truyền vào với tham số không chính xác!
    if(respones && respones.status !== 200){
        throw new Error('Something wrongs width status code: ' + respones.status);
        //    trong trường hợp này, code sẽ xử lý giống như reject
    }
    let  data = await respones.json();
    let data_custom = data.categories;
    console.log(data_custom);
    data_custom.forEach((item) => {
        document.getElementById("div_info").innerHTML+= `<button class="btn btn-outline-info">${item}</button>`
    });
}

gettodo();

// feach API link 2
const getNewtodo = async() => {
    let respones = await fetch(`https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students`);
    //Bắt lỗi truyền vào với tham số không chính xác!
    if(respones && respones.status !== 200){
        throw new Error('Something wrongs width status code: ' + respones.status);
        //    trong trường hợp này, code sẽ xử lý giống như reject
    }

    let  data = await respones.json();
    // console.log(data);
    data.forEach((item) => {
        // console.log(item.name);
        document.getElementById("tb").innerHTML+= `<tr><td>${item.id}</td> <td><img src="${item.avatar}"></td> <td>${item.name}</td><td>${item.createdAt}</td></tr>`
    });


}

getNewtodo();


// feach API link 1

const getAPI2 = async() => {
    let respones = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`);
    //Bắt lỗi truyền vào với tham số không chính xác!
    if(respones && respones.status !== 200){
        throw new Error('Something wrongs width status code: ' + respones.status);
        //    trong trường hợp này, code sẽ xử lý giống như reject
    }

    let  data = await respones.json();
    let coustom = data.data;
    // console.log(coustom);
    // coustom.forEach((item, index) => {
    //     document.getElementById("tb2").innerHTML+= `<tr><td>${index+1}</td><td>${item.Nation}</td> <td>${item.Year}</td> <td>${item.Population}</td></tr>`
    // });


    //For of
    let index = 1;
    for(let {Nation, Year, Population} of coustom){
        document.getElementById("tb2").innerHTML+= `<tr><td>${index++}</td><td>${Nation}</td> <td>${Year}</td> <td>${Population}</td></tr>`
    }
}
getAPI2();


