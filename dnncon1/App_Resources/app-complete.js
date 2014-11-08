'use strict';

// Call the AngularJS module 'famousDNN'                
angular.module('famousDNN').controller('MainController', function ($scope, $famous) {


      // Import famous modules
      var Transitionable = $famous['famous/transitions/Transitionable'];

      
      /************************ DEMO 1 ************************/
      // [ DEMO 1 dependencies ]
      var Timer = $famous['famous/utilities/Timer'];

      
      /************************ DEMO 2+3+4 ********************/
      // [ DEMO 2+3+4 dependencies ]
      var Easing = $famous['famous/transitions/Easing'];
      var SpringTransition = $famous['famous/transitions/SpringTransition'];
  	  Transitionable.registerMethod('spring', SpringTransition);      
          
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
                
                $scope.spinnerSpeed = 10.0;
                $scope.changeSpeed = function(value) {
                    
                    $scope.spinnerSpeed = parseFloat(value);
                };
                            
                $scope.rotateY = new Transitionable(0);
            
                //Run function on every tick of the Famo.us engine
                Timer.every(function(){
                  var adjustedSpeed = $scope.spinnerSpeed / 1200.0;
                  $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
                }, 1);
    
                
                /************************ DEMO 2 ************************/   
                // [ DEMO 2 code ]
                
                // Static list for conference session
                // Replace with call to DNN or other REST service
                $scope.list = [
                        {content: "Item 1", bgColor: "#b58900", rotate: new Transitionable(0)},
                        {content: "Item 2", bgColor: "#cb4b16", rotate: new Transitionable(0)},
                        {content: "Item 3", bgColor: "#dc322f", rotate: new Transitionable(0)},
                        {content: "Item 4", bgColor: "#d33682", rotate: new Transitionable(0)},
                        {content: "Item 5", bgColor: "#6c71c4", rotate: new Transitionable(0)},
                        {content: "Item 6", bgColor: "#268bd2", rotate: new Transitionable(0)}
                    ];  
              
                $scope.gridLayoutOptions = {
                  dimensions: [2, 3]
                };
                
                
                /************************ DEMO 3 ************************/   
                // [ DEMO 3 code ]            
                $scope.spin = function(i) {
                    $scope.list[i].rotate.set(Math.PI * 4, {curve: Easing.inOutElastic, duration: 3000  }); 
                };
            
                /************************ DEMO 4 ************************/   
                // [ DEMO 4 code ]            
    
                $scope.rotationState = 0;            
                $scope.animate = function(p) {
                    if ($scope.rotationState != p) {
                      for (var i = 0; i < $scope.list.length; i++) {
                        $scope.list[i].rotate.set(p * 10 * (Math.PI/180), {method : 'spring', dampingRatio : 0.5, period : 500});
                      };
                      $scope.rotationState = p;
                    }
                };
    
                $scope.success = function(accel) {
                    // The accel parameter contains x, y and z properties indicating the acceleration in m/s squared
                    if (accel.y > 0.5) {                        
                           //$scope.animate(-1);                        
                    }
                    else if (accel.x > 0.5) {
                            //$scope.animate(1);                                                
                    };
                                      
                };
                                
                navigator.accelerometer.watchAcceleration($scope.success, function(error) {}, { frequency: 50 });
                                
                
              } // onDeviceReady
              
        }; // app

      app.initialize();

}); // famousDNN
    
