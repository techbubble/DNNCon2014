'use strict';

// Call the AngularJS module 'famousDNN'                
angular.module('famousDNN').controller('MainController', function ($scope, $famous) {


      // Import famous modules
      var Transitionable = $famous['famous/transitions/Transitionable'];

      
      /************************ DEMO 1 ************************/
      // [ DEMO 1 dependencies ]
 
      
      /************************ DEMO 2+3+4 ********************/
      // [ DEMO 2+3+4 dependencies ]
          
      var app =  {
            // Application Constructor
            initialize: function() {
                this.bindEvents();
            },
              
            // Bind Event Listeners
            bindEvents: function() {
                // We need this because the mobile device needs to have initialized
                // state before we attempt to execute code
                document.addEventListener('deviceready', this.onDeviceReady, false);
            },
    
            // Device is ready, let's go!  
            onDeviceReady: function() {
    
                navigator.splashscreen.hide();
    
                /************************ DEMO 1 ************************/
                // [ DEMO 1 code ]
                
    
                
                /************************ DEMO 2 ************************/   
                // [ DEMO 2 code ]
                
                
                
                /************************ DEMO 3 ************************/   
                // [ DEMO 3 code ]            
 
                
                
                /************************ DEMO 4 ************************/   
                // [ DEMO 4 code ]            
                                    
                
              } // onDeviceReady
              
        }; // app

      app.initialize();

}); // famousDNN
    
