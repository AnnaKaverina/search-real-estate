import { useEffect, useState } from "react"

export const useDelay = (value: any) => {
    const [delayedValue, setDelayedValue] = useState(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayedValue(value)
        }, 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, [value])

    return delayedValue
}