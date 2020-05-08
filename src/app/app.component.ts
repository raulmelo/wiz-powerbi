import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showComponent: boolean = false
  filters = []

  public form: FormGroup = new FormGroup(
    {
      id: new FormControl('295d7768-a9a8-475d-ad68-c39a13206c78', [Validators.required]),
      token: new FormControl('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkN0VHVoTUptRDVNN0RMZHpEMnYyeDNRS1NSWSIsImtpZCI6IkN0VHVoTUptRDVNN0RMZHpEMnYyeDNRS1NSWSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2M0MTZhMmYtYTk4Ny00MzM3LWJiMGEtOTRlNTdjMWYzMmU3LyIsImlhdCI6MTU4ODkwOTcxOCwibmJmIjoxNTg4OTA5NzE4LCJleHAiOjE1ODg5MTM2MTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiI0MmRnWURCNks3YVM4WkdvUXJtYlZLYTY1Z1RKWUY2bTZibmN6M0lhdkswRmpsbllxd0VBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjU2ZGQ4ZTA2LWFmM2ItNGIxYS1hMGU0LWJjYTk3OTc4NmQyNiIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiQWRtIFJlZGUiLCJnaXZlbl9uYW1lIjoiUG93ZXJCSSBVU0VSIiwiaXBhZGRyIjoiNDAuNzYuOTEuOTMiLCJuYW1lIjoiUG93ZXJCSSBVU0VSIEFkbSBSZWRlIiwib2lkIjoiOWZmZmI3Y2QtZmM4Zi00NmI2LWFhYjgtYTQ0MTU0ZTRmZWI5Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTQyMDk2Nzc4MDktMzQ3MTYzNTczMS0yNzgzMzUwMTExLTMxOTczIiwicHVpZCI6IjEwMDMyMDAwN0U3NDQyNTAiLCJzY3AiOiJBcHAuUmVhZC5BbGwgQ2FwYWNpdHkuUmVhZC5BbGwgRGFzaGJvYXJkLlJlYWQuQWxsIERhdGFmbG93LlJlYWQuQWxsIERhdGFzZXQuUmVhZC5BbGwgR2F0ZXdheS5SZWFkLkFsbCBSZXBvcnQuUmVhZC5BbGwgU3RvcmFnZUFjY291bnQuUmVhZC5BbGwgV29ya3NwYWNlLlJlYWQuQWxsIiwic3ViIjoiOFZGMFN6aVYyQlNJS0FwbFhLU3NxSXNDT0NLR2xmczZNTjVLU21uRmZDUSIsInRpZCI6IjdjNDE2YTJmLWE5ODctNDMzNy1iYjBhLTk0ZTU3YzFmMzJlNyIsInVuaXF1ZV9uYW1lIjoicGIuYWRtcmVkZUB3aXpzb2x1Y29lcy5jb20uYnIiLCJ1cG4iOiJwYi5hZG1yZWRlQHdpenNvbHVjb2VzLmNvbS5iciIsInV0aSI6IjVkc3Boa0FCTzBTb1l0akxuSEdqQUEiLCJ2ZXIiOiIxLjAifQ.k6LDdJHoUcE5D8rFVS08T3zbiEYAoZQxbPZqdqE3OFRFzGTG-8yQSOlGVPxWmrx40a4oD0Vo3k1ffPo5RbHy-KOAIsPz8whPnNQWKN6Kce5CfnDXT5UykhEnehVZp82l2Axz_t0C91E5bvgQ4wLjN8v3omPtduU1cEmwiD6Jci4cWEnUEA-GSsbmi4yYq028nRfS_clA5YOFEBRX7I8UDqxaYIiefQr1WcSJlJDAOWbb6Hje35I92bcZBEmwaPF5h9pPUTatxCAd3Cgy1WGUtSBoFR-pmojWVc0FDuj0o6sLS0A7-STBXR-d6bu1AfqFeT70OQpUhYDEzIFkTbHVaA',[Validators.required] ),
      embedUrl: new FormControl('https://app.powerbi.com/reportEmbed?reportId=295d7768-a9a8-475d-ad68-c39a13206c78&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOmZhbHNlfX0%3d', [Validators.required]),
      tokenType: new FormControl(0, ),
      type: new FormControl('report', ),
      showFilterBar: new FormControl(false, ),
      showidMenuButton: new FormControl(true, ),
      filters: new FormControl(false, ),
      height: new FormControl('', ),
      wth: new FormControl('', )
    }
  )

  onFormSubmit() {
    this.showComponent = false
    if (this.form.valid) {
      if (this.form.value.filters) {
        console.log('veio')
        //////
        // EXEMPLO COM FILTROS
        this.filters = [{
          $schema: "http://powerbi.com/product/schema#basic",
          target: {
            table: "HIERARQUIA_UnidadeDinamica",
            column: "Unidade"
          },
          operator: "eq",
          values: ['212'],
          filterType: 1, // pbi.models.FilterType.BasicFilter,
          requireSingleSelection: true // Limits selection of values to one.
        }]
        //
      }

      setTimeout(() => {
        this.showComponent = true
      }, 1000);
    }
  }
}
