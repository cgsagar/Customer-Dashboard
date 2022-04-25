import React from "react"


const Search = (props) => {
    const { term, handleChange } = props
    return (
        <input type="text" value={term} placeholder="search by name or mobile" onChange={handleChange} className="form-control" />
    )
}

export default Search