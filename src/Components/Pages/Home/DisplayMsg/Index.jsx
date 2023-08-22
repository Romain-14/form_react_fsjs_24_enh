import { Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPerson, faPersonDress, faPersonHalfDress } from '@fortawesome/free-solid-svg-icons';

function DisplayMsg({ dataLS }) {

    function setIcon(genre){
        switch (genre) {
            case "M":
                return <FontAwesomeIcon icon={faPerson} style={{color: "royalblue"}} size="lg"/>;
            case "F":
                return <FontAwesomeIcon icon={faPersonDress} style={{color: "pink"}} size="lg"/>;
            case "NB":
                return <FontAwesomeIcon icon={faPersonHalfDress} style={{color: "green"}} size="lg"/>;        
            default:
                return <FontAwesomeIcon icon={faUser} style={{color: "grey"}} size="lg"/>;
        }
    }

    return (
        <section>
            {dataLS.length ? (
                <>
                    <h2 style={{textAlign: "center", padding: "20px"}}>Discussion en cours</h2>
                    <dl>
                        {dataLS.map((data) => (
                            <Fragment key={data.id}>
                                <dt>{setIcon(data.genre)} {data.alias} à {data.time} le {data.date} </dt>
                                <dd>{data.msg}</dd>
                                <div className="divider"></div>
                            </Fragment>
                        ))}
                    </dl>
                    <hr />
                </>
            ) : (
                <p style={{textAlign:"center", padding:"20px"}}>Pas encore de message 😒😒</p>
            )}
        </section>
    );
}

export default DisplayMsg;
