import React, { useState, useEffect } from "react";
import axios from "../../requests/Axios";

import ModalMovies from "./ModalMovies";
import "./row.css";

interface RowProps {
    title: string;
    fetchUrl: string;
    displayed: boolean;
}

function Row({ title, fetchUrl }: RowProps) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_signs">
                {movies.map((movie, index) => (
                    <div>
                        <ModalMovies key={index} movieInfo={movie} displayed={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Row;
