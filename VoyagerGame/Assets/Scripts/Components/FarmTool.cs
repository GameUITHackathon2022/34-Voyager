using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class FarmTool : Collectable
{
	Animator animator;
	public override void Collect(PlayerController player)
	{
		throw new System.NotImplementedException();
	}

	public override void Use()
	{
		throw new System.NotImplementedException();
	}

	public abstract void Collect(FarmerController farmer);
}
