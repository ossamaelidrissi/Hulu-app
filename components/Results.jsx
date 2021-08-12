import Thambnail from "./Thambnail";
import FlipMove from "react-flip-move";

function Results({results}) {
    
    return (
        <FlipMove className = 'px-2 my-12 sm:grid md:grid-cols-2 xl:grid-cols-3'>
            {results.map( result => {
                return (
                    <Thambnail key = {result.key} result = {result} />
                )
            })}
        </FlipMove>
    )
}

export default Results
