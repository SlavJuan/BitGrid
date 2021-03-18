extends Node2D

func _ready():
	Maininstances.Player.connect("player_died", self, "_on_Player_died")
	VisualServer.set_default_clear_color(Color(0.941176, 0.964706, 0.941176))

func _on_Player_died():
	get_tree().reload_current_scene()
