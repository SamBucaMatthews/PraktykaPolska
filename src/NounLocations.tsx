import React from "react";
import { PREPOSITION_CASE_MAP, type Noun } from "../types/Noun";

const PREPOSITIONS = Object.keys(PREPOSITION_CASE_MAP);

type NounLocationsProps = {
    noun: Noun;
};

const NounLocations: React.FC<NounLocationsProps> = ({ noun }) => {
    const entries = PREPOSITIONS.map((prep) => {
        const caseKey = PREPOSITION_CASE_MAP[prep];
        return { prep, word: noun.cases[caseKey] };
    });

    return (
        <div>
            <strong>{noun.word}</strong> –{" "}
            {entries.map((entry, index) => (
                <span key={index}>
                    {entry.prep} {entry.word}
                    {index < entries.length - 1 ? ", " : ""}
                </span>
            ))}
        </div>
    );
};

export default NounLocations;
