import { useState } from "react";

export const usePassword = (minLength) => {
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { value } = e.target;
        const validate = value.length >= minLength ? true : false;

        setIsValid(validate);
    };

    return [isValid, handleChange];
};
