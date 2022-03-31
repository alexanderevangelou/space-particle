controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    light.showAnimation(light.rainbowAnimation, 5000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    LASER = sprites.createProjectileFromSprite(img`
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        `, STARSHIP_1, 0, -140)
    music.pewPew.play()
    animation.runImageAnimation(
    LASER,
    [img`
        2 
        2 
        2 
        2 
        2 
        2 
        2 
        2 
        2 
        2 
        `,img`
        4 
        4 
        4 
        4 
        4 
        4 
        4 
        4 
        4 
        4 
        `,img`
        5 
        5 
        5 
        5 
        5 
        5 
        5 
        5 
        5 
        5 
        `,img`
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        7 
        `,img`
        6 
        6 
        6 
        6 
        6 
        6 
        6 
        6 
        6 
        6 
        `,img`
        8 
        8 
        8 
        8 
        8 
        8 
        8 
        8 
        8 
        8 
        `,img`
        9 
        9 
        9 
        9 
        9 
        9 
        9 
        9 
        9 
        9 
        `,img`
        3 
        3 
        3 
        3 
        3 
        3 
        3 
        3 
        3 
        3 
        `,img`
        a 
        a 
        a 
        a 
        a 
        a 
        a 
        a 
        a 
        a 
        `,img`
        c 
        c 
        c 
        c 
        c 
        c 
        c 
        c 
        c 
        c 
        `,img`
        b 
        b 
        b 
        b 
        b 
        b 
        b 
        b 
        b 
        b 
        `,img`
        d 
        d 
        d 
        d 
        d 
        d 
        d 
        d 
        d 
        d 
        `,img`
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        1 
        `,img`
        e 
        e 
        e 
        e 
        e 
        e 
        e 
        e 
        e 
        e 
        `,img`
        f 
        f 
        f 
        f 
        f 
        f 
        f 
        f 
        f 
        f 
        `],
    100,
    true
    )
    LASER.startEffect(effects.coolRadial, 5000)
    LASER.startEffect(effects.warmRadial, 5000)
    LASER.startEffect(effects.spray, 5000)
    LASER.startEffect(effects.fire, 5000)
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    music.smallCrash.play()
    otherSprite.destroy(effects.disintegrate)
    info.changeScoreBy(1)
    effects.clearParticles(LASER)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    music.bigCrash.play()
    otherSprite.destroy(effects.disintegrate)
    sprite.startEffect(effects.fire, 200)
    info.changeLifeBy(-1)
    info.changeScoreBy(-1)
})
let LASER: Sprite = null
let STARSHIP_1: Sprite = null
music.playMelody("C5 E C5 F C5 G C5 A ", 300)
game.splash(" asteroids are invadeing us", "dystroy 50 asteroids")
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff9ffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffff6ffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff5fffffffffff8ffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffff7fffffff6fffffffffffffffffffffffffffffffffffffffffffffffffff7ffffffffffffffffffffffff
    ffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffff
    ffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1ffffffffff1ffffffffff2fff9ffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffff6fffffffffffffffffffff1fffffffffffffffffffffff1fffffff
    fffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffdbbd9666666dbb668886888888cccccccccccccc9fffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9ffffffffffffffff4ffffffffffffff5fffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff5fffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff8ffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccfffffffffffffffffffffffffffffffffffffff1ffffffffffffffff
    fffffffffffffffffff1ffffffffffffffffff1fffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffff9fffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9fffffffffffffffff1ffffffffffffffff1ffffffffff8ffffff
    ffffffffffffffffffffffff7ffffffffffffffffff7fffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff6fffffffffffffffff1fffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6fffff2ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1ffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669fffffffffffffffffffff9ffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866fffffffffffffffffffffffffffffffffffffff1ffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869ffffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffff6ffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffff5fffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889ffffffffffffffffffffffffffffffffffffffffff8ffff
    ffffff5ffffffffff8ffffffffffffffffff6fffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886ffff6ffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff7fffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff1ffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff1ffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff2ffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9fff1fffffffffffffffffffffffffffffff2ffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffff6ffffff7ffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff4fffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869fffffffffffffffffffffffffffffffffffffff9ffffff
    fffffff6ffffffffffff2fffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff7ffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffff1fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff9fffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffff9fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669ffffffffffffffffff5fffffffff2ffffffff1fffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869fffffffffffffffffffffffffffffffffffffffffffff7ffff
    ffffffff6fffffff1fffffffffffff4ffffffff9ffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69ffffff9ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fff7fffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869fffffffffffffffffffffffffffffffffff7ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff9ffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff9ffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffff2fffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669fffffff9fffffffffffffffffffffffffffffffffffffffff9fffff7ff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffff1fffffff6fffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999ffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff8fffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffff8fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f7ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffff7f
    ffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffff7fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff6fffffffffffffffffffffffffffffffffff8fffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f6fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff2fffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffff9fffffffffffffffff1ffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffffff8ffffffff1fffffffff9ffffffffffffff9ffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff8ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
let asteroids = [
sprites.dungeon.collectibleBlueCrystal,
sprites.dungeon.collectibleBlueCrystal,
sprites.dungeon.collectibleRedCrystal,
sprites.dungeon.collectibleRedCrystal,
sprites.dungeon.collectibleBlueCrystal,
sprites.dungeon.collectibleBlueCrystal
]
STARSHIP_1 = sprites.create(sprites.space.spaceGreenShip, SpriteKind.Player)
animation.runImageAnimation(
STARSHIP_1,
[img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 2 . . . . . . . 
    . . . . . . e e 4 e . . . . . . 
    . . . . . . e 2 4 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 2 2 2 4 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 2 2 2 2 4 2 e e . 
    c c c c c c e e 2 2 2 4 2 2 e e 
    c c c c c c e e 2 2 2 2 4 2 e e 
    `,img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 4 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 4 . . . . . . . 
    . . . . . . e e 5 2 . . . . . . 
    . . . . . . e 4 5 2 . . . . . . 
    . . . . . c c c 2 2 2 . . . . . 
    . . . . e e 4 4 4 5 2 2 . . . . 
    . . e f f f c c 2 2 f f 2 2 . . 
    . e e e e 2 2 4 4 4 4 5 4 2 2 . 
    e e e e e e 2 2 4 4 4 5 4 4 2 2 
    e e e e e e 2 2 4 4 4 4 5 4 2 2 
    `,img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 3 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 3 . . . . . . . 
    . . . . . . 8 8 1 a . . . . . . 
    . . . . . . 8 3 1 a . . . . . . 
    . . . . . c c c a a a . . . . . 
    . . . . 8 8 3 3 3 1 a a . . . . 
    . . 8 f f f c c a a f f a a . . 
    . 8 8 8 8 a a 3 3 3 3 1 3 a a . 
    8 8 8 8 8 8 a a 3 3 3 1 3 3 a a 
    8 8 8 8 8 8 a a 3 3 3 3 1 3 a a 
    `,img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 6 . . . . . . . 
    . . . . . . 8 8 9 8 . . . . . . 
    . . . . . . 8 6 9 8 . . . . . . 
    . . . . . c c c 8 8 8 . . . . . 
    . . . . 8 8 6 6 6 9 8 8 . . . . 
    . . 8 f f f c c e e f f 8 8 . . 
    . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
    8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
    8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
    `,img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 7 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 7 . . . . . . . 
    . . . . . . 8 8 5 6 . . . . . . 
    . . . . . . 8 7 5 6 . . . . . . 
    . . . . . c c c 6 6 6 . . . . . 
    . . . . 8 8 7 7 7 5 6 6 . . . . 
    . . 8 f f f c c 6 6 f f 6 6 . . 
    . 8 8 8 8 6 6 7 7 7 7 5 7 6 6 . 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `],
1.1,
true
)
STARSHIP_1.setStayInScreen(true)
STARSHIP_1.bottom = 120
controller.moveSprite(STARSHIP_1, 100, 100)
info.setLife(3)
effects.starField.startScreenEffect()
forever(function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("E F G A E F G A ", 130)
        music.playMelody("E F G A E F G A ", 130)
        music.playMelody("F G A B F G A B ", 130)
        music.playMelody("F G A B F G A B ", 130)
    }
    music.playMelody("C5 B A G - A B G ", 200)
    music.playMelody("G B A G C5 B A B ", 200)
    music.playMelody("A G F G A F A G ", 200)
})
forever(function () {
    if (info.score() == 50) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(500, function () {
    LASER = sprites.createProjectileFromSide(asteroids[randint(0, asteroids.length - 1)], 0, 75)
    LASER.setKind(SpriteKind.Enemy)
    LASER.x = randint(10, 150)
})
