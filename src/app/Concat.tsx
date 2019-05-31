
import * as React from 'react';

interface ConcatProps {
    str: string;
}

export const Concat =
(props: ConcatProps): React.FunctionComponentElement<ConcatProps> => {
    return (
        <div>{props.str}</div>
    );
}
