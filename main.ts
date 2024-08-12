namespace SpriteKind {
    export const dead = SpriteKind.create()
    export const deadEnemy = SpriteKind.create()
    export const Snail = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        isjumping = true
        timer.after(250, function () {
            isjumping = false
        })
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (ishittinghead) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
        )
    }
    if (islanding) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
        )
    }
    if (controller.up.isPressed() || controller.A.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Left)) {
            if (mySprite.tileKindAt(TileDirection.Left, assets.tile`tile1`) || mySprite.tileKindAt(TileDirection.Left, assets.tile`tile17`)) {
                mySprite.vy = -110
            }
        }
        if (mySprite.isHittingTile(CollisionDirection.Right)) {
            if (mySprite.tileKindAt(TileDirection.Right, assets.tile`tile16`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`tile17`)) {
                mySprite.vy = -110
            }
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        pounding = false
    }
})
events.wallEvent(SpriteKind.Player, events.simpleWallCondition(events.WallFlag.Top), events.WallEvent.StartHitting, function (sprite) {
    ishittinghead = true
    timer.after(50, function () {
        ishittinghead = false
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            isjumping = true
            timer.after(250, function () {
                isjumping = false
            })
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    sprinting = true
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    sprinting = false
})
scene.onHitWall(SpriteKind.Snail, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . f 5 f 5 f . . . . . . . 
            . . . f 5 f 4 f 5 f f f f f f . 
            . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
            . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
            f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
            . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
            . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 f f f 8 8 f . 
            . . . f 8 8 8 8 f 8 8 8 f 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 f 5 f . . . . . . 
            . . . . f 5 f 4 f 5 f f f f f f 
            . . . f 5 f 4 f 5 f 8 f 8 f 8 f 
            . . f 5 f 4 f 5 f 8 8 1 f 1 8 f 
            . f 5 f 4 f 5 f 8 8 8 2 8 2 8 f 
            . . f 5 f 5 f 8 8 8 8 2 8 2 8 f 
            . . . f 5 f 8 8 8 8 8 8 8 8 8 f 
            . . . . f 8 8 8 8 8 f f f 8 8 f 
            . . . . f 8 8 8 8 f 8 8 8 f 8 f 
            . . . . f 8 8 8 8 8 8 8 8 8 8 f 
            . . . . f 8 8 8 8 8 8 8 8 8 8 f 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f . . . . . . 
            . . . . . . . . f 5 f . . . . . 
            . . . . . . . f 5 f 5 f . . . . 
            . f f f f f f 5 f 4 f 5 f . . . 
            . f 8 f 8 f 8 f 5 f 4 f 5 f . . 
            . f 8 1 f 1 8 8 f 5 f 4 f 5 f . 
            . f 8 2 8 2 8 8 8 f 5 f 4 f 5 f 
            . f 8 2 8 2 8 8 8 8 f 5 f 5 f . 
            . f 8 8 8 8 8 8 8 8 8 f 5 f . . 
            . f 8 8 f f f 8 8 8 8 8 f . . . 
            . f 8 f 8 8 8 f 8 8 8 8 f . . . 
            . f 8 8 8 8 8 8 8 8 8 8 f . . . 
            . f 8 8 8 8 8 8 8 8 8 8 f . . . 
            . f 8 8 8 8 8 8 8 8 8 8 f . . . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f . . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . f 5 f 5 f . . . . . 
            f f f f f f 5 f 4 f 5 f . . . . 
            f 8 f 8 f 8 f 5 f 4 f 5 f . . . 
            f 8 1 f 1 8 8 f 5 f 4 f 5 f . . 
            f 8 2 8 2 8 8 8 f 5 f 4 f 5 f . 
            f 8 2 8 2 8 8 8 8 f 5 f 5 f . . 
            f 8 8 8 8 8 8 8 8 8 f 5 f . . . 
            f 8 8 f f f 8 8 8 8 8 f . . . . 
            f 8 f 8 8 8 f 8 8 8 8 f . . . . 
            f 8 8 8 8 8 8 8 8 8 8 f . . . . 
            f 8 8 8 8 8 8 8 8 8 8 f . . . . 
            . f 8 8 8 8 8 8 8 8 8 8 f . . . 
            . f f f f f f f f f f f f f . . 
            `],
        400,
        true
        )
    }
})
events.wallEvent(SpriteKind.Player, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StartHitting, function (sprite) {
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    400,
    400,
    255,
    0,
    200,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), mySprite.x, mySprite.bottom, 100)
    islanding = true
    timer.after(50, function () {
        islanding = false
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile11`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(7, ExtraEffectPresetShape.Cloud), 100)
    crystals += 1
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408010205001c000f0a006400f4010a00000400000000000000000000000000000000027a0000000100011901000200010d02000300011b03000400010f04000500011d05000600011106000700011e07000800011208000900012009000a0001140a000b00011e0b000c0001120c000d00011d0d000e0001110e000f00011b0f001000010f10001100011911001200010d1200180002081418002000020d1907001c00020a006400f40164000004000000000000000000000000000000000330000000040003191d200400080003191d2008000c00031d20240c001000031e222510001800031b1e2218001c00031d2025`), music.PlaybackMode.InBackground)
    timer.after(2000, function () {
        music.play(music.createSong(hex`0078000408100405001c000f0a006400f4010a000004000000000000000000000000000000000290020000040002192504000800021b2708000c0002202c0c00100002222a1000140002252918001c0001252000240002192524002800021b2728002c0002202c2c00300002222a3000340002252938003c0001254000440002192544004800021b2748004c0002202c4c00500002222a5000540002252958005c0001256000640002192564006800021b2768006c0002202c6c00700002222a7000740002252978007c0001258000840002192584008800021b2788008c0002202c8c00900002222a9000940002252998009c000125a000a400021925a400a800021b27a800ac0002202cac00b00002222ab000b400022529b800bc000125c000c400021925c400c800021b27c800cc0002202ccc00d00002222ad000d400022529d800dc000125e000e400021925e400e800021b27e800ec0002202cec00f00002222af000f400022529f800fc0001250001040102192504010801021b2708010c0102202c0c01100102222a1001140102252918011c0101252001240102192524012801021b2728012c0102202c2c01300102222a3001340102252938013c0101254001440102192544014801021b2748014c0102202c4c01500102222a5001540102252958015c0101256001640102192564016801021b2768016c0102202c6c01700102222a7001740102252978017c0101258001840102192584018801021b2788018c0102202c8c01900102222a9001940102252998019c010125a001a401021925a401a801021b27a801ac0102202cac01b00102222ab001b401022529b801bc010125c001c401021925c401c801021b27c801cc0102202ccc01d00102222ad001d401022529d801dc010125e001e401021925e401e801021b27e801ec0102202cec01f00102222af001f401022529f801fc01012507001c00020a006400f401640000040000000000000000000000000000000003600000001000010d20003000010f40005000011160007000011280009000010da000b000010fc000d0000111e000f000011200011001010d20013001010f40015001011160017001011280019001010da001b001010fc001d0010111e001f001011208001c000e050046006603320000040a002d0000006400140001320002010002f00000010401011d04010801011e08010c0101240c011001012510011401012920012401011e24012801012028012c0101252c013001012730013401012a40014401011d44014801011e48014c0101244c015001012550015401012960016401012964016801012568016c0101246c017001012070017401012080018401011d84018801011e88018c0101248c0190010125900194010129a001a401011ea401a8010120a801ac010125ac01b0010127b001b401012ac001c401011dc401c801011ec801cc010124cc01d0010125d001d4010129e001e4010129e401e8010125e801ec010124ec01f0010120f001f401012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80068060000010002040802000300010804000500010806000700020408080009000206080a000b0001080c000d0001080e000f0001081000110002040812001300010814001500010816001700020408180019000206081a001b0001081c001d0001081e001f000108200021000303040822002300010324002500010326002700020304280029000203062a002b0001032c002d0001032e002f0001033000310002030432003300010334003500010336003700020304380039000203063a003b0001033c003d0001033e003f0001034000410002040842004300010844004500010846004700020408480049000206084a004b0001084c004d0001084e004f0001085000510002040852005300010854005500010856005700020408580059000206085a005b0001085c005d0001085e005f000108600061000303040862006300010364006500010366006700020304680069000203066a006b0001036c006d0001036e006f0001037000710002030472007300010374007500010376007700020304780079000203067a007b0001037c007d0001037e007f0001038000810002040882008300010884008500010886008700020408880089000206088a008b0001088c008d0001088e008f0001089000910002040892009300010894009500010896009700020408980099000206089a009b0001089c009d0001089e009f000108a000a10003030408a200a3000103a400a5000103a600a700020304a800a900020306aa00ab000103ac00ad000103ae00af000103b000b100020304b200b3000103b400b5000103b600b700020304b800b900020306ba00bb000103bc00bd000103be00bf000103c000c100020408c200c3000108c400c5000108c600c700020408c800c900020608ca00cb000108cc00cd000108ce00cf000108d000d100020408d200d3000108d400d5000108d600d700020408d800d900020608da00db000108dc00dd000108de00df000108e000e10003030408e200e3000103e400e5000103e600e700020304e800e900020306ea00eb000103ec00ed000103ee00ef000103f000f100020304f200f3000103f400f5000103f600f700020304f800f900020306fa00fb000103fc00fd000103fe00ff0001030001010102040802010301010804010501010806010701020408080109010206080a010b0101080c010d0101080e010f0101081001110102040812011301010814011501010816011701020408180119010206081a011b0101081c011d0101081e011f010108200121010303040822012301010324012501010326012701020304280129010203062a012b0101032c012d0101032e012f0101033001310102030432013301010334013501010336013701020304380139010203063a013b0101033c013d0101033e013f0101034001410102040842014301010844014501010846014701020408480149010206084a014b0101084c014d0101084e014f0101085001510102040852015301010854015501010856015701020408580159010206085a015b0101085c015d0101085e015f010108600161010303040862016301010364016501010366016701020304680169010203066a016b0101036c016d0101036e016f0101037001710102030472017301010374017501010376017701020304780179010203067a017b0101037c017d0101037e017f0101038001810102040882018301010884018501010886018701020408880189010206088a018b0101088c018d0101088e018f0101089001910102040892019301010894019501010896019701020408980199010206089a019b0101089c019d0101089e019f010108a001a10103030408a201a3010103a401a5010103a601a701020304a801a901020306aa01ab010103ac01ad010103ae01af010103b001b101020304b201b3010103b401b5010103b601b701020304b801b901020306ba01bb010103bc01bd010103be01bf010103c001c101020408c201c3010108c401c5010108c601c701020408c801c901020608ca01cb010108cc01cd010108ce01cf010108d001d101020408d201d3010108d401d5010108d601d701020408d801d901020608da01db010108dc01dd010108de01df010108e001e10103030408e201e3010103e401e5010103e601e701020304e801e901020306ea01eb010103ec01ed010103ee01ef010103f001f101020304f201f3010103f401f5010103f601f701020304f801f901020306fa01fb010103fc01fd010103fe01ff010103`), music.PlaybackMode.LoopingInBackground)
    })
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f f 
            . . . f a a a a a a a f a f a f 
            . . . f a a a a a a a 1 f 1 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a f f f a a f 
            . . . f a a a a a f a a a f a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a a a a a a f 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f a f a f a a a a a a a f . . 
            . f a 1 f 1 a a a a a a a f . . 
            . f a 2 a 2 a a a a a a a f . . 
            . f a 2 a 2 a a a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f a a f f f a a a a a a f . . 
            . f a f a a a f a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f . . . 
            f a f a f a a a a a a a f . . . 
            f a 1 f 1 a a a a a a a f . . . 
            f a 2 a 2 a a a a a a a f . . . 
            f a 2 a 2 a a a a a a a f . . . 
            f a a a a a a a a a a a f . . . 
            f a a f f f a a a a a a f . . . 
            f a f a a a f a a a a a f . . . 
            f a a a a a a a a a a a f . . . 
            f a a a a a a a a a a a f . . . 
            . f a a a a a a a a a a a f . . 
            . f f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite) {
        isjumping = false
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    isjumping = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    if (sprinting) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    } else {
        tiles.setWallAt(location, true)
        timer.after(250, function () {
            tiles.setWallAt(location, false)
        })
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallDown)))) {
        pounding = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile41`, function (sprite, location) {
    if (crystals == 3) {
        extraEffects.createSpreadEffectOnAnchor(mySprite, extraEffects.createSingleColorSpreadEffectData(4, ExtraEffectPresetShape.Cloud), 100)
        game.setGameOverMessage(true, "END OF DEMO!")
        game.gameOver(true)
    }
})
function animations () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f f f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . . f 7 7 7 7 7 7 7 1 7 1 7 f 
        . . . f 7 7 7 7 7 7 7 f 7 f 7 f 
        . . . f 7 7 7 7 7 7 7 f 7 f 7 f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . . f 7 7 7 7 7 f 7 7 7 f 7 f 
        . . . f 7 7 7 7 7 7 f f f 7 7 f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 1 7 1 7 7 7 7 7 7 7 f . . . 
        f 7 f 7 f 7 7 7 7 7 7 7 f . . . 
        f 7 f 7 f 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 f 7 7 7 f 7 7 7 7 7 f . . . 
        f 7 7 f f f 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft, Predicate.FacingLeft)
    )
    if (pounding) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . f 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 f . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . . . . f 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 f . . . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . f 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 f . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . . . . f 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 f . . . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . f f f f f . . . . . . . . . 
            . f 7 7 7 f . . . . . . . . . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . . . . . . . . . f 7 7 7 f . . 
            . . . . . . . . f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . . f 7 7 7 f . . . . . . . . . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . . . . . . . . . f 7 7 7 f . 
            . . . . . . . . . f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . f f f f f . . . . . . . . . 
            . f 7 7 7 f . . . . . . . . . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . . . . . . . . . f 7 7 7 f . . 
            . . . . . . . . f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . . f 7 7 7 f . . . . . . . . . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . . . . . . . . . f 7 7 7 f . 
            . . . . . . . . . f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingLeft, Predicate.FacingLeft)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingLeft, Predicate.FacingLeft)
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (pounding) {
        otherSprite.vy = -200
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
            otherSprite.vx = -100
        } else {
            otherSprite.vx = 100
        }
        otherSprite.setKind(SpriteKind.deadEnemy)
        otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        timer.after(750, function () {
            sprites.destroy(otherSprite)
        })
    } else {
        sprite.vy = -200
        sprite.vx = -300
        sprite.setKind(SpriteKind.dead)
        sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        cantmove = true
        timer.after(750, function () {
            game.reset()
        })
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Snail, function (sprite, otherSprite) {
    if (pounding) {
        sprite.vy = -120
    } else {
        sprite.vy = -200
        sprite.vx = -300
        sprite.setKind(SpriteKind.dead)
        sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        cantmove = true
        timer.after(750, function () {
            game.reset()
        })
    }
})
let cantmove = false
let crystals = 0
let sprinting = false
let pounding = false
let islanding = false
let ishittinghead = false
let isjumping = false
let myenemy: Sprite = null
let mySprite: Sprite = null
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
music.stopAllSounds()
Keybinds.setSimulatorKeymap(
Keybinds.PlayerNumber.ONE,
Keybinds.CustomKey.UP,
Keybinds.CustomKey.DOWN,
Keybinds.CustomKey.LEFT,
Keybinds.CustomKey.RIGHT,
Keybinds.CustomKey.SPACE,
Keybinds.CustomKey.ENTER
)
Keybinds.setSimulatorKeymap(
Keybinds.PlayerNumber.TWO,
Keybinds.CustomKey.PLUS,
Keybinds.CustomKey.MINUS,
Keybinds.CustomKey.PLUS,
Keybinds.CustomKey.MINUS,
Keybinds.CustomKey.SHIFT,
Keybinds.CustomKey.PLUS
)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    77771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111777711111111111111111111111111111777111111111177711177771111111111111111111111111111177711111111117771177771111111111111111111111111111177711111111117771117777111111111111111111111111111117771111111111777111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    1111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111777ddddddd1117771111111111111ddddddd1111111111111111777ddddddd1117771111111111111ddddddd111111111111111111
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    1111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd1111111dddddd9999999dddddd111111111111
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    dddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999ddddddd9999999999999999999dddddddddddd
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ..........................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ..........................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ..........................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ..........................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ..........................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ..........................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ..........................................................................................................................fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ..........................................................................................................................fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff...........................................................................................................
    ...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    ...................................................................................................................ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...........................................................................................................
    `)
scroller.scrollBackgroundWithSpeed(-100, 0, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(100, 0, scroller.BackgroundLayer.Layer1)
let myTextSprite = fancyText.create("CUBE SLUG\\n\\n<black>PRESS A</black>", 0, 7, fancyText.rounded_large)
myTextSprite.setPosition(160, 80)
music.play(music.createSong(hex`0078000408080305001c000f0a006400f4010a0000040000000000000000000000000000000002800100000400011904000800011908000c0001190c001000012010001400012014001800012018001c0001241c002000012520002400012724002800012728002c0001272c003000012030003400012034003800012038003c0001203c004000012040004400011944004800011948004c0001194c005000012050005400012054005800012058005c0001245c006000012560006400012764006800012768006c0001276c007000012070007400012074007800012078007c0001207c008000012080008400011984008800011988008c0001198c009000012090009400012094009800012098009c0001249c00a0000125a000a4000127a400a8000127a800ac000127ac00b0000120b000b4000120b400b8000120b800bc000120bc00c0000120c000c4000119c400c8000119c800cc000119cc00d0000120d000d4000120d400d8000120d800dc000124dc00e0000125e000e4000127e400e8000127e800ec000127ec00f0000120f000f4000120f400f8000120f800fc000120fc000001012007001c00020a006400f401640000040000000000000000000000000000000003c00080008400011984008800011988008c0001198c009000012090009400012094009800012098009c0001249c00a0000125a000a4000127a400a8000127a800ac000127ac00b0000120b000b4000120b400b8000120b800bc000120bc00c0000120c000c4000119c400c8000119c800cc000119cc00d0000120d000d4000120d400d8000120d800dc000124dc00e0000125e000e4000127e400e8000127e800ec000127ec00f0000120f000f4000120f400f8000120f800fc000120fc000001012008001c000e050046006603320000040a002d0000006400140001320002010002800100000400010d04000800010f08000c0001110c001000010f10001400011114001800011218001c0001111c002000011220002400011424002800011428002c0001142c003000010d30003400010f34003800010d38003c00010f3c004000010d40004400010d44004800010f48004c0001114c005000010f50005400011154005800011258005c0001115c006000011260006400011464006800011468006c0001146c007000010d70007400010f74007800010d78007c00010f7c008000010d80008400010d84008800010f88008c0001118c009000010f90009400011194009800011298009c0001119c00a0000112a000a4000114a400a8000114a800ac000114ac00b000010db000b400010fb400b800010db800bc00010fbc00c000010dc000c400010dc400c800010fc800cc000111cc00d000010fd000d4000111d400d8000112d800dc000111dc00e0000112e000e4000114e400e8000114e800ec000114ec00f000010df000f400010ff400f800010df800fc00010ffc000001010d`), music.PlaybackMode.LoopingInBackground)
pauseUntil(() => controller.A.isPressed())
sprites.destroy(myTextSprite)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    ................................................................................................................................................................................................................................................................................................................................
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
    . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
    . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
    . . f 7 7 7 7 7 7 f f f 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
mySprite.fx = 500
let mySprite2 = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
mySprite2.setFlag(SpriteFlag.Invisible, true)
mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f . . . . . . 
    . . f 6 7 7 7 7 7 7 f . . . . . 
    . . f 6 7 7 f 7 7 7 f . . . . . 
    . . f 6 7 f 7 f 7 7 f . . . . . 
    . . f 6 f f f f f 7 f . . . . . 
    . . f 6 f 7 7 7 f 7 f . . . . . 
    . . f 6 7 7 7 7 7 7 f . . . . . 
    . . f 6 6 6 6 6 6 6 f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogFrame(img`
    71111111711171117171111711111117
    1111111dd111111dd111711dd1111111
    11111dd99dd11dd99dd11dd99dd11111
    1711d999999dd999999dd999999d1171
    111d999999999999999999999999d111
    71d99999999999999999999999999d17
    11d99999999999999999999999999d11
    7d9999999999999999999999999999d7
    1d9999999999999999999999999999d1
    11d99999999999999999999999999d11
    11d99999999999999999999999999d11
    711d999999999999999999999999d117
    111d999999999999999999999999d111
    11d99999999999999999999999999d11
    11d99999999999999999999999999d11
    7d9999999999999999999999999999d7
    7d9999999999999999999999999999d7
    11d99999999999999999999999999d11
    11d99999999999999999999999999d11
    171d999999999999999999999999d171
    111d999999999999999999999999d111
    71d99999999999999999999999999d17
    11d99999999999999999999999999d11
    7d9999999999999999999999999999d7
    1d9999999999999999999999999999d1
    11d99999999999999999999999999d11
    11d99999999999999999999999999d11
    711d999999999999999999999999d117
    1111d999999dd999999dd999999d1111
    11111dd99dd11dd99dd11dd99dd11111
    1111111dd117111dd111111dd1111111
    71111111711117171117111711111117
    `)
game.showLongText("COLLECT ALL THREE GREEN CRYSTALS TO GET THE ORANGE CRYSTAL!", DialogLayout.Full)
scene.cameraFollowSprite(mySprite2)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
music.stopAllSounds()
music.play(music.createSong(hex`0078000408100405001c000f0a006400f4010a000004000000000000000000000000000000000290020000040002192504000800021b2708000c0002202c0c00100002222a1000140002252918001c0001252000240002192524002800021b2728002c0002202c2c00300002222a3000340002252938003c0001254000440002192544004800021b2748004c0002202c4c00500002222a5000540002252958005c0001256000640002192564006800021b2768006c0002202c6c00700002222a7000740002252978007c0001258000840002192584008800021b2788008c0002202c8c00900002222a9000940002252998009c000125a000a400021925a400a800021b27a800ac0002202cac00b00002222ab000b400022529b800bc000125c000c400021925c400c800021b27c800cc0002202ccc00d00002222ad000d400022529d800dc000125e000e400021925e400e800021b27e800ec0002202cec00f00002222af000f400022529f800fc0001250001040102192504010801021b2708010c0102202c0c01100102222a1001140102252918011c0101252001240102192524012801021b2728012c0102202c2c01300102222a3001340102252938013c0101254001440102192544014801021b2748014c0102202c4c01500102222a5001540102252958015c0101256001640102192564016801021b2768016c0102202c6c01700102222a7001740102252978017c0101258001840102192584018801021b2788018c0102202c8c01900102222a9001940102252998019c010125a001a401021925a401a801021b27a801ac0102202cac01b00102222ab001b401022529b801bc010125c001c401021925c401c801021b27c801cc0102202ccc01d00102222ad001d401022529d801dc010125e001e401021925e401e801021b27e801ec0102202cec01f00102222af001f401022529f801fc01012507001c00020a006400f401640000040000000000000000000000000000000003600000001000010d20003000010f40005000011160007000011280009000010da000b000010fc000d0000111e000f000011200011001010d20013001010f40015001011160017001011280019001010da001b001010fc001d0010111e001f001011208001c000e050046006603320000040a002d0000006400140001320002010002f00000010401011d04010801011e08010c0101240c011001012510011401012920012401011e24012801012028012c0101252c013001012730013401012a40014401011d44014801011e48014c0101244c015001012550015401012960016401012964016801012568016c0101246c017001012070017401012080018401011d84018801011e88018c0101248c0190010125900194010129a001a401011ea401a8010120a801ac010125ac01b0010127b001b401012ac001c401011dc401c801011ec801cc010124cc01d0010125d001d4010129e001e4010129e401e8010125e801ec010124ec01f0010120f001f401012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80068060000010002040802000300010804000500010806000700020408080009000206080a000b0001080c000d0001080e000f0001081000110002040812001300010814001500010816001700020408180019000206081a001b0001081c001d0001081e001f000108200021000303040822002300010324002500010326002700020304280029000203062a002b0001032c002d0001032e002f0001033000310002030432003300010334003500010336003700020304380039000203063a003b0001033c003d0001033e003f0001034000410002040842004300010844004500010846004700020408480049000206084a004b0001084c004d0001084e004f0001085000510002040852005300010854005500010856005700020408580059000206085a005b0001085c005d0001085e005f000108600061000303040862006300010364006500010366006700020304680069000203066a006b0001036c006d0001036e006f0001037000710002030472007300010374007500010376007700020304780079000203067a007b0001037c007d0001037e007f0001038000810002040882008300010884008500010886008700020408880089000206088a008b0001088c008d0001088e008f0001089000910002040892009300010894009500010896009700020408980099000206089a009b0001089c009d0001089e009f000108a000a10003030408a200a3000103a400a5000103a600a700020304a800a900020306aa00ab000103ac00ad000103ae00af000103b000b100020304b200b3000103b400b5000103b600b700020304b800b900020306ba00bb000103bc00bd000103be00bf000103c000c100020408c200c3000108c400c5000108c600c700020408c800c900020608ca00cb000108cc00cd000108ce00cf000108d000d100020408d200d3000108d400d5000108d600d700020408d800d900020608da00db000108dc00dd000108de00df000108e000e10003030408e200e3000103e400e5000103e600e700020304e800e900020306ea00eb000103ec00ed000103ee00ef000103f000f100020304f200f3000103f400f5000103f600f700020304f800f900020306fa00fb000103fc00fd000103fe00ff0001030001010102040802010301010804010501010806010701020408080109010206080a010b0101080c010d0101080e010f0101081001110102040812011301010814011501010816011701020408180119010206081a011b0101081c011d0101081e011f010108200121010303040822012301010324012501010326012701020304280129010203062a012b0101032c012d0101032e012f0101033001310102030432013301010334013501010336013701020304380139010203063a013b0101033c013d0101033e013f0101034001410102040842014301010844014501010846014701020408480149010206084a014b0101084c014d0101084e014f0101085001510102040852015301010854015501010856015701020408580159010206085a015b0101085c015d0101085e015f010108600161010303040862016301010364016501010366016701020304680169010203066a016b0101036c016d0101036e016f0101037001710102030472017301010374017501010376017701020304780179010203067a017b0101037c017d0101037e017f0101038001810102040882018301010884018501010886018701020408880189010206088a018b0101088c018d0101088e018f0101089001910102040892019301010894019501010896019701020408980199010206089a019b0101089c019d0101089e019f010108a001a10103030408a201a3010103a401a5010103a601a701020304a801a901020306aa01ab010103ac01ad010103ae01af010103b001b101020304b201b3010103b401b5010103b601b701020304b801b901020306ba01bb010103bc01bd010103be01bf010103c001c101020408c201c3010108c401c5010108c601c701020408c801c901020608ca01cb010108cc01cd010108ce01cf010108d001d101020408d201d3010108d401d5010108d601d701020408d801d901020608da01db010108dc01dd010108de01df010108e001e10103030408e201e3010103e401e5010103e601e701020304e801e901020306ea01eb010103ec01ed010103ee01ef010103f001f101020304f201f3010103f401f5010103f601f701020304f801f901020306fa01fb010103fc01fd010103fe01ff010103`), music.PlaybackMode.LoopingInBackground)
animations()
for (let value of tiles.getTilesByType(assets.tile`tile5`)) {
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(sprites.swamp.swampTile9)) {
    tiles.placeOnTile(mySprite2, value)
    mySprite2.x += 8
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
    if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
        myenemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.Enemy)
        myenemy.vx = 50
        myenemy.ay = 500
        tiles.placeOnTile(myenemy, value)
        animation.runImageAnimation(
        myenemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f f 
            . . . f a a a a a a a f a f a f 
            . . . f a a a a a a a 1 f 1 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a f f f a a f 
            . . . f a a a a a f a a a f a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a a a a a a f 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    }
}
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
        myenemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . f 5 f 5 f . . . . . . . 
            . . . f 5 f 4 f 5 f f f f f f . 
            . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
            . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
            f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
            . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
            . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 f f f 8 8 f . 
            . . . f 8 8 8 8 f 8 8 8 f 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Snail)
        myenemy.vx = 50
        myenemy.ay = 500
        tiles.placeOnTile(myenemy, value)
        animation.runImageAnimation(
        myenemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f 5 f . . . . . . . . 
            . . . . f 5 f 5 f . . . . . . . 
            . . . f 5 f 4 f 5 f f f f f f . 
            . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
            . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
            f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
            . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
            . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 f f f 8 8 f . 
            . . . f 8 8 8 8 f 8 8 8 f 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 f 5 f . . . . . . 
            . . . . f 5 f 4 f 5 f f f f f f 
            . . . f 5 f 4 f 5 f 8 f 8 f 8 f 
            . . f 5 f 4 f 5 f 8 8 1 f 1 8 f 
            . f 5 f 4 f 5 f 8 8 8 2 8 2 8 f 
            . . f 5 f 5 f 8 8 8 8 2 8 2 8 f 
            . . . f 5 f 8 8 8 8 8 8 8 8 8 f 
            . . . . f 8 8 8 8 8 f f f 8 8 f 
            . . . . f 8 8 8 8 f 8 8 8 f 8 f 
            . . . . f 8 8 8 8 8 8 8 8 8 8 f 
            . . . . f 8 8 8 8 8 8 8 8 8 8 f 
            . . . f 8 8 8 8 8 8 8 8 8 8 f . 
            . . f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    }
}
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`tile15`)) {
        if (mySprite.y + 8 < value.y) {
            tiles.setWallAt(value, true)
        } else {
            tiles.setWallAt(value, false)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`tile4`)) {
        if (mySprite.y + 8 < value.y && mySprite.y + 8 <= value.y - 20) {
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            tiles.setWallAt(value, true)
            tiles.setTileAt(value, assets.tile`tile42`)
        } else {
            tiles.setWallAt(value, false)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`tile29`)) {
        if (mySprite.y + 8 < value.y && mySprite.y + 8 <= value.y - 20) {
            music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            tiles.setWallAt(value, true)
            tiles.setTileAt(value, assets.tile`tile43`)
        } else {
            tiles.setWallAt(value, false)
        }
    }
})
game.onUpdate(function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallLeft))) {
        if (controller.up.isPressed() || controller.A.isPressed()) {
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 f 7 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f f f f f f f f f f f f . . . . 
                f . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . f f f f f f f f f f . . . . 
                f f 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 f 7 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 f f f f f f f f f f . . . . 
                f f . . . . . . . . . . . . . . 
                f . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
            )
        }
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallRight))) {
        if (controller.up.isPressed() || controller.A.isPressed()) {
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f f f f f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 1 f f 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 1 f f 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f f f f f f f f f f f f 
                . . . . . . . . . . . . . . . f 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f f f f f f f f . . 
                . . . . f 7 7 7 7 7 7 7 7 7 f f 
                . . . . f 7 1 f f 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 1 f f 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f f f f f f f f f f 7 f 
                . . . . . . . . . . . . . . f f 
                . . . . . . . . . . . . . . . f 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
            )
        }
    } else {
        animations()
        mySprite.ay = 600
    }
})
game.onUpdate(function () {
    if (!(cantmove)) {
        if (sprinting) {
            if (controller.left.isPressed()) {
                mySprite.vx = -150
            } else if (controller.right.isPressed()) {
                mySprite.vx = 150
            }
        } else {
            if (controller.left.isPressed()) {
                mySprite.vx = -100
            } else if (controller.right.isPressed()) {
                mySprite.vx = 100
            }
        }
        if (isjumping) {
            mySprite.vy = -150
        }
        if (pounding) {
            mySprite.vy = 1000
        }
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`tile42`)) {
            mySprite.fx = 50
        } else {
            mySprite.fx = 500
        }
    }
})
game.onUpdate(function () {
    if (mySprite.y < scene.cameraProperty(CameraProperty.Top)) {
        for (let value of tiles.getTilesByType(assets.tile`tile42`)) {
            tiles.setTileAt(value, assets.tile`tile4`)
        }
        for (let value of tiles.getTilesByType(assets.tile`tile43`)) {
            tiles.setTileAt(value, assets.tile`tile29`)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Snail)
        mySprite2.y += -240
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `, SpriteKind.Snail)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . f 5 f . . . . . . . 
                    . . . . . f 5 f 5 f . . . . . . 
                    . . . . f 5 f 4 f 5 f f f f f f 
                    . . . f 5 f 4 f 5 f 8 f 8 f 8 f 
                    . . f 5 f 4 f 5 f 8 8 1 f 1 8 f 
                    . f 5 f 4 f 5 f 8 8 8 2 8 2 8 f 
                    . . f 5 f 5 f 8 8 8 8 2 8 2 8 f 
                    . . . f 5 f 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 f f f 8 8 f 
                    . . . . f 8 8 8 8 f 8 8 8 f 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
        for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `, SpriteKind.Enemy)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f f f f f f 
                    . . . f a a a a a a a f a f a f 
                    . . . f a a a a a a a 1 f 1 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a f f f a a f 
                    . . . f a a a a a f a a a f a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a a a a a a f 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
    }
    if (mySprite.y > scene.cameraProperty(CameraProperty.Bottom)) {
        for (let value of tiles.getTilesByType(assets.tile`tile42`)) {
            tiles.setTileAt(value, assets.tile`tile4`)
        }
        for (let value of tiles.getTilesByType(assets.tile`tile43`)) {
            tiles.setTileAt(value, assets.tile`tile29`)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Snail)
        mySprite2.y += 240
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `, SpriteKind.Snail)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . f 5 f . . . . . . . 
                    . . . . . f 5 f 5 f . . . . . . 
                    . . . . f 5 f 4 f 5 f f f f f f 
                    . . . f 5 f 4 f 5 f 8 f 8 f 8 f 
                    . . f 5 f 4 f 5 f 8 8 1 f 1 8 f 
                    . f 5 f 4 f 5 f 8 8 8 2 8 2 8 f 
                    . . f 5 f 5 f 8 8 8 8 2 8 2 8 f 
                    . . . f 5 f 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 f f f 8 8 f 
                    . . . . f 8 8 8 8 f 8 8 8 f 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
        for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `, SpriteKind.Enemy)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f f f f f f 
                    . . . f a a a a a a a f a f a f 
                    . . . f a a a a a a a 1 f 1 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a f f f a a f 
                    . . . f a a a a a f a a a f a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a a a a a a f 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
    }
    if (mySprite.x > scene.cameraProperty(CameraProperty.Right)) {
        for (let value of tiles.getTilesByType(assets.tile`tile42`)) {
            tiles.setTileAt(value, assets.tile`tile4`)
        }
        for (let value of tiles.getTilesByType(assets.tile`tile43`)) {
            tiles.setTileAt(value, assets.tile`tile29`)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Snail)
        mySprite2.x += 320
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `, SpriteKind.Snail)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . f 5 f . . . . . . . 
                    . . . . . f 5 f 5 f . . . . . . 
                    . . . . f 5 f 4 f 5 f f f f f f 
                    . . . f 5 f 4 f 5 f 8 f 8 f 8 f 
                    . . f 5 f 4 f 5 f 8 8 1 f 1 8 f 
                    . f 5 f 4 f 5 f 8 8 8 2 8 2 8 f 
                    . . f 5 f 5 f 8 8 8 8 2 8 2 8 f 
                    . . . f 5 f 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 f f f 8 8 f 
                    . . . . f 8 8 8 8 f 8 8 8 f 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
        for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `, SpriteKind.Enemy)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f f f f f f 
                    . . . f a a a a a a a f a f a f 
                    . . . f a a a a a a a 1 f 1 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a f f f a a f 
                    . . . f a a a a a f a a a f a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a a a a a a f 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
    }
    if (mySprite.x < scene.cameraProperty(CameraProperty.Left)) {
        for (let value of tiles.getTilesByType(assets.tile`tile42`)) {
            tiles.setTileAt(value, assets.tile`tile4`)
        }
        for (let value of tiles.getTilesByType(assets.tile`tile43`)) {
            tiles.setTileAt(value, assets.tile`tile29`)
        }
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Snail)
        mySprite2.x += -320
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `, SpriteKind.Snail)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . f . . . . . . . . . 
                    . . . . . f 5 f . . . . . . . . 
                    . . . . f 5 f 5 f . . . . . . . 
                    . . . f 5 f 4 f 5 f f f f f f . 
                    . . f 5 f 4 f 5 f 8 f 8 f 8 f . 
                    . f 5 f 4 f 5 f 8 8 1 f 1 8 f . 
                    f 5 f 4 f 5 f 8 8 8 2 8 2 8 f . 
                    . f 5 f 5 f 8 8 8 8 2 8 2 8 f . 
                    . . f 5 f 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 f f f 8 8 f . 
                    . . . f 8 8 8 8 f 8 8 8 f 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . f 5 f . . . . . . . 
                    . . . . . f 5 f 5 f . . . . . . 
                    . . . . f 5 f 4 f 5 f f f f f f 
                    . . . f 5 f 4 f 5 f 8 f 8 f 8 f 
                    . . f 5 f 4 f 5 f 8 8 1 f 1 8 f 
                    . f 5 f 4 f 5 f 8 8 8 2 8 2 8 f 
                    . . f 5 f 5 f 8 8 8 8 2 8 2 8 f 
                    . . . f 5 f 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 f f f 8 8 f 
                    . . . . f 8 8 8 8 f 8 8 8 f 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . . f 8 8 8 8 8 8 8 8 8 8 f 
                    . . . f 8 8 8 8 8 8 8 8 8 8 f . 
                    . . f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
        for (let value of tiles.getTilesByType(assets.tile`tile10`)) {
            if (!(value.y < scene.cameraProperty(CameraProperty.Top) || value.y > scene.cameraProperty(CameraProperty.Bottom))) {
                myenemy = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `, SpriteKind.Enemy)
                myenemy.vx = 50
                myenemy.ay = 500
                tiles.placeOnTile(myenemy, value)
                animation.runImageAnimation(
                myenemy,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . f f f f f f f f f f f f f . 
                    . . f a a a a a a a f a f a f . 
                    . . f a a a a a a a 1 f 1 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a 2 a 2 a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a f f f a a f . 
                    . . f a a a a a f a a a f a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f f f f f f 
                    . . . f a a a a a a a f a f a f 
                    . . . f a a a a a a a 1 f 1 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a 2 a 2 a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a f f f a a f 
                    . . . f a a a a a f a a a f a f 
                    . . . f a a a a a a a a a a a f 
                    . . . f a a a a a a a a a a a f 
                    . . f a a a a a a a a a a a f . 
                    . f f f f f f f f f f f f f f . 
                    `],
                400,
                true
                )
            }
        }
    }
})
