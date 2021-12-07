import {ref} from 'vue'
import useApi from "./api";
import ProductType from "@/types/productType";
export default async function useProducts(){
    // const products=ref<ProductType[]>();
    // const {response, error,request}=useApi<ProductType[]>("https://fakestoreapi.com/products");
    const {response:products, error,request}=useApi<ProductType[]>("https://fakestoreapi.com/products");
    const loading=ref<boolean>(false)
    if(loading.value===false){
        await request();
        // products.value=response?.map((item:ProductType)=>item.mine=0)
        loading.value=true;    
    }
    return {products};
}