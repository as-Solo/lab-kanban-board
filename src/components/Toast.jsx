import { useEffect } from "react";

function Toast({message, setToast}) {
    
    let timer= null

    useEffect(()=>{
        timer = setTimeout(()=>{
            setToast("");
        }, 2500)
    },[])

    useEffect(()=>{
        return(()=>{
            clearTimeout(timer);
        });
    },[])

    return(
        <div className="toast">
            {message}
        </div>
    );
}

export default Toast;