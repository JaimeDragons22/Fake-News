// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`100014000101010101010101010101010101010101020202020202020202020202020201010202020202020202020202020202010102020202020202020202020202020101030202020202020202020202020401010302010101010101010101010101010103020202020202020202020202020101030202020202020202020202020201010101010101010101010101010202010102020202020202020202020202020101020202020202020202020202020301010202020202020202020202020203010102020202020202020202020202030101010101010101010101010101020301010302020202020202020202020203010103020202020202020202020202030101030201010101010101010101010101010302020202020202020202020202010103020202020202020202020202020101010101010101010101010101010101`, img`
2222222222222222
2..............2
2..............2
2..............2
2..............2
2..2222222222222
2..............2
2..............2
2222222222222..2
2..............2
2..............2
2..............2
2..............2
2222222222222..2
2..............2
2..............2
2..2222222222222
2..............2
2..............2
2222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorDark0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.stairSouth,sprites.dungeon.stairLadder], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
