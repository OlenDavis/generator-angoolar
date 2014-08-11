# Controllers

## File Naming: 7xx_[ controller_name ].tail.coffee

### Example: 800_my_controller.tail.coffee

```coffee
angoolar.addController class MyController extends angoolar.BaseController
	$_name: 'MyController'

	$_dependencies: [ '$log' ]

	doStuff: -> @$log "Did stuff in #{ @$_makeName() }"
```

### Usage in HTML (assuming prefix of 'a')

```html
<div
	ng-controller ="aMyController"
	ng-init       ="MyController.doStuff()"
>
	MyController {{ MyController ? 'is' : 'is not' }} available here!
</div>
```
