
class GameManager{

    static instance = new GameManager();

    constructor(){
        this.player = new Player(
            50,
            5
        );

        this.playerFortress = new Fortress(
            PLAYER_FORTRESS_LOCATION,
            100,
            100,
            "blue",
            CollisionType.FORTRESS_PLAYER
        );

        this.enemyFortress = new Fortress(
            ENEMY_FORTRESS_LOCATION,
            100,
            100,
            "red",
            CollisionType.FORTRESS_ENEMY
        );

        this.statsDisplay = new StatManager();
        this.controlsDisplay = new StatManager();
    }

    static getInstance(){
        return this.instance;
    }

    initialize(){

        // Add Entries for Displaying Information

            // Add Entries for Game Stats
                this.statsDisplay.addEntry(
                    new StatEntry(
                        "Health",
                        () => this.player.health + " / " + this.player.maxHealth
                    )
                );

                this.statsDisplay.addEntry(
                    new StatEntry(
                        "Bullets",
                        () => this.player.projectileManager.getNumberOfActiveProjectiles() + " / " + this.player.projectileManager.maxProjectiles
                    )
                );

                this.statsDisplay.addEntry(
                    new StatEntry(
                        "Barricades",
                        () => this.player.barricadeManager.getNumberOfActiveProjectiles() + " / " + this.player.barricadeManager.maxProjectiles
                    )
                );

                this.statsDisplay.addEntry(
                    new StatEntry(
                        "Turrets",
                        () => this.player.turretManager.getNumberOfActiveEntities() + " / " + this.player.turretManager.maxEntities
                    )
                );

                this.statsDisplay.addEntry(
                    new StatEntry(
                        "Enemies",
                        () => EnemyManager.getInstance().getNumberOfActiveEntities() + " / " + EnemyManager.getInstance().maxEntities
                    )
                );

            // Add Entries for Controls
                this.controlsDisplay.addEntry(
                    new StatEntry(
                        "WASD",
                        () => "Move"
                    )
                );

                this.controlsDisplay.addEntry(
                    new StatEntry(
                        "LMB, SPACE",
                        () => "Shoot"
                    )
                );

                this.controlsDisplay.addEntry(
                    new StatEntry(
                        "Q / E",
                        () => "Spawn Enemy"
                    )
                );

                this.controlsDisplay.addEntry(
                    new StatEntry(
                        "R / F",
                        () => "Spawn Barricade"
                    )
                );

                this.controlsDisplay.addEntry(
                    new StatEntry(
                        "T",
                        () => "Spawn Turret"
                    )
                );
    }

    update(){
        background("skyblue");

        if(this.isGameOver()){
            this.displayGameOver();
            return;
        }
        
        CollisionManager.update();
        EnemyManager.getInstance().update(this.playerFortress, this.enemyFortress);
        this.player.update(EnemyManager.getInstance().entities);

        this.playerFortress.update();
        this.enemyFortress.update();

        this.statsDisplay.display(Point.fromNative(50, 50), 20);
        this.controlsDisplay.display(Point.fromNative(width - 250, height - 150), 20);
    }

    isGameOver(){
        var isPlayerDead = !this.player.isActive;
        var isEnemyFortressDead = !this.enemyFortress.isActive;
        var isPlayerFortressDead = !this.playerFortress.isActive;

        if(isPlayerDead || isEnemyFortressDead || isPlayerFortressDead)
            return true;
        else
            return false;
    }

    displayGameOver(){
        Utility.textCenter(
            "Game Over!",
            Utility.cartesianToNativeX(0),
            Utility.cartesianToNativeY(0),
            100
        );
    }
}