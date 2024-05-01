import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({children}){
    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlags(){
        try {
            setLoading(true);
            const response = await featureFlagsDataServiceCall();
            setEnabledFlags(response);
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log(error);
            throw new Error(error);
        }
    }

    useEffect(()=>{
        fetchFeatureFlags();
    },[])
    return (
        <FeatureFlagContext.Provider value={{loading, enabledFlags}}>
            {children}
        </FeatureFlagContext.Provider>
    );
}