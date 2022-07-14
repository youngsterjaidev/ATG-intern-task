import React from "react";
import B_Button from "react-bootstrap/Button";
import B_Input from "react-bootstrap/FormControl";
import { defaultTheme } from "../../utils/theme";

interface Props {
    children: any,
    primary: boolean | undefined,
    secondary: boolean | undefined
}

const styles = (
    primary: boolean | undefined, 
    secondary: boolean | undefined
) => {
    return {
        background: `${() => {
            if(primary) return "red"

            if(secondary) return "green"
            
            return "yellow"
        }}`,
        color: "red"
    }
}


export const Button: React.FC<Props> = ({ 
    children,
    primary,
    secondary
}) => {

    return (
        <>
        <style>{`
            .btn {
                background-color: ${defaultTheme.__primaryColor};
            } 
        `}</style>
        <B_Button>{children}</B_Button>
        </>
    )
}

export const Input = ({ placeholder }) => {

    return (
        <>
        <style>
            {`
                .form-control {
                    background: ${defaultTheme.__inputColor};
                    border: none;
                    min-width: 300px;
                }

                .form-control:active, .form-control:hover {
                    background: ${defaultTheme.__inputColor};
                }
            `}
        </style>
        <B_Input className="rounded-pill p-2" placeholder={placeholder} />
        </>
    )
}