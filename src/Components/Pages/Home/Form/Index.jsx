import {useReducer, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

import { INITIAL_STATE } from "../../../../config/const";
import { getItem, setItem} from "../../../../utils/localstorage";

function Form({dataLS, setDataLS}) {

	const [inputs, dispatch] = useReducer(
        (currentInputs, newInputsValues) => ({
            ...currentInputs,
            ...newInputsValues,
        }),
        INITIAL_STATE
    );
    const [errorMsg, setErrorMsg] = useState(null);

	const handleChangeInputs = ({ target: { name, value } }) => dispatch({ [name]: value });
        
	function submitHandler(e) {
        e.preventDefault();
        for (const key in inputs) {
            if ( !inputs[key] ) {
                setErrorMsg(`Veuillez renseigner le champs ${key}`);
                return;
            }
        }
        const { alias, msg, genre } = inputs;
		const data = {
			id: uuidv4(),
			alias, 
			msg,
            genre,
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString(),
		}
        dispatch(INITIAL_STATE);
        setErrorMsg("");
        setItem("data", [...dataLS, { ...data }]);
        setDataLS(getItem("data"));
    }

    return (
		<form onSubmit={submitHandler}>
            <legend>Envoyer un message :</legend>
			<input
				placeholder="votre alias"
				type="text"
				name="alias"
				value={inputs.alias}
				onChange={handleChangeInputs}
			/>
			<textarea
                placeholder="votre message"
				name="msg"
				value={inputs.msg}
				onChange={handleChangeInputs}
			/>
            
            <select 
                value={inputs.genre}
                name="genre"
                style={{fontWeight: "bold"}}
                onChange={handleChangeInputs} 
            >
                <option >Genre</option>
                <option value="M">Masculin</option>
                <option value="F">Féminin</option>
                <option value="NB">Non-Binaire</option>
                <option value="P">Personnel</option>
            </select>
			
			<input type="submit" value="Envoyer" />

			{errorMsg && <p>{errorMsg}</p>}
		</form>
	)
}

export default Form;
