namespace SpriteKind {
    export const PlatoGanador = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Lo has encontrado!")
    game.over(true)
})
game.splash("Fake News")
game.splash("Encuentra las noticias reales no falsa!")
game.setDialogFrame(assets.image`Dialogo`)
tiles.setCurrentTilemap(tilemap`nivel1`)
let mySprite = sprites.create(assets.image`Character1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
