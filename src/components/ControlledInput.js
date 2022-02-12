import { useState } from "react";

export default function ControlledInput({ type, name, dataKey, require }) {
    const [data, setData] = useState("");

    const handleChange = (event) => {
        setData(event.target.value);
    }
    
    return (
        <input type={type} name={name} value={data} dataKey={dataKey} required={require} onChange={handleChange} />
    )
}