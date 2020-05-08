import {
  Embed,
  factories,
  IEmbedConfiguration,
  service as pbiService
} from 'powerbi-client';

import { Injectable } from '@angular/core';


export function powerBiServiceFactory() {
  return new pbiService.Service(
    factories.hpmFactory,
    factories.wpmpFactory,
    factories.routerFactory
  );
}

@Injectable({
  providedIn: 'root',
  useFactory: powerBiServiceFactory
})
export class PowerbiService {
  private powerBiCoreService: pbiService.Service;

  constructor(private service?: pbiService.Service) {
    if (!service) {
      this.powerBiCoreService = new pbiService.Service(
        factories.hpmFactory,
        factories.wpmpFactory,
        factories.routerFactory
      );
    } else {
      this.powerBiCoreService = service;
    }
  }

  embed(element: HTMLElement, config: IEmbedConfiguration): Embed {
    return this.powerBiCoreService.embed(element, config);
  }
}







