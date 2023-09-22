let arr = () => {
    let tempArray = [3, 9, 1, 2, 5, 4, 6];
    return tempArray;
}

let tempArray = () => {
    let dizi = arr();
    console.log(dizi);

    // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    // dizi.forEach((value,index,array)=>{
    //     document.writeln(`${index} => ${value} => ${array} <br/>`)
    // });

    // dizi.forEach((value,index,array)=>{
    //     document.writeln(`${value}`)
    // });

    // filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    // dizi.filter((value, index, array) => {
    //     return value % 2 == 0;
    // }).forEach((value, index, array) => {
    //     document.writeln(`${value}`)
    // });

    // document.writeln(`<br/>`)

    // dizi.map((value, index, array) => {
    //     return value+=100;
    // }).forEach((value, index, array) => {
    //     document.writeln(`${value}`)
    // });

    document.writeln(`<br/>`)
   let data= dizi.filter((value, index, array) => {
        return value % 2 == 0;
    });
    console.log(data);

    data.map((value) => {
        return value+=100;
    }).forEach((value, index, array) => {
        document.writeln(`${value}`)
    });

   
}

tempArray()

 // bind