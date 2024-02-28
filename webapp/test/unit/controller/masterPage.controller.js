/*global QUnit*/

sap.ui.define([
	"nav_with_params/controller/masterPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("masterPage Controller");

	QUnit.test("I should test the masterPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
