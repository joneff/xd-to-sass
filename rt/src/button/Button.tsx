import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    themeColor: string;
    fill: string;
    size: string;
    rounded: string | Number | boolean;
}


export default class Button extends React.Component<ButtonProps, {}> {

    static propTypes = {
        children: PropTypes.node,
        themeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'info', 'warning', 'danger']),
        fill: PropTypes.oneOf(['solid', 'outline']),
        size: PropTypes.oneOf(['sm', 'md', 'lg'])
    }

    static defaultProps = {
        themeColor: 'secondary',
        size: 'md',
        fill: 'solid',
        rounded: true
    };

    private _element: HTMLButtonElement | null = null;

    public get element(): HTMLButtonElement | null {
        return this._element;
    }

    constructor(props: ButtonProps) {
        super(props);
    }

    public fillMap: Map<string, string> = new Map<string, string>([
      ['solid', ''],
      ['outline', '-outline']
    ]);

    public sizeMap: Map<string, string> = new Map<string, string>([
      ['sm', 'btn-sm'],
      ['small', 'btn-sm'],
      ['md', ''],
      ['medium', ''],
      ['lg', 'btn-lg'],
      ['large', 'btn-lg']
    ]);

    public themeColorMap: Map<string, string> = new Map<string, string>([
      ['primary', '-primary'],
      ['secondary', '-secondary'],
      ['success', '-success'],
      ['info', '-info'],
      ['warning', '-warning'],
      ['error', '-danger']
    ]);

    public roundedMap: Map<string | Number | Boolean, string> = new Map<string | Number |Boolean, string>([
      [true, ''],
      [false, '-0'],
      ['sm', '-1'],
      ['md', '-2'],
      ['lg', '-3'],
      ['pill', '-pill']
    ]);

    render() {
        const {
            children,
            themeColor,
            fill,
            size,
            rounded
        } = this.props;

        const buttonClasses = [ 'btn' ];

        const colorInfix = this.themeColorMap.get(themeColor) || '-secondary';
        const fillInfix = this.fillMap.get(fill) || '';
        const themeClassname = `btn${fillInfix}${colorInfix}`;

        const sizeClassName = this.sizeMap.get(size) || '';

        const roundedClassName = typeof rounded === 'number'
            ? `rounded-${rounded}`
            : `rounded${this.roundedMap.get(rounded)}`;

        buttonClasses.push(themeClassname, sizeClassName, roundedClassName);

        const buttonProps = {
            className: buttonClasses.join( ' ' )
        };

        return <button
            {...buttonProps}
            ref={button => this._element = button}
        >
            {children}
        </button>
    }
}