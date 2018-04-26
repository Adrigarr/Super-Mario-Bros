function loadHUB(Q) {
    Q.UI.Text.extend('CoinsLabel', {
        init: function(p) {
            this._super({
                label: p.label,
                x: 0,
                y: 10,
                size: 16
            });

            Q.state.on('change.coins', this, 'changeCoins');
        },

        changeCoins: function(coins) {
            this.p.label = 'Coins: ' + coins;
        }

    });

    Q.UI.Text.extend('LifesLabel', {
        init: function(p) {
            this._super({
                label: p.label,
                x: 120,
                y: 10,
                size: 16
            });

            Q.state.on('change.lifes', this, 'changeLifes');
        },

        changeLifes: function(lifes) {
            this.p.label = 'Lifes: ' + lifes;
        }
    });

    Q.scene('HUB', function(stage) {
        var container = stage.insert(new Q.UI.Container({
            x: Q.width / 3,
            y: 0,
            fill: 'rgba(0,0,0,0.0)'
        }));

        var labelCoins = container.insert(new Q.CoinsLabel({ label: 'Coins: 0' }));
        var labelLifes = container.insert(new Q.LifesLabel({ label: 'Lifes:' + initial_lifes}));

        container.fit(20);
    });
}