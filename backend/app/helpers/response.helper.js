const createResponse  = (apiStatus, data, message) =>{
    return [
        {apiStatus:apiStatus, data:data, message: message}
    ]
}
module.exports = createResponse;