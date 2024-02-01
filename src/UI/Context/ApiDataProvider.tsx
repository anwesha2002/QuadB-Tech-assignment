import {createContext,  ReactNode,  useContext, useEffect, useState} from "react";
import {FetchApiData} from "../../Data/Network/FetchApiData.tsx";
import {MovieModel} from "../../Model/MovieModel.ts";

type ApiDataProviderProps = {
    children : ReactNode
}

type ApiDataContextProps = {
    data  : MovieModel[],
}

const ApiDataContext = createContext({} as ApiDataContextProps)

export function useApi(){
    return useContext(ApiDataContext)
}

export function ApiDataProvider({children} : ApiDataProviderProps){
    const [ data, setData] = useState<MovieModel[]>([])

    useEffect(()=>{
        (async () => {
            try {
                const res = await FetchApiData();
                setData(res.data)
            }catch (err){
                console.log(err)
            }
        })()
    },[]);


    return (
        <ApiDataContext.Provider value={{data}}>
            {children}
        </ApiDataContext.Provider>
    )
}