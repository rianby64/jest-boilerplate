
import * as React from 'react';

interface SummProps {
    children?: React.ReactElement<SummProps> | React.ReactElement<SummProps>[];
    str: string;
}

export const Summ =
(props: SummProps): React.ReactElement<SummProps> => {
    const k = Number(props.str ? props.str : 0);

    if (Array.isArray(props.children)) {
        return (
            <div>
                { props.children.map((child: React.ReactElement<SummProps>, key: number): React.ReactElement<SummProps> =>
                    <Summ key={key.toString()} str={(Number(child.props.str) + k).toString()}>
                        { child.props.children }
                    </Summ>)}
            </div>
        );
    }
    const i = k + Number(props.children ? props.children.props.str : 0);
    return (
        <div>
            {props.children ?
                <Summ str={i.toString()}>
                    { props.children.props.children }
                </Summ>
                : k}
        </div>
    );
}
