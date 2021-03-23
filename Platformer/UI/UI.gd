extends CanvasLayer

onready var healthMeter = $HealthMeter

var player = Maininstances.Player

func _process(_delta):

	healthMeter.rect_size.x = Maininstances.Player.stats.health * 7 + 2 * Maininstances.Player.stats.health
