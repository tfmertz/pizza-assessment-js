var Pizza = {
  init: function(type) {
    this.type = type;
  },
  cost: function() {

    switch(this.type) {
      case 1: return 10;
      break;
      case 2: return 12;
      break;
      default: return "We don't offer that selection!"
    }
  }
};

$(function() {


});
