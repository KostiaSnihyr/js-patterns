// STANDART MODULE PATTERN
UICtrl = (function() {
    // Declare private vars and functions
    let text = 'Hello World';
  
    const changeText = function() {
      const element = document.querySelector('h1');
      element.textContent = text;
    }
  
    return {
      // Declare public var and functions
      callChangeText: function() {
        changeText();
      }
    }
  }());
  
  UICtrl.callChangeText();