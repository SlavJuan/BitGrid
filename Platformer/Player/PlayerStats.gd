extends Node

signal player_died
 
signal health_changed(health)

export (int) var max_health = 3
onready var health = max_health setget set_health
export (int) var min_coins = 0
onready var coins = 0 setget set_coins

func set_health(value):
	health = clamp(value, 0, max_health)
	emit_signal("health_changed")
	if health == 0:
		emit_signal("player_died")

func set_coins(value):
	coins = clamp(value, min_coins, 1000)
