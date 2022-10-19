import React from "react";

export type Props = {
    test?:string,
}

export const Initial: React.FC<Props> = ({}) => {
    return (
        <div>Test</div>
    )

}