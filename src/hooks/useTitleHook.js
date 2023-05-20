import { useEffect } from "react"

const useTitleHook = title =>{
    useEffect(()=>{
        document.title = `${title} - Figuee`
    },[])
}
export default useTitleHook;