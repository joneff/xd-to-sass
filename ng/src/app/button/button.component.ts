import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
    [false, '-0'],
    ['sm', '-1'],
    ['md', '-2'],
    ['lg', '-3'],
    ['pill', '-pill']
  ]);

  @Input()
  public text: string = '';

  @Input()
  public fill: string = 'solid';

  @Input()
  public size: string = 'md';

  @Input()
  public themeColor: string = 'secondary';

  @Input()
  public rounded: string | Number | Boolean = true;


  public get buttonClasses(): string {
    const classNames = [ 'btn' ];

    const colorInfix = this.themeColorMap.get(this.themeColor) || '-secondary';
    const fillInfix = this.fillMap.get(this.fill) || '';
    const themeClassname = `btn${fillInfix}${colorInfix}`;

    const sizeClassName = this.sizeMap.get(this.size) || '';

    const roundedClassName = typeof this.rounded === 'number'
      ? `rounded-${this.rounded}`
      : `rounded${this.roundedMap.get(this.rounded)}`;

    classNames.push(themeClassname, sizeClassName, roundedClassName);


    return classNames.join( ' ' );
  }

}
