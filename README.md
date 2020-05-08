  
  

![Wiz solucoes](https://syz.wizsolucoes.com.br/assets/header/img/logowiz.svg)

 [Demo componente](http://wiz-powerbi.surge.sh/)
Links uteis

 - [Exemplo Powerbi Demo da Microsoft](https://microsoft.github.io/PowerBI-JavaScript/demo/v2-demo/index.html)
 - [Dependência usada  NPM Powerbi-client](https://www.npmjs.com/package/powerbi-client)

Parâmetros 
```js
this.filters = [{
	$schema:  "http://powerbi.com/product/schema#basic",
	target: {
		table:  "TABLE_EXAMPLE",
		column:  "Unidade"
	},
	operator:  "eq",
	values: ['212'],
	filterType:  1, // pbi.models.FilterType.BasicFilter,
	requireSingleSelection:  true  // Limits selection of values to one.
}]
```


Componente html
```html
<wiz-powerbi
	[showFilterBar]="false"
	[showMenuButton]="true"
	[id]="234654642454352534523"
	[token]="343ljfno3i2oif4n32f4i3fi3.3io49uf989g8g8g84hwjdwkwkdnmkdwewe3333333"
	[embedUrl]="https://app.powerbi.com/reportEmbed?reportId=...8&config=...."
	[filters]="filters"
>
</wiz-powerbi>
```
