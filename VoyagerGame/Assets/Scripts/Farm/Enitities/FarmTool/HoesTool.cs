using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HoesTool : FarmTool
{
	public override void Collect(FarmerController farmer)
	{
		farmer.collectFarmTool(this);
		this.GetComponent<SpriteRenderer>().enabled = false;
	}

	public override void Use(FarmerController farmer)
	{
		farmer.GetComponent<Animator>().SetTrigger("ActionHoesing");
	}
}
