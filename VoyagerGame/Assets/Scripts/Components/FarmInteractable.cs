using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class FarmInteractable : MonoBehaviour
{
	public abstract void Interact(FarmerController farmer);
}
