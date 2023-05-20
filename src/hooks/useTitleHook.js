import { useEffect } from "react"

const useTitleHook = title =>{
    useEffect(()=>{
        document.title = `${title} | Figuee`
    },[title])
}

export default useTitleHook;