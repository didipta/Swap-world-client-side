import { useEffect, useState } from "react"

const Adminseller = email => {
    const [isrole, setIsrole] = useState(false);
    const [isroleLoading, setIsroleLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsrole(data.role);
                    setIsroleLoading(false);
                })
        }
    }, [email])
    return [isrole, isroleLoading]
}

export default Adminseller;