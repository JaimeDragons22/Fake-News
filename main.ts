namespace SpriteKind {
    export const PlatoGanador = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PlatoGanador, function (sprite, otherSprite) {
    game.splash("Tocame Otra Vez,Vamos Tocame!!!!!!")
    game.over(true)
})
game.splash("Fake News")
game.splash("Encuentra las noticias reales no falsa!")
tiles.setCurrentTilemap(tilemap`nivel1`)
let mySprite = sprites.create(assets.image`Character1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
let mySprite2 = sprites.create(assets.image`Win`, SpriteKind.PlatoGanador)
