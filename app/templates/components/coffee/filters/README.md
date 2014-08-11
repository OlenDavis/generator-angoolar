# Filters

## File Naming: 4xx_[ filter_name ].tail.coffee

### Example: 400_checkmark.tail.coffee

```coffee
angoolar.addFilter class Checkmark extends angoolar.BaseFilter
	$_name: 'Checkmark'

	$_dependencies: [ '$log' ]

	filter: ( input ) ->
		@$log.debug "Filtering #{ input } with #{ @$_makeName() }"

		if input then '\u2713' else '\u2718'
```

### Usage (assuming prefix of 'a')

```html
<input ng-model="checked" type="checkbox"/>
checked: {{ checked | aCheckmark }}
```