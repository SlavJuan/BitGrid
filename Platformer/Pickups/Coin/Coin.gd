extends Pickup

func _pickup():
	Maininstances.Player.stats.coins += 1
	._pickup()
