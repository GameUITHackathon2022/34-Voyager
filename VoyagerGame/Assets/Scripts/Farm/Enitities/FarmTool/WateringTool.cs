using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WateringTool : FarmTool
{
	public override void Collect(FarmerController farmer)
	{
		farmer.collectFarmTool(this);
		this.gameObject.SetActive(false);
	}

	public override void Use(FarmerController farmer)
	{
		farmer.GetComponent<Animator>().SetTrigger("ActionWatering");
	}
}
