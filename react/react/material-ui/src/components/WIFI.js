import { useEffect,useState } from "react";

const WIFI = () => {
    const [ isOnline, setIsOnline ] = useState(navigator.onLine);

    useEffect(() => {
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        }

        window.addEventListener('online', handleStatusChange);
        window.addEventListener('offline', handleStatusChange);

        return () => {
            window.removeEventListener('online', handleStatusChange);
            window.removeEventListener('offline', handleStatusChange);
        }
    }, [isOnline])

  return (
    <div>
        <h1>welcome to imarticus learnin</h1>
        <h2>Turn on/off the wifi to see what happens</h2>
        {
            isOnline ? (
                <h1 class="online">You are online</h1>
            ) : (
                <h1 class="offline">You are offline</h1>
            )
        }
    </div>
  )
}

export default WIFI;