// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, SettingView, SettingsView, boostrap, marionette, s_template, st_template, _;
    $ = require('jquery');
    _ = require('underscore');
    boostrap = require('bootstrap');
    marionette = require('marionette');
    s_template = require("text!templates/settings.tmpl");
    st_template = require("text!templates/setting.tmpl");
    SettingView = (function(_super) {

      __extends(SettingView, _super);

      function SettingView() {
        return SettingView.__super__.constructor.apply(this, arguments);
      }

      SettingView.prototype.template = st_template;

      SettingView.prototype.tagName = "li";

      return SettingView;

    })(marionette.ItemView);
    return SettingsView = (function(_super) {

      __extends(SettingsView, _super);

      SettingsView.prototype.template = s_template;

      SettingsView.prototype.itemView = SettingView;

      SettingsView.prototype.tagName = "ul";

      SettingsView.prototype.ui = {
        settingsList: "#settings"
      };

      function SettingsView(options) {
        this.render = __bind(this.render, this);
        SettingsView.__super__.constructor.call(this, options);
        this.app = require('app');
      }

      SettingsView.prototype.render = function() {
        var r1, tmpl;
        tmpl = _.template(this.template);
        r1 = tmpl(this.collection.toJSON());
        $(this.ui.settingsList).html(r1);
        return this;
      };

      return SettingsView;

    })(marionette.CollectionView);
  });

}).call(this);
