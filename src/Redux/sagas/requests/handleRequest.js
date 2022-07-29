
import actionTypeUrlMappings from "./actionTypeUrlMappings";
const getUrl = (url)=>{
    console.log(actionTypeUrlMappings,"Mapping url")
    return actionTypeUrlMappings[url];
}

export const getResponse = async(params)=>{
    const url = getUrl(params.actionType);
    const body = params.payload;
   
    const response = 
    params.method === "GET"
        ? await fetch(url,{
            method:"GET",
            mode: "cors",
            cache:"no-cache",
            headers:{
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        }):
        await fetch(url,{
            method:"POST",
            mode: "cors",
            cache:"no-cache",
            headers:{
                'Content-Type': 'application/json',
                'authorization':''
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body:JSON.stringify(body)
        })
    return response;
}