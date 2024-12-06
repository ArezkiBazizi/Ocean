// src/components/OceanGame.js
import React, { useEffect, useRef, useState } from 'react';
import Phaser from 'phaser';
import { useNavigate } from 'react-router-dom';
import Ocean from '../assets/ocean2.png'; // Importer l'image d'océan
import Player from '../assets/player.png'; // Importer l'image du joueur
import Shark from '../assets/shark.png'; // Importer l'image du requin
import Seaweed from '../assets/seaweed.png'; // Importer l'image des herbes marines
import Coral from '../assets/coral.png'; // Importer l'image des murs du labyrinthe

const OceanGame = () => {
    const navigate = useNavigate();
    const isMounted = useRef(true); // Référence pour suivre l'état de montage
    const [gameOver, setGameOver] = useState(false); // État pour gérer la fin du jeu

    useEffect(() => {
        isMounted.current = true; // Le composant est monté

        const config = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: '#87CEEB', // Bleu ciel pour représenter l'océan
            parent: 'game-container',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 0 },
                    debug: false,
                },
            },
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);

        let player;
        let sharks;
        let seaweeds;
        let cursors;
        let playerSize = 1; // Réduire l'échelle initiale du joueur

        function preload() {
            // Charger les images depuis le dossier public/assets ou via import
            this.load.image('ocean', Ocean); // Image d'océan
            this.load.image('player', Player); // Image du joueur
            this.load.image('shark', Shark); // Image du requin
            this.load.image('seaweed', Seaweed); // Image des herbes marines
            this.load.image('wall', Coral); // Image des murs du labyrinthe
        }

        function create() {
            // Ajouter l'image de l'océan
            this.add.image(0, 0, 'ocean').setOrigin(0, 0).setDisplaySize(this.scale.width, this.scale.height);

            // Créer les murs du labyrinthe
            const maze = this.physics.add.staticGroup();

            // Exemple simple de murs (ajustez selon vos besoins pour créer un labyrinthe)
            const walls = [
                { x: 400, y: 300, sprite: 'wall' },
                { x: 400, y: 500, sprite: 'wall' },
                { x: 600, y: 300, sprite: 'wall' },
                { x: 200, y: 400, sprite: 'wall' },
                { x: 400, y: 700, sprite: 'wall' },
                { x: 400, y: 750, sprite: 'wall' },
                { x: 600, y: 800, sprite: 'wall' },
                { x: 200, y: 450, sprite: 'wall' },
                // Ajoutez plus de murs pour former un labyrinthe
            ];

            walls.forEach(wall => {
                maze.create(wall.x, wall.y, wall.sprite).setScale(0.5).refreshBody();
            });

            // Créer le joueur
            player = this.physics.add.sprite(100, 100, 'player');
            player.setCollideWorldBounds(true);
            player.setScale(playerSize);

            // Créer les herbes marines
            seaweeds = this.physics.add.group({
                key: 'seaweed',
                repeat: 10,
                setXY: { x: 150, y: 150, stepX: 70 },
            });

            seaweeds.children.iterate(function (child) {
                child.setScale(0.3);
                child.setBounce(1);
            });

            // Créer les requins
            sharks = this.physics.add.group({
                key: 'shark',
                repeat: 2,
                setXY: { x: 700, y: 500, stepX: 200 },
            });

            sharks.children.iterate(function (child) {
                child.setScale(0.5);
                child.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(-100, 100));
                child.setBounce(1, 1);
                child.setCollideWorldBounds(true);
            });

            // Gestion des collisions
            this.physics.add.collider(player, maze);
            this.physics.add.collider(sharks, maze);
            this.physics.add.collider(seaweeds, maze);
            this.physics.add.collider(sharks, sharks);

            // Collecter les herbes marines
            this.physics.add.overlap(player, seaweeds, collectSeaweed, null, this);

            // Collision avec les requins
            this.physics.add.overlap(player, sharks, hitShark, null, this);

            // Gestion des touches
            cursors = this.input.keyboard.createCursorKeys();
        }

        function update() {
            // Contrôler le joueur avec les touches fléchées
            if (cursors.left.isDown) {
                player.setVelocityX(-200);
            } else if (cursors.right.isDown) {
                player.setVelocityX(200);
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

            // Faire chasser le requin
            sharks.children.iterate(function (shark) {
                this.physics.moveToObject(shark, player, 100);
            }, this);
        }

        function collectSeaweed(playerObj, seaweed) {
            seaweed.disableBody(true, true);
            playerSize += 0.1; // Réduire l'augmentation de taille
            player.setScale(playerSize);
        }

        function hitShark(playerObj, shark) {
            if (playerSize >= 1.5) { // Ajuster le seuil de taille pour manger le requin
                // Le joueur a suffisamment grandi pour manger le requin
                shark.disableBody(true, true);
                playerSize += 0.3; // Réduire l'augmentation de taille
                player.setScale(playerSize);
            } else {
                // Le requin mange le joueur, fin du jeu
                this.physics.pause();
                player.setTint(0xff0000);
                if (isMounted.current) { // Vérifie si le composant est toujours monté
                    setGameOver(true); // Déclencher la fin du jeu
                }
            }
        }

        // Nettoyage lors du démontage du composant
        return () => {
            isMounted.current = false; // Le composant est démonté
            game.destroy(true);
        };
    }, [navigate]);

    const handleReturn = () => {
        navigate('/');
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {/* Bouton pour revenir à la page principale */}
            <button
                onClick={() => navigate('/')}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 1000,
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#0077be',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Retour
            </button>
            {/* Conteneur pour le jeu Phaser */}
            <div id="game-container" style={{ width: '100%', height: '100%' }}></div>

            {/* Modal de Game Over */}
            {gameOver && (
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: '#fff',
                        padding: '20px',
                        borderRadius: '10px',
                        zIndex: 1001,
                        textAlign: 'center',
                    }}
                >
                    <h2>Game Over</h2>
                    <p>Vous avez été mangé par le requin !</p>
                    <button
                        onClick={handleReturn}
                        style={{
                            marginTop: '10px',
                            padding: '10px 20px',
                            fontSize: '16px',
                            backgroundColor: '#0077be',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
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
