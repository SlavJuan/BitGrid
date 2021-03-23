extends Node2D

onready var leftpos = $Positions/Left
onready var centerpos = $Positions/Center
onready var rightpos = $Positions/Right

func _ready():
	Engine.set_target_fps(Engine.get_iterations_per_second())
	randomize()
	generate_level()
	
	Maininstances.Player.connect("player_died", self, "_on_Player_died")

func _unhandled_input(_event):
	if Input.is_action_just_pressed("ui_reload"):
		var _r = get_tree().reload_current_scene()

func generate_level():
	var LEFT = load("res://Levels/Left/" + str(int(rand_range(-1, 6))) + ".tscn")
	var CENTER = load("res://Levels/Center/" + str(int(rand_range(-1, 6))) + ".tscn")
	var RIGHT = load("res://Levels/Right/" + str(int(rand_range(-1, 6))) + ".tscn")
	
	var LEVELS = [LEFT, CENTER, RIGHT]
	var positions = [leftpos, centerpos,rightpos]
	
	for i in range(3):
		var level = LEVELS[i].instance()
		level.position = positions[i].position
		add_child(level)

func _on_Player_died():
	var _r = get_tree().change_scene("res://Menus/MainMenu.tscn")
