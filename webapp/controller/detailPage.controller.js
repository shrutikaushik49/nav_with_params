sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("navwithparams.controller.detailPage", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RoutedetailPage").attachMatched(function(oEvent) {
                    this.onRouteMatched(oEvent);
                }, this);

            },
            onRouteMatched: function(oEvent){
               let Params = oEvent.getParameter("arguments");

                const oData = {
                    recipient : {
                       name : "Please Wait"
                    }
                 };
                 const oModel = new JSONModel(oData);
                 this.getView().setModel(oModel,"LocalModel");
            
               this.getView().bindElement("/Customers('"  + Params.CustomerID + "')");
              

            },
            onOpenDialog : function(){
                // create dialog lazily
                this.pDialog ??= this.loadFragment({
                    name: "navwithparams.view.Fragments.Hello"
                });
            
                this.pDialog.then((oDialog) => oDialog.open());
            },
            onCloseDialog() {
               
                this.byId("helloDialog").close();
            }
        });
    });
