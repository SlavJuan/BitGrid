extends Control



func play():
	var _c = get_tree().change_scene("res://Game/Game.tscn")

func quit():
	get_tree().quit()
