# Factories

## File Naming

The difference between low, mid, and high level factories is merely a convention to help you build large projects without having to worry about ensuring files are built in the right order and the necessary components are always available to other components that rely on them. All you have to think about is whether your factory is a low, mid, or high level factory, and name it appropriately. And if you want it to be available to other components as a dependency, be sure to prepend `angoolar.` to its class name as in the examples below.

### Low-level Factories: 3xx_[ filter_name ].tail.coffee
### Mid-level Factories (Requesters): 5xx_[ filter_name ].tail.coffee
### High-level Factories (State Managers): 6xx_[ filter_name ].tail.coffee

### Example: 300_low_level_factory.tail.coffee

```coffee
angoolar.addFactory class angoolar.LowLevelFactory extends angoolar.BaseFactory
	$_name: 'LowLevelFactory'

	$_dependencies: [ '$log' ]

	doStuff: -> @$log.debug "Did stuff in #{ @$_makeName }"
```

### Example: 500_mid_level_factory.tail.coffee

```coffee
angoolar.addFactory class angoolar.MidLevelFactory extends angoolar.BaseFactory
	$_name: 'MidLevelFactory'

	$_dependencies: [
		'$log'
		angoolar.LowLevelFactory
	]

	doStuff: ->
		@LowLevelFactory.doStuff()
		@$log "Did stuff in #{ @$_makeName() }"
```

### Example: 600_high_level_factory.tail.coffee

```coffee
angoolar.addFactory class angoolar.HighLevelFactory extends angoolar.BaseFactory
	$_name: 'HighLevelFactory'

	$_dependencies: [
		'$log'
		angoolar.MidLevelFactory
	]

	doStuff: ->
		@MidLevelFactory.doStuff()
		@$log "Did stuff in #{ @$_makeName() }"
```
