import axios from "axios";

export async function writeAz(params){
    let {data}= await axios.post("https://product-ebce8-default-rtdb.firebaseio.com//product.json",
    {azproduct:params});

}

export async function writeEn(params){
    let {data}= await axios.post("https://product-ebce8-default-rtdb.firebaseio.com//productEn.json",
    {enproduct:params});

}


export async function dataAz(params){
    let Arr=[]
    let {data}= await axios.get("https://product-ebce8-default-rtdb.firebaseio.com//product.json")
    for(let key in data){
        data[key].id=key
        Arr.push(data[key])
    }
    return Arr
    
}

export async function dataEn(params){
    let Arr=[]
    let {data}=await axios.get("https://product-ebce8-default-rtdb.firebaseio.com//productEn.json")
    for(let key  in data){
        data[key].id=key
        Arr.push(data[key])
    }
    return Arr
}

export async function dataazdelete(params){
    let result=await axios.delete(`https://product-ebce8-default-rtdb.firebaseio.com//product/${params}.json`)
}

export async function dataendelete(params){
    let result=await axios.delete(`https://product-ebce8-default-rtdb.firebaseio.com//productEn/${params}.json`)
}