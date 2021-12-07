import axios from 'axios';
import {ref} from 'vue'
export default function useApi<T>(url:string){
    const response = ref<T>();
    const error=ref(null)

    const request= async ()=>{
        axios.get(url).then(res=>{
            response.value=res.data;
        }).catch(err=>error.value=err)
    }

    return {response,error,request}
}