'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var AngoolarGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Angoolar generator!'));

    var prompts = [{
      type    : 'input',
      name    : 'name',
      message : 'Your Angoolar module name',
      default : this.appname // Default to current folder name
    },{
      type    : 'input',
      name    : 'prefix',
      message : 'Your Angoolar project prefix',
      default : this.appname.substr(0, 1).toLowerCase() // Default to the first letter of the app name
    },{
      type    : 'input',
      name    : 'apiDomain',
      message : 'Your site\'s API domain',
      default : this._.slugify(this.appname) // Default to slugified app name
    },{
      type    : 'input',
      name    : 'staticFilesDomain',
      message : 'Your site\'s static files\' domain',
      default : this._.slugify(this.appname) // Default to slugified app name
    }];

    this.prompt(prompts, function (answers) {
      this.name = this._.capitalize(this._.camelize(answers.name));
      this.prefix = answers.prefix;
      this.apiDomain = answers.apiDomain;
      this.staticFilesDomain = answers.staticFilesDomain;

      done();
    }.bind(this));
  },

  app: function () {
  	this.appPath = this._.underscored(this._.slugify(this.appname)) + '_components';

    this.mkdir(this.appPath);

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.copy('_Gruntfile.coffee', 'Gruntfile.coffee');
    this.copy('_index.html', 'index.html');
    this.copy('_head_css.html', 'head_css.html');
    this.copy('_head_js.html', 'head_js.html');
    this.copy('_tail_js.html', 'tail_js.html');

    this.directory('components', this.appPath);
  }
});

module.exports = AngoolarGenerator;
