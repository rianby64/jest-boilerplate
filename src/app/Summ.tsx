
import * as React from 'react';

type SummType = React.ReactElement<SummProps>

interface SummProps {
    children?: SummType | SummType[];
    str: string;
}

const castStr = (str: string): number => Number(str ? str : 0);
const summStr = (k: number, str: string): string => (k + castStr(str)).toString();

export const Summ =
(props: SummProps): SummType => {
    const k = castStr(props.str);

    if (Array.isArray(props.children)) {
        return (
            <div>
                { props.children.map((child: SummType, key: number): SummType =>
                    <Summ key={key.toString()} str={summStr(k, child.props.str)}>
                        { child.props.children }
                    </Summ>)}
            </div>
        );
    }
    const i = summStr(k, props.children ? props.children.props.str : '0');
    return (
        <div>
            {props.children ?
                <Summ str={i}>
                    { props.children.props.children }
                </Summ>
                : k}
        </div>
    );
}
