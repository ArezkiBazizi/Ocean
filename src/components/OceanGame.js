// src/components/OceanGame.js
import React, { useEffect, useRef, useState } from "react";
import Phaser from "phaser";
import { useNavigate } from "react-router-dom";
import Ocean from "../assets/ocean2.png"; // Ocean background
import Player from "../assets/player.png"; // Player sprite
import Shark from "../assets/shark.png"; // Shark sprite
import Seaweed from "../assets/seaweed.png"; // Seaweed sprite
import Coral from "../assets/coral.png"; // Maze wall sprite

const OceanGame = () => {
    const navigate = useNavigate();
    const gameRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: "#87CEEB",
            parent: "game-container",
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 0 },
                    debug: false,
                },
            },
            scene: {
                preload,
                create,
                update,
            },
        };

        let game = new Phaser.Game(config);
        gameRef.current = game;

        let player;
        let sharks;
        let seaweeds;
        let cursors;
        let playerSize = 0.8; // Adjust player size for gameplay balance

        function preload() {
            this.load.image("ocean", Ocean);
            this.load.image("player", Player);
            this.load.image("shark", Shark);
            this.load.image("seaweed", Seaweed);
            this.load.image("wall", Coral);
        }

        function create() {
            // Background
            this.add
                .image(0, 0, "ocean")
                .setOrigin(0, 0)
                .setDisplaySize(this.scale.width, this.scale.height);

            // Maze walls
            const maze = this.physics.add.staticGroup();
            const walls = [
                { x: 400, y: 300 },
                { x: 600, y: 300 },
                { x: 400, y: 700 },
                { x: 200, y: 450 },
                { x: 700, y: 450 },
                { x: 300, y: 150 },
            ];

            walls.forEach(({ x, y }) =>
                maze.create(x, y, "wall").setScale(0.5).refreshBody()
            );

            // Player
            player = this.physics.add.sprite(100, 100, "player");
            player.setCollideWorldBounds(true);
            player.setScale(playerSize);
            player.setBounce(0.3);

            // Seaweed
            seaweeds = this.physics.add.group({
                key: "seaweed",
                repeat: 10,
                setXY: { x: 150, y: 150, stepX: 100, stepY: 70 },
            });
            seaweeds.children.iterate((child) => {
                child.setScale(0.3);
                child.setBounce(1);
            });

            // Sharks
            sharks = this.physics.add.group({
                key: "shark",
                repeat: 3,
                setXY: { x: 500, y: 300, stepX: 150 },
            });
            sharks.children.iterate((child) => {
                child.setScale(0.4);
                child.setVelocity(
                    Phaser.Math.Between(-100, 100),
                    Phaser.Math.Between(-100, 100)
                );
                child.setBounce(1, 1);
                child.setCollideWorldBounds(true);
            });

            // Collisions
            this.physics.add.collider(player, maze);
            this.physics.add.collider(sharks, maze);
            this.physics.add.collider(seaweeds, maze);
            this.physics.add.collider(sharks, sharks);

            // Overlaps
            this.physics.add.overlap(player, seaweeds, collectSeaweed, null, this);
            this.physics.add.overlap(player, sharks, hitShark, null, this);

            // Input
            cursors = this.input.keyboard.createCursorKeys();
        }

        function update() {
            if (cursors.left.isDown) {
                player.setVelocityX(-200);
                player.flipX = true;
            } else if (cursors.right.isDown) {
                player.setVelocityX(200);
                player.flipX = false;
            } else {
                player.setVelocityX(0);
            }

            if (cursors.up.isDown) {
                player.setVelocityY(-200);
            } else if (cursors.down.isDown) {
                player.setVelocityY(200);
            } else {
                player.setVelocityY(0);
            }

            // Sharks chase the player and flip sprite based on direction
            sharks.children.iterate((shark) => {
                this.physics.moveToObject(shark, player, 120);

                // Flip shark sprite
                if (shark.body.velocity.x > 0) {
                    shark.flipX = true; // Face left
                } else if (shark.body.velocity.x < 0) {
                    shark.flipX = false; // Face right
                }
            });
        }



        function collectSeaweed(player, seaweed) {
            seaweed.disableBody(true, true);
            playerSize += 0.05;
            player.setScale(playerSize);
        }

        function hitShark(player, shark) {
            if (playerSize >= 1.2) {
                // Player can eat sharks
                shark.disableBody(true, true);
                playerSize += 0.1;
                player.setScale(playerSize);
            } else {
                // Game Over
                this.physics.pause();
                player.setTint(0xff0000);
                setGameOver(true);
            }
        }

        // Cleanup
        return () => {
            if (game) {
                game.destroy(true);
                game = null;
            }
        };
    }, []);

    const handleReturn = () => navigate("/");

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            {/* Navigation Button */}
            <button
                onClick={handleReturn}
                style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    zIndex: 1000,
                    padding: "10px 20px",
                    fontSize: "16px",
                    backgroundColor: "#0077be",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Retour
            </button>

            {/* Game Container */}
            <div id="game-container" style={{ width: "100%", height: "100%" }}></div>

            {/* Game Over Modal */}
            {gameOver && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        color: "#fff",
                        padding: "20px",
                        borderRadius: "10px",
                        zIndex: 1001,
                        textAlign: "center",
                    }}
                >
                    <h2>Game Over</h2>
                    <p>Vous avez été mangé par un requin !</p>
                    <button
                        onClick={handleReturn}
                        style={{
                            marginTop: "10px",
                            padding: "10px 20px",
                            fontSize: "16px",
                            backgroundColor: "#0077be",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Retour
                    </button>
                </div>
            )}
        </div>
    );
};

export default OceanGame;
