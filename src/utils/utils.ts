interface RequestType {
    url:string,
    method:string,
    headers:string,
    data:object
}


const request = (requestType:RequestType) =>{
    console.log(requestType);
    return 'request';
};

export {request};