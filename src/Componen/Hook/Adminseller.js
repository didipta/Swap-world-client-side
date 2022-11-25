import { useEffect, useState } from "react"

const Adminseller = email => {
    const [isrole, setIsrole] = useState(false);
    const [isroleLoading, setIsroleLoading] = useState(true);
    const [userdetails,seUserdetailes]=useState({});
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    seUserdetailes(data);
                    setIsrole(data.role);
                    setIsroleLoading(false);
                })
        }
    }, [email])
    return [isrole, isroleLoading, userdetails]
}

export default Adminseller;