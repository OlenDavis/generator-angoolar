# Directives

## File Naming: 8xx_[ directive_name ].tail.coffee

### Example: 800_not_templated_directive.tail.coffee

```coffee
angoolar.addDirective class NotTemplatedDirective extends angoolar.BaseDirective
	$_name: 'NotTemplatedDirective'

	$_dependencies: [ '$log' ]

	scope: # this is the normal scope object
		optionalTwoWayBound : '=?'
		boundToDirectiveName: "=?#{ @::$_makeName() }"

	controller: class NotTemplatedDirectiveController extends angoolar.BaseDirectiveController
		$_name: 'NotTemplatedDirectiveController'

		constructor: ->
			super

			# do stuff to @$element
```

### Example: 800_templated_directive.tail.coffee

```coffee
angoolar.addDirective class TemplatedDirective extends angoolar.BaseTemplatedDirective
	$_name: 'TemplatedDirective'

	$_dependencies: [ '$log' ]

	scope: # this is the normal scope object
		optionalTwoWayBound : '=?'
		boundToDirectiveName: "=?#{ @::$_makeName() }"

	controller: class NotTemplatedDirectiveController extends angoolar.BaseDirectiveController
		$_name: 'NotTemplatedDirectiveController'

		constructor: ->
			super

			# do stuff to @$element
```

And you'll add the template for this directive in `templates/directives/templated-directive.html` as follows:

```html
<div>
	I'm a templated directive!
</div>

### Usage (assuming prefix of 'a')

This:

```html
<div
	a-not-templated-directive ="becomesBoundToDirectiveName"
	optional-two-way-bound    ="somethingElse"
>

	<div a-templated-directive></div>

</div>
```

Will become this:

```html
<div
	a-not-templated-directive ="becomesBoundToDirectiveName"
	optional-two-way-bound    ="somethingElse"
>

	<div class="templated-directive">
		I'm a templated directive!
	</div>

</div>
```
