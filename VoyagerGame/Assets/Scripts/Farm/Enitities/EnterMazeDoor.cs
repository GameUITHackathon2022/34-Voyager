using UnityEngine;

public class EnterMazeDoor : FarmInteractable
{
	public GameObject mazeMenu;
	// Start is called before the first frame update
	public override void Interact(FarmerController farmer)
	{
		if (farmer == null || mazeMenu == null)
			return;
		mazeMenu.SetActive(true);

	}
}
