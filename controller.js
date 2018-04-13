

matcherController = {

  model: matcherModel,
  view: matcherView,
  selecting: false,

  init: function( size ) {
    this.model.init( size );
    this.view.init();
    this.view.addClickHandlers( this.selectCard, this );
  },
  
  selectCard: function( id ) {
    if( this.selecting || this.model.isSelectedCard(id) ) return;
    this.selecting = true;
    // debugger;
    this.view.revealCard(id);

    if (this.model.selectedCard){
      var selectId = this.model.selectedCard.id;
      var isCorrect = this.model.checkGuess(id);
      this.view.updateGameState();
      var that = this;

      if( isCorrect ){
        setTimeout( function(){
          that.view.setCorrect(selectId);
          that.view.setCorrect(id);
          that.selecting = false;
        }, 500);
      } else {
        setTimeout( function(){
          that.view.hideCards();
          that.selecting = false;
        }, 1500);
      }
    } else {
      this.model.setSelectedCard( id );
      this.selecting = false;
    }
  },
    
};
