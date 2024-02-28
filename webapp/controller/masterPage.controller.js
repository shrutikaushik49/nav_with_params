sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("navwithparams.controller.masterPage", {
            onInit: function () {

            },
            navOnPress: function (oEvent) {
                let sCustomerID = oEvent.getSource().getBindingContext().getObject().CustomerID;
                sap.ui.core.UIComponent.getRouterFor(this).navTo("RoutedetailPage", { CustomerID : sCustomerID });
            }
        });
    });
