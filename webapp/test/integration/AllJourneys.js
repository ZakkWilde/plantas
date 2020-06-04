/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"ovly/plantas/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ovly/plantas/test/integration/pages/View1",
	"ovly/plantas/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ovly.plantas.view.",
		autoWait: true
	});
});