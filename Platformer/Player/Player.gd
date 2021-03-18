extends KinematicBody2D

#variables
export (int) var ACCELERATION = 256
export (int) var MAX_SPEED = 48
export (float) var FRICITON = 0.25
export (int) var GRAVITY = 150
export (int) var JUMP_FORCE = 72

var just_jumped = false
var invincible = false setget _set_invincible

var motion = Vector2.ZERO

onready var sprite = $Sprite
onready var spriteAnimator = $SpriteAnimator
onready var blinkAnimator = $BlinkAnimator
onready var coyoteJumpTimer = $CoyoteJumpTimer
onready var stats = $PlayerStats

func _ready():
	Maininstances.Player = self

func queue_free():
	Maininstances.Player = self
	.queue_free()

func _set_invincible(value):
	invincible = value

func _physics_process(delta):
	just_jumped = false
	
	var input_vector = get_input_vector()
	apply_horizontal_force(input_vector, delta)
	apply_friction(input_vector)
	jump_check()
	apply_gravity(delta)
	update_animations(input_vector)
	move()

func get_input_vector():
	var input_vector = Vector2.ZERO
	input_vector.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
	return input_vector

func apply_horizontal_force(input_vector, delta):
	if input_vector.x != 0:
		motion.x += input_vector.x * ACCELERATION * delta
		motion.x = clamp(motion.x, -MAX_SPEED, MAX_SPEED)

func apply_friction(input_vector):
	if input_vector.x == 0 && is_on_floor():
		motion.x = lerp(motion.x, 0, FRICITON)

func jump_check():
	if is_on_floor() || coyoteJumpTimer.time_left > 0:
		if Input.is_action_just_pressed("ui_up"):
			motion.y = -JUMP_FORCE
			just_jumped = true
	else:
		if Input.is_action_just_released("ui_up") && motion.y < -JUMP_FORCE/2:
			motion.y = -JUMP_FORCE/2

func apply_gravity(delta):
	motion.y += GRAVITY * delta
	motion.y = min(motion.y, JUMP_FORCE)

func update_animations(input_vector):
	var facing = input_vector.x
	if facing != 0:
		sprite.scale.x = facing
	if input_vector.x != 0:
		spriteAnimator.play("Run")
	else:
		spriteAnimator.play("Idle")

	if not is_on_floor():
		if motion.y <= 1:
			spriteAnimator.play("JumpUp")
		elif motion.y >= 0:
			spriteAnimator.play("JumpDown")

func move():
	var was_in_air = not is_on_floor()
	var was_on_floor = is_on_floor()
	var last_motion = motion
	var last_position = position
	
	motion = move_and_slide(motion, Vector2.UP)
	#landing
	if was_in_air && is_on_floor():
		motion.x = last_motion.x
		just_jumped = false
	
	#just left ground
	if was_on_floor && not is_on_floor() && not just_jumped:
		motion.y = 0
		position.y = last_position.y
		coyoteJumpTimer.start()

func _on_Hurtbox_hit(damage):
	if not invincible:
		stats.health -= damage
		blinkAnimator.play("Blink")


func _on_PickupDetector_area_entered(area):
	if area is Pickup:
		area._pickup()

signal player_died

func _on_PlayerStats_player_died():
	emit_signal("player_died")
	queue_free()
