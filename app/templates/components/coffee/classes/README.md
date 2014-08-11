# Class

## File Naming: 1xx_[ controller_name ].tail.coffee

Aside from run-of-the-mill classes you'll be using all over the place, these are what your resources will be, if you're using the Angoolar Resource bower package.

### Example: 100_my_resource.tail.coffee

```coffee
class angoolar.MyResource extends angoolar.BaseResource
	$_name: 'MyResource'

	$_properties:
		aJsonProperty                    : '='
		aQueryParameter                  : '@'
		aPropertyInEither                : '@='
		aResourceProperty                : 'MyResource'
		aResourcePropertyAsQueryParameter: '@MyResource'
		aResourcePropertyAsEither        : '@=MyResource'

	$_init: ->
		super
		# do stuff after having constructed or after having deserialized the resource
```

### Requester Example

#### MyResourceRequester - 500_my_resource_requester.tail.coffee

```coffee
angoolar.addFactory class angoolar.MyResourceRequester extends angoolar.BaseRequester
	$_name: 'MyResourceRequester'

	$_resourceClass: angoolar.MyResource

	$_actions: # this is the same object you can pass to $resource to define a $resource's actions
		get   : method: 'GET'
		create: method: 'POST'
		update: method: 'PUT'
		delete: method: 'DELETE'
```

### Usage Example

#### ApplicationState - 600_application_state.tail.coffee

```coffee
angoolar.addFactory class angoolar.ApplicationState extends angoolar.BaseFactory
	$_name: 'ApplicationState'

	$_dependencies: [ angoolar.MyResourceRequester ]

	constructor: ->
		super

		@$myResource = @MyResourceRequester.create()

	refresh: -> @$myResource.$_promise.then => @$myResource.$get()

	save: -> @$myResource.$_promise.then => @$myResource.$update()

	delete: -> @$myResource.$_promise.then => @$myResource.$delete()
```
