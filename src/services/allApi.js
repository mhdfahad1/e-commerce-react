import { BaseUrl } from "./BaseUrl";
import { commonAPI } from "./commonApi";

export const getAllproductsAPI=async(searchKey)=>{
    return await commonAPI("GET",`${BaseUrl}?search=${searchKey?searchKey:""}`,"")
}

export const getAproductsAPI=async(id)=>{
    return await commonAPI("GET",`${BaseUrl}/${id}`,"")
}

// export const getsearchproductAPI=async(searchKey)=>{
//     return await commonAPI("GET",`${BaseUrl}?search=${searchKey?searchKey:""}`,"")
// }