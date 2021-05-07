var SenateSystem = (function() {
    function SenateSystem(adapter) {
        this.adapter = adapter;
    }
    SenateSystem.prototype.vote = function() {
        this.adapter.vote();
    };
    return SenateSystem;
})();

var currentAdapter = {
    vote: function() {
        console.log('Support the current emperor.');
    }
};

var rufusAdapter = {
    vote: function() {
        console.log('Support Rufus as the emperor.');
    }
};

senateSystem = new SenateSystem(currentAdapter);
senateSystem.vote();
senateSystem = new SenateSystem(rufusAdapter);
senateSystem.vote();

var galbaAdapter = {
    vote: function() {
        console.log('Support Galba as the emperor.');
    }
};

senateSystem = new SenateSystem(galbaAdapter);
senateSystem.vote();