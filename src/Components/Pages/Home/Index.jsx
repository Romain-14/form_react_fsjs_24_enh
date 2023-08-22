import { useState } from "react";

import Form from "./Form/Index";

import DisplayMsg from "./DisplayMsg/Index";
import { getItem } from "../../../utils/localstorage";

function Home() {    

	const [dataLS, setDataLS] = useState(getItem("data"));    
    
    return (
        <>

			<Form dataLS={dataLS} setDataLS={setDataLS}/>
            
            <hr />

			<DisplayMsg dataLS={dataLS}/>
            
        </>
    );
}

export default Home;
