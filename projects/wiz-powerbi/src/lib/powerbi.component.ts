import { Component, Input, ViewChild, ElementRef } from "@angular/core";

import { models, IEmbedConfiguration, Embed } from 'powerbi-client';


import { PowerbiService } from './powerbi.service'

@Component({
  selector: "wiz-powerbi",
  template: `<div style="width:100%;height:100%" #contentPBI></div>`,
})
export class PowerbiComponent {

  @ViewChild('contentPBI', { read: ElementRef, static: true }) contentPBI: ElementRef;

  @Input() id: string;
  @Input() token: string;
  @Input() embedUrl: string

  // Secondary
  @Input() tokenType: models.TokenType = 0
  @Input() type: string = 'report'
  @Input() showFilterBar: boolean = false
  @Input() showMenuButton: boolean = true
  @Input() filters: models.IFilter[];

  /// FUTURE
    // settings?: IEmbedSettings;
    // pageName?: string;
    // filters?: models.IFilter[];
    // pageView?: models.PageView;
    // datasetId?: string;
    // permissions?: models.Permissions;
    // dashboardId?: string;
    // viewMode?: models.ViewMode;
    // action?: string;
    // height?: number;
    // width?: number;
    // theme?: models.IReportTheme;


  private powerBiService: PowerbiService;
  private pbiContainerElement: HTMLElement;
  public configPBI: IEmbedConfiguration;


  constructor() {
    this.powerBiService = new PowerbiService();
  }

  ngAfterViewInit() {
    this.initialEventPbi()
  }


  private initialEventPbi() {
    this.pbiContainerElement = <HTMLElement>(this.contentPBI.nativeElement);

    if(!this.token || !this.id) {
      return
    }

    this.configPBI = {
      embedUrl: this.embedUrl,
      id: this.id,
      accessToken: this.token,
      tokenType: this.tokenType,
      type: this.type,
      settings: {
        filterPaneEnabled: this.showFilterBar,
        navContentPaneEnabled: this.showMenuButton
      }
    }

    // has Filters
    if(this.filters) {
      const values = this.configPBI
      this.configPBI = {
        ...values,
        filters: this.filters
      }
    }

    this.embed(this.pbiContainerElement, this.configPBI)

  }


  embed(element: HTMLElement, config: IEmbedConfiguration): Embed {
    return this.powerBiService.embed(element, config);
  }
}
