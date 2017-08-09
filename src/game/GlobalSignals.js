define(['ash',], function (Ash) {

    var GlobalSignals = {
        
        gameShownSignal: new Ash.Signals.Signal(),
        tabChangedSignal: new Ash.Signals.Signal(),        
        calloutsGeneratedSignal: new Ash.Signals.Signal(),        
        popupOpenedSignal: new Ash.Signals.Signal(),
        popupClosedSignal: new Ash.Signals.Signal(),
        
        playerMovedSignal: new Ash.Signals.Signal(),
        sectorScoutedSignal: new Ash.Signals.Signal(),
        improvementBuiltSignal: new Ash.Signals.Signal(),
        upgradeUnlockedSignal: new Ash.Signals.Signal(),
        featureUnlockedSignal: new Ash.Signals.Signal(),
        inventoryChangedSignal: new Ash.Signals.Signal(),
        
    };

    return GlobalSignals;
});
